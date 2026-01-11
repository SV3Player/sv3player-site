#!/bin/bash
# Check SV3 Player Site container status
cd /var/www/sv3-player-site
docker compose ps
echo ""
echo "==> Recent logs:"
docker compose logs --tail 30
