---
title: "Custom GraphQL"
description: "Connect SV3 Player to any GraphQL endpoint"
summary: "Setup guide for custom GraphQL endpoints"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 250
toc: true
seo:
  title: "Custom GraphQL Setup Guide - SV3 Player"
  description: "Learn how to connect SV3 Player to custom GraphQL endpoints."
  canonical: ""
  noindex: false
---

SV3 Player can connect to any GraphQL endpoint that serves video content. This allows integration with custom or unsupported media servers.

## Requirements

- A GraphQL endpoint that returns video data
- Knowledge of your endpoint's schema and field names

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service** and select **Custom GraphQL**
3. Enter your server details:
   - **Server URL**: Your GraphQL server address
   - **API Key** (if required): Authentication token
4. Tap **Configure Mappings** to set up field mappings
5. Tap **Test Connection**
6. If successful, tap **Save**

## Field Mapping

SV3 Player needs to know how to interpret your GraphQL responses. The mapping configuration allows you to specify:

### Query Configuration
- **Video List Query**: The GraphQL query to fetch videos
- **Page Variable**: Variable name for pagination page number
- **Per Page Variable**: Variable name for items per page

### Response Structure
- **Root Path**: Path to the video array in the response (e.g., `data.findScenes.scenes`)
- **Count Path**: Path to the total count (e.g., `data.findScenes.count`)

### Field Paths
- **ID**: Path to video ID
- **Title**: Path to video title
- **Stream URL**: Path to the streaming URL
- **Duration**: Path to video duration
- **Thumbnail URL**: Path to thumbnail image

## Default Configuration

By default, SV3 Player is pre-configured for Stash-compatible endpoints. If your server uses the same schema as Stash, you may not need to modify the mappings.

## Testing Your Mappings

Use the **Test Mappings** feature to paste a sample JSON response and verify that your field paths are correct before saving.

## Troubleshooting

**No Videos Loading**
- Verify your query is correct
- Check the root path points to the video array
- Ensure required fields (id, title, streamURL) are mapped

**Videos Won't Play**
- Verify the stream URL path is correct
- Check that URLs are accessible from your device
