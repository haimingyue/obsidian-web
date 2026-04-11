cd /root/obsidian-web
npx quartz build
rm -rf /var/www/obsidian-web/*
cp -r public/* /var/www/obsidian-web/
chown -R www-data:www-data /var/www/obsidian-web
systemctl reload nginx
