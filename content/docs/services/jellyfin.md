---
title: "Jellyfin"
description: "Connect SV3 Player to your Jellyfin server"
summary: "Setup guide for Jellyfin Media Server"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 240
toc: true
seo:
  title: "Jellyfin Setup Guide - SV3 Player"
  description: "Learn how to connect SV3 Player to your Jellyfin server."
  canonical: ""
  noindex: false
---

Jellyfin is a free, open-source media server. SV3 Player provides full integration with Jellyfin servers.

## Requirements

- Jellyfin server running and accessible
- Jellyfin username and password

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service** and select **Jellyfin**
3. Enter your server details:
   - **Server URL**: Your Jellyfin server address (e.g., `192.168.1.100:8096`)
   - **Username**: Your Jellyfin username
   - **Password**: Your Jellyfin password
4. Tap **Test Connection**
5. If successful, tap **Save**

## Selecting a Library

After connecting:

1. Tap the folder icon in the navigation bar
2. Select the library you want to browse
3. Your videos will load from that library

## Features

With Jellyfin connected, you can:

- Browse all video libraries
- Search your media collection
- Filter by various metadata
- Stream videos directly

## Troubleshooting

**Authentication Failed**
- Verify your username and password
- Check user permissions in Jellyfin admin

**Connection Issues**
- Default port is 8096
- Ensure your device can reach the server
- Check if HTTPS is required
