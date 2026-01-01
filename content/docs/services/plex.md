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

Plex Media Server is a popular self-hosted media solution. SV3 Player connects to your Plex server using secure OAuth authentication — you sign in with your Plex account rather than managing API keys manually.

## Requirements

- Plex Media Server running and accessible
- A Plex account with access to the server
- The server must be claimed and linked to your Plex account

---

## Connection Steps

1. Open SV3 Player and go to **Settings** → **Service Connections**
2. Tap **Add Service**
3. Select **Plex** from the service list
4. Enter your **Server URL** (e.g., `192.168.1.100:32400`)
5. Tap **Sign In with Plex**
6. You'll be directed to Plex's authentication page
7. Sign in with your Plex account credentials
8. Authorize SV3 Player to access your server
9. Once authenticated, tap **Save**

The default Plex port is **32400**.

---

## How Plex Authentication Works

Unlike other services that use API keys, Plex uses OAuth:

1. SV3 Player requests a PIN from Plex
2. You authorize the PIN by signing into your Plex account
3. SV3 Player receives an authentication token
4. This token is stored securely in your device's Keychain

Your Plex username and password are never stored in SV3 Player — only the authorization token.

---

## Selecting a Library

After connecting, you'll need to select which library to browse:

1. Tap the **folder icon** in the navigation bar
2. Choose from your available libraries
3. Your videos will load from the selected library

You can switch libraries at any time using the same folder icon.

---

## What You Can Do

With Plex connected, SV3 Player gives you access to:

- **Libraries** — Browse your video libraries
- **Search** — Find content across your server
- **Metadata** — View titles, descriptions, and artwork
- **Direct Play** — Stream videos without transcoding when possible

---

## URL Formats

| Format | Example |
|--------|---------|
| Local IP | `192.168.1.100:32400` |
| Hostname | `plex.local:32400` |
| Remote access | Via Plex relay (if enabled) |

If accessing remotely, ensure remote access is enabled in your Plex server settings.

---

## Troubleshooting

### Authentication Failed

- **Check your credentials** — Make sure you're using the correct Plex account
- **Server not claimed** — The server must be claimed and linked to your Plex account
- **Two-factor authentication** — If enabled, complete the 2FA challenge during sign-in

### Connection Issues

- **Default port** — Plex uses port 32400 by default
- **Remote access** — For access outside your network, enable remote access in Plex settings
- **Firewall** — Ensure port 32400 is accessible

### Library Not Showing

- **Permissions** — Your Plex account must have access to the library
- **Library type** — SV3 Player works with video libraries
