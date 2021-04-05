FROM node as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN  npm run build:production

FROM nginx:1.16.1-alpine as prod-stage
COPY --from=build-step /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



