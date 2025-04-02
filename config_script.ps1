# ADD (A) RECORD IN DNS MANAGEMENT FOR THE DOMAIN

# generate certbot certificate for domain
ssh root@89.58.37.152 -t 'sudo certbot --nginx -d gts-globaltalentsolution.com -d www.gts-globaltalentsolution.com'

# copy plausible config file to nginx sites-available
scp ./gts-globaltalentsolution.com.conf root@89.58.37.152:/etc/nginx/sites-available/
# symlink
ssh root@89.58.37.152 -t "
ln -s /etc/nginx/sites-available/gts-globaltalentsolution.com.conf /etc/nginx/sites-enabled/
# reload nginx
sudo systemctl daemon-reload
sudo systemctl reload nginx
sudo systemctl restart nginx
"