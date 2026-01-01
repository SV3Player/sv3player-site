---
title: "Getting Started"
description: "Set up SV3 Player and connect your first server"
summary: "Everything you need to start using SV3 Player"
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 100
toc: true
seo:
  title: "Getting Started with SV3 Player"
  description: "Learn how to install SV3 Player and connect to your media servers."
  canonical: ""
  noindex: false
---

Get up and running with SV3 Player in just a few minutes.

## Requirements

Before you begin, you'll need:

- **iPhone or iPad** running iOS 17.0 or later
- **A compatible media server** already set up and accessible:
  - Stash
  - Plex Media Server
  - Emby
  - Jellyfin
  - Any GraphQL endpoint with video content

SV3 Player is a client app — it connects to your existing servers but doesn't provide or host any content itself.

---

## Installation

1. Download SV3 Player from the App Store
2. Open the app to begin the onboarding process

---

## Onboarding Walkthrough

When you first launch SV3 Player, you'll be guided through a quick setup process.

### Step 1: Welcome

The welcome screen introduces SV3 Player and confirms that you understand the app requires your own media servers. This isn't a streaming service — it's a player for content you already have access to.

Tap **Get Started** to continue.

### Step 2: Security (Optional)

You can protect your app with a 4-digit PIN. This adds a layer of privacy, requiring the PIN each time you open SV3 Player.

**Setting up a PIN:**
1. Tap **Set Up PIN**
2. Enter a 4-digit code
3. Confirm your code

**Biometric unlock:** If your device supports Face ID or Touch ID, you can enable biometric unlock after setting a PIN. This lets you unlock with your face or fingerprint instead of typing the code each time.

You can skip this step and enable security later in Settings.

### Step 3: Content Analysis (Optional)

Content Analysis is an optional feature that automatically blurs potentially sensitive thumbnails. This is useful when browsing in public or shared spaces.

**How it works:**
- Uses Apple's on-device Sensitive Content Analysis framework
- All processing happens locally on your device — nothing is sent anywhere
- Detected content is blurred until you tap to reveal it

**Requirements:** iOS 17 or later

Toggle the feature on or off based on your preference. You can change this anytime in Settings.

### Step 4: Connect Your Servers

The final step is adding your media servers. SV3 Player supports:

| Service | Connection Type |
|---------|-----------------|
| Stash | GraphQL with API key |
| Plex | OAuth authentication |
| Emby | Username/password or API key |
| Jellyfin | Username/password or API key |
| Custom GraphQL | Configurable endpoint |

You can either:
- Tap **Add Your First Server** to go directly to service setup
- Tap **I'll Do This Later** to explore the app first

---

## Adding Your First Server

If you chose to add a server during onboarding (or later from Settings):

1. Go to **Settings** → **Service Connections**
2. Tap **Add Service**
3. Select your server type
4. Enter your server details:
   - **Server URL** — Your server's address (e.g., `192.168.1.100:9999`)
   - **Authentication** — API key, username/password, or OAuth depending on the service
5. Tap **Test Connection** to verify everything works
6. Tap **Save**

For detailed setup instructions for each service type, see the [Service Guides](/docs/services/).

---

## Basic Navigation

Once connected, here's how to get around:

### Feed View
The main screen shows your video library in a vertical feed. Swipe up to see more content, or tap a video to start playback.

### Player Controls
- **Swipe up** — Next video
- **Swipe down** — Previous video
- **Tap** — Show/hide controls
- **Double-tap sides** — Skip forward/backward

### Queue
Build a playlist by adding videos to your queue. Access the queue from the player controls to see what's coming up, reorder items, or enable shuffle.

### Filters
Narrow down your library using filters. Filter by tags, performers, studios, ratings, duration, and more depending on your server's metadata.

---

## Next Steps

- **[Service Guides](/docs/services/)** — Detailed setup for Stash, Plex, Emby, Jellyfin, and Custom GraphQL
- **[Privacy Policy](/privacy/)** — How SV3 Player handles your data
