# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
COPY ./nextjs.conf /etc/nginx/conf.d/nextjs.conf

# Expose the listening port
EXPOSE 8080

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
