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

Stash is a self-hosted media organizer with a GraphQL API. SV3 Player provides full integration with Stash servers.

## Requirements

- Stash server running and accessible from your iOS device
- API key (generated in Stash settings)

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service** and select **Stash**
3. Enter your server details:
   - **Server URL**: Your Stash server address (e.g., `192.168.1.100:9999`)
   - **API Key**: Your Stash API key
4. Tap **Test Connection**
5. If successful, tap **Save**

## Getting Your API Key

1. Open your Stash web interface
2. Go to **Settings** → **Security**
3. Generate a new API key or copy an existing one

## Features

With Stash connected, you can:

- Browse all scenes with thumbnails and metadata
- Filter by performers, tags, and studios
- View performer details
- Rate and favorite scenes
- Stream videos directly

## Troubleshooting

**Connection Failed**
- Verify your server URL is correct and includes the port
- Ensure your device can reach the server (same network or VPN)
- Check that your API key is valid

**Videos Won't Play**
- Verify the video files are accessible to Stash
- Check that transcoding is working in Stash settings
