FROM --platform=linux/amd64 node:18.17.0 as staging
ENV NODE_ENV=production
WORKDIR /company
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn add tailwindcss autoprefixer
RUN yarn build
FROM nginx:latest
WORKDIR /company
COPY --from=staging /company/ /company
COPY --from=staging /company/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# docker build . -t hilmannafiin009/mafiincloud -f Dockerfile --platform=linux/amd64
