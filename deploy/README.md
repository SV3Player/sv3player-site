# Deployment (Docker)

## Prerequisites

On the server:
```bash
# Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

## Deploy

```bash
# First time or update
sudo ./deploy/deploy.sh
```

## Commands

```bash
./deploy/restart.sh   # Restart the container
./deploy/stop.sh      # Stop the container
./deploy/status.sh    # Check status and recent logs
```

## Manual Docker Commands

```bash
cd /var/www/sv3-player-site

# Rebuild and restart
docker compose up -d --build

# View logs
docker compose logs -f

# Shell into container
docker compose exec sv3-player-site sh
```

## NGINX

1. Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/sv3player.com`
2. Symlink: `sudo ln -s /etc/nginx/sites-available/sv3player.com /etc/nginx/sites-enabled/`
3. Test: `sudo nginx -t`
4. Reload: `sudo systemctl reload nginx`

The container binds to `127.0.0.1:3000` — only accessible from the host.

## Cloudflare

- SSL/TLS mode: "Full (strict)"
- Origin certificate installed on server
