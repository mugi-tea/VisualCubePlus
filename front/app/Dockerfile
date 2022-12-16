FROM node:18 as build-stage

WORKDIR /app
COPY vue-app/package-lock.json ./
COPY vue-app/package.json ./
RUN npm install
COPY vue-app/ ./
RUN npm run build

FROM nginx:1.17.10-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
