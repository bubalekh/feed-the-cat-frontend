FROM nginxinc/nginx-unprivileged:1.25.0-alpine3.17
LABEL authors="kane"
WORKDIR /usr/share/nginx/html
USER root
RUN rm -rf ./*
COPY dist/ ./
USER nginx:nginx
