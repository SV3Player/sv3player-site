#!/bin/bash
# Stop SV3 Player Site container
cd /var/www/sv3-player-site
docker compose down
echo "Container stopped"
