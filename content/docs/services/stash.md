---
title: "Stash"
description: "Connect SV3 Player to your Stash server"
summary: "Setup guide for Stash media server"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 210
toc: true
seo:
  title: "Stash Setup Guide - SV3 Player"
  description: "Learn how to connect SV3 Player to your Stash media server."
  canonical: ""
  noindex: false
---

Stash is a self-hosted media organizer with a powerful GraphQL API. SV3 Player provides full integration with Stash servers, letting you browse and play your entire library from your iOS device.

## Requirements

- Stash server running and accessible from your iOS device
- API key generated in Stash settings
- Network access to your server (local network, VPN, or exposed endpoint)

---

## Getting Your API Key

Before connecting, you'll need an API key from your Stash server:

1. Open your Stash web interface in a browser
2. Click the **gear icon** to open Settings
3. Navigate to **Security**
4. Under **Authentication**, find the API Keys section
5. Click **Generate** to create a new key, or copy an existing one
6. Save this key — you'll need it for SV3 Player

**Tip:** Give your API key a descriptive name like "SV3 Player" so you can identify it later.

---

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service**
3. Select **Stash** from the service list
4. Enter your server details:
   - **Server URL** — Your Stash server address (e.g., `192.168.1.100:9999` or `stash.yourdomain.com`)
   - **API Key** — The key you generated above
5. Tap **Test Connection** to verify
6. If successful, tap **Save**

The default Stash port is **9999**. Include the port in your URL unless you've configured a reverse proxy.

---

## What You Can Do

With Stash connected, SV3 Player gives you access to:

- **Scenes** — Browse all your videos with thumbnails, titles, and metadata
- **Performers** — Filter content by performer
- **Tags** — Organize and filter by your tag system
- **Studios** — Filter by studio/source
- **Ratings** — See and filter by your ratings
- **Favorites** — Quick access to favorited content

---

## URL Formats

SV3 Player accepts various URL formats:

| Format | Example |
|--------|---------|
| IP with port | `192.168.1.100:9999` |
| Hostname with port | `stash.local:9999` |
| Domain (with proxy) | `stash.yourdomain.com` |
| HTTPS | `https://stash.yourdomain.com` |

If you don't specify a protocol, SV3 Player will try HTTPS first, then fall back to HTTP.

---

## Troubleshooting

### Connection Failed

- **Check the URL** — Make sure you've included the port (default: 9999)
- **Verify network access** — Your iOS device must be able to reach the server. Try accessing the Stash URL in Safari first.
- **Check the API key** — Regenerate it if you're unsure it's correct
- **Firewall issues** — Ensure port 9999 (or your custom port) is open

### Videos Won't Play

- **Check stream URL** — Stash needs to serve video files. Verify playback works in the Stash web interface.
- **Transcoding** — If videos are in unusual formats, ensure Stash's transcoding is configured
- **File permissions** — Stash must have read access to your video files

### Slow Loading

- **Thumbnail generation** — If Stash is still generating thumbnails, browsing may be slow initially
- **Network speed** — Large thumbnail grids require decent bandwidth. Consider enabling thumbnail caching in Stash.

---

## Advanced: Multiple Stash Servers

You can connect multiple Stash servers to SV3 Player. Each server appears as a separate connection in Settings. Switch between them by tapping the server name in the app.
