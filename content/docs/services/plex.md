---
title: "Plex"
description: "Connect SV3 Player to your Plex Media Server"
summary: "Setup guide for Plex Media Server"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 220
toc: true
seo:
  title: "Plex Setup Guide - SV3 Player"
  description: "Learn how to connect SV3 Player to your Plex Media Server."
  canonical: ""
  noindex: false
---

Plex Media Server is a popular self-hosted media solution. SV3 Player connects via Plex's PIN authentication flow.

## Requirements

- Plex Media Server running and accessible
- Plex account credentials

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service** and select **Plex**
3. Enter your server details:
   - **Server URL**: Your Plex server address (e.g., `192.168.1.100:32400`)
4. Tap **Sign In with Plex**
5. Complete the Plex authentication in the browser
6. Return to SV3 Player — your connection should be active

## Selecting a Library

After connecting:

1. Tap the folder icon in the navigation bar
2. Select the library you want to browse
3. Your videos will load from that library

## Features

With Plex connected, you can:

- Browse all video libraries
- Search across your library
- Filter by various metadata
- Stream videos with transcoding support

## Troubleshooting

**Authentication Failed**
- Ensure you're signed into the correct Plex account
- Try signing out and back in

**Server Not Found**
- Verify the server URL and port (default: 32400)
- Check that your Plex server is running
- Ensure your device can reach the server
