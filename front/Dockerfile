FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build -- --configuration production

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/l2cc /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]