FROM nginx:latest
LABEL authors="kane"
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY dist/ ./
