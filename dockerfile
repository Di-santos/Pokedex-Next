FROM node:16.13.0-alpine3.14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY /public ./public
COPY /src ./src
COPY .babelrc ./.babelrc
COPY /README.md ./README.md
COPY /.gitignore ./.gitignore
COPY /design.json ./design.json
COPY /.next ./.next
COPY /README.md ./README.md

EXPOSE 3000
EXPOSE 3333
CMD ["yarn", "dev"]