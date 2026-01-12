# SV3 Player Site - Deployment Guide

## Overview

The site runs as a Docker container behind Nginx Proxy Manager (NPM). The container joins NPM's network for internal communication.

**Current Setup:**
- Domain: sv3player.com
- Server path: `/var/www/sv3-player-site`
- Container name: `sv3-player-site`
- Internal port: 3000
- Host port: 4444 (localhost only)
- Network: `containers-network` (shared with NPM)

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build locally (to test production build)
npm run build
```

---

## Making Changes

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "feat: Description of change"
   git push
   ```

---

## Deploying Updates

SSH into the server and run:

```bash
cd /var/www/sv3-player-site
./deploy/deploy.sh
```

Or manually:

```bash
cd /var/www/sv3-player-site
git pull
docker compose up -d --build
```

### Quick Commands

```bash
./deploy/restart.sh   # Restart container (no rebuild)
./deploy/stop.sh      # Stop container
./deploy/status.sh    # Check status and logs
```

---

## Setting Up a New VPS

### 1. Install Docker

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# Log out and back in for group changes
```

### 2. Clone the Repository

```bash
sudo mkdir -p /var/www
sudo chown $USER:$USER /var/www
cd /var/www
git clone https://git.nick-mini.com/nickc/sv3-player-site.git
cd sv3-player-site
```

### 3. Set Up Nginx Proxy Manager (if not already running)

Create NPM docker-compose (e.g., `/opt/npm/docker-compose.yml`):

```yaml
services:
  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"  # Admin UI
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - containers-network

networks:
  containers-network:
    name: containers-network
```

Start NPM:

```bash
cd /opt/npm
docker compose up -d
```

Access admin UI at `http://your-server-ip:81`
- Default login: `admin@example.com` / `changeme`

### 4. Create the Shared Network (if NPM didn't create it)

```bash
docker network create containers-network
```

### 5. Deploy the Site

```bash
cd /var/www/sv3-player-site
./deploy/deploy.sh
```

### 6. Configure NPM Proxy Host

In NPM admin UI (port 81):

1. Add Proxy Host
2. **Domain Names**: `sv3player.com`, `www.sv3player.com`
3. **Scheme**: `http`
4. **Forward Hostname/IP**: `sv3-player-site`
5. **Forward Port**: `3000`
6. Enable **Websockets Support**
7. **SSL Tab**: Request Let's Encrypt certificate or use Cloudflare origin cert

### 7. DNS Configuration

Point your domain to the server:
- A record: `sv3player.com` → `your-server-ip`
- A record: `www.sv3player.com` → `your-server-ip` (or CNAME to sv3player.com)

If using Cloudflare:
- SSL/TLS mode: "Full" or "Full (strict)"
- Proxy status: Proxied (orange cloud)

---

## Docker Configuration

### docker-compose.yml

```yaml
services:
  sv3-player-site:
    build: .
    container_name: sv3-player-site
    restart: unless-stopped
    ports:
      - "127.0.0.1:4444:3000"  # Host access only
    networks:
      - containers-network      # NPM access
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

networks:
  containers-network:
    external: true
```

### Key Points

- `127.0.0.1:4444:3000` - Only localhost can access port 4444 directly
- `containers-network: external: true` - Uses existing network (created by NPM)
- NPM reaches the container via `sv3-player-site:3000` on the shared network

---

## Troubleshooting

### Container won't start - port in use

```bash
# Find what's using the port
sudo ss -tlnp | grep 4444

# If it's a stale docker-proxy, kill it
sudo kill <pid>

# Restart
docker compose up -d
```

### NPM can't reach the container (502 error)

1. Verify container is on the right network:
   ```bash
   docker network inspect containers-network | grep sv3-player-site
   ```

2. Test connectivity from NPM:
   ```bash
   docker exec nginx-proxy-manager curl -s http://sv3-player-site:3000/
   ```

3. Check NPM is using correct settings:
   - Hostname: `sv3-player-site` (not an IP)
   - Port: `3000` (not 4444)

### Check container logs

```bash
docker logs sv3-player-site --tail 50
docker logs sv3-player-site -f  # Follow logs
```

### Rebuild from scratch

```bash
cd /var/www/sv3-player-site
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Check container health

```bash
docker ps --filter name=sv3-player-site
# Look for (healthy) vs (unhealthy)
```

---

## File Structure

```
deploy/
├── DEPLOYMENT.md    # This file
├── README.md        # Quick reference
├── deploy.sh        # Full deploy script
├── restart.sh       # Restart container
├── stop.sh          # Stop container
├── status.sh        # Check status
└── nginx.conf       # Reference nginx config (for non-NPM setups)
```

---

## Useful Commands

```bash
# View all containers
docker ps -a

# View networks
docker network ls

# Inspect container
docker inspect sv3-player-site

# Shell into container
docker exec -it sv3-player-site sh

# Check disk usage
docker system df

# Clean up unused images
docker image prune -a
```
