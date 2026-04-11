FROM node:22-slim AS builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx quartz build

FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/public/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
