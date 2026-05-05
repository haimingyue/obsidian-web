```sh
cd /root/obsidian-web
git pull origin master
export QUARTZ_BASE_URL=ob.tlpy8.com
export GOATCOUNTER_SITE_ID=qianheming

# Optional: only set this if you use a custom GoatCounter domain.
# export GOATCOUNTER_HOST=stats.ob.tlpy8.com

npx quartz build
rm -rf /var/www/obsidian-web/*
cp -r public/* /var/www/obsidian-web/
chown -R www-data:www-data /var/www/obsidian-web
systemctl reload nginx
```

## 访问记录和趋势

本站已启用 GoatCounter 统计。访问数据由 GoatCounter 免费托管服务或你配置的自托管 GoatCounter 服务保存，不会记录在个人电脑上。

部署前需要在 GoatCounter 注册站点，并把 `GOATCOUNTER_SITE_ID` 改成你的 GoatCounter code，例如 GoatCounter 地址是 `https://mycode.goatcounter.com`，这里就填 `mycode`。部署后首页会展示总访问计数，趋势、来源和页面排行在 GoatCounter 后台查看。
