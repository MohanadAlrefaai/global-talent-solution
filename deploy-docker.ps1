# login to ofuq docker reg
docker login docker-registry.ofuq.ae

# build image locally
docker build --platform linux/arm64/v8 --tag albawaba_orgwania_website .
# tag image to prep push it to ofuq docker reg
docker tag albawaba_orgwania_website:latest docker-registry.ofuq.ae/albawaba_orgwania_website:latest
# push image to ofuq docker reg
docker push docker-registry.ofuq.ae/albawaba_orgwania_website
# docker compose on deploy context
docker-compose --context deploy down
docker-compose --context deploy rm -f
docker-compose --context deploy pull
docker-compose --context deploy up -d