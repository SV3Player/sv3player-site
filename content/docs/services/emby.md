---
title: "Emby"
description: "Connect SV3 Player to your Emby server"
summary: "Setup guide for Emby Media Server"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 230
toc: true
seo:
  title: "Emby Setup Guide - SV3 Player"
  description: "Learn how to connect SV3 Player to your Emby Media Server."
  canonical: ""
  noindex: false
---

Emby is a media server that organizes and streams your personal media. SV3 Player supports full Emby integration.

## Requirements

- Emby server running and accessible
- Emby username and password

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service** and select **Emby**
3. Enter your server details:
   - **Server URL**: Your Emby server address (e.g., `192.168.1.100:8096`)
   - **Username**: Your Emby username
   - **Password**: Your Emby password
4. Tap **Test Connection**
5. If successful, tap **Save**

## Selecting a Library

After connecting:

1. Tap the folder icon in the navigation bar
2. Select the library you want to browse
3. Your videos will load from that library

## Features

With Emby connected, you can:

- Browse video libraries
- Search your media collection
- Filter by metadata
- Stream with transcoding support

## Troubleshooting

**Authentication Failed**
- Verify your username and password
- Check that the user has access to the libraries

**Connection Issues**
- Default port is 8096 (HTTP) or 8920 (HTTPS)
- Ensure your device can reach the server
