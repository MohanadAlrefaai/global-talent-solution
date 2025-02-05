# ADD (A) RECORD IN DNS MANAGEMENT FOR THE DOMAIN

# generate certbot certificate for domain
ssh root@89.58.37.152 -t 'sudo certbot --nginx -d template-exo.ofuq.ae'

# copy plausible config file to nginx sites-available
scp ./template-exo.ofuq.ae.conf root@89.58.37.152:/etc/nginx/sites-available/
# symlink
ssh root@89.58.37.152 -t "
ln -s /etc/nginx/sites-available/template-exo.ofuq.ae.conf /etc/nginx/sites-enabled/
# reload nginx
sudo systemctl daemon-reload
sudo systemctl reload nginx
sudo systemctl restart nginx
"