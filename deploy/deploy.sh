#!/bin/bash
# Deploy SV3 Player Site (Docker)
# Usage: ./deploy.sh

set -e

SITE_DIR="/var/www/sv3-player-site"
REPO_URL="https://git.nick-mini.com/nickc/sv3-player-site.git"
BRANCH="nextjs-migration"

echo "==> Deploying SV3 Player Site"

# Pull latest code
if [ -d "$SITE_DIR" ]; then
  echo "==> Pulling latest changes"
  cd "$SITE_DIR"
  git fetch origin
  git reset --hard "origin/$BRANCH"
else
  echo "==> Cloning repository"
  git clone -b "$BRANCH" "$REPO_URL" "$SITE_DIR"
  cd "$SITE_DIR"
fi

# Build and start container
echo "==> Building and starting container"
docker compose up -d --build

echo "==> Deploy complete"
docker compose ps
