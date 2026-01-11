#!/bin/bash
# Restart SV3 Player Site container
cd /var/www/sv3-player-site
docker compose restart
echo "Container restarted"
