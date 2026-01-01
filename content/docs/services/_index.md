---
title: "Service Guides"
description: "Setup instructions for each supported media server"
summary: "Detailed guides for connecting to Stash, Plex, Emby, Jellyfin, and Custom GraphQL"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 200
toc: true
seo:
  title: "SV3 Player Service Guides"
  description: "Learn how to connect SV3 Player to your media servers."
  canonical: ""
  noindex: false
---

SV3 Player connects directly to your self-hosted media servers. Choose your server type below for step-by-step setup instructions.

---

## Quick Reference

| Service | Default Port | Authentication | API Type |
|---------|--------------|----------------|----------|
| [Stash](/docs/services/stash/) | 9999 | API Key | GraphQL |
| [Plex](/docs/services/plex/) | 32400 | OAuth (Plex account) | REST |
| [Emby](/docs/services/emby/) | 8096 | Username/Password or API Key | REST |
| [Jellyfin](/docs/services/jellyfin/) | 8096 | Username/Password or API Key | REST |
| [Custom GraphQL](/docs/services/custom-graphql/) | Varies | Configurable | GraphQL |

---

## Detailed Guides

### [Stash](/docs/services/stash/)
Connect to your Stash media organizer. Full support for scenes, performers, tags, studios, and ratings. Requires an API key from your Stash settings.

### [Plex](/docs/services/plex/)
Connect to Plex Media Server using your Plex account. Sign in through Plex's secure OAuth flow — no API keys to manage.

### [Emby](/docs/services/emby/)
Connect to your Emby server with username/password or API key authentication. Browse libraries, search content, and stream with transcoding support.

### [Jellyfin](/docs/services/jellyfin/)
Connect to the open-source Jellyfin media server. Similar to Emby with username/password or API key authentication.

### [Custom GraphQL](/docs/services/custom-graphql/)
Connect to any GraphQL endpoint that serves video content. Configure custom queries and field mappings for non-standard servers.

---

## Multiple Servers

You can connect multiple servers to SV3 Player — even different types. For example, you might have both a Stash server and a Plex server. Each appears as a separate connection in Settings, and you can switch between them at any time.

---

## Connection Tips

- **Local network** — For servers on your home network, use the local IP address (e.g., `192.168.1.100`)
- **Remote access** — For access outside your network, use a VPN, reverse proxy, or the server's remote access features
- **HTTPS** — SV3 Player tries HTTPS first. For local servers without SSL, it will fall back to HTTP automatically.
- **Test first** — Always use the **Test Connection** button before saving to verify your settings
