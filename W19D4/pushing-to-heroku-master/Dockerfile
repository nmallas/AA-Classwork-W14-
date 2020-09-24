FROM node:12.18.4-alpine3.9

WORKDIR /app

COPY ./backend .

COPY ./wait-for .

COPY ./frontend/build ./public

ENV NODE_ENV=production

ENV JWT_SECRET=aaa967f1-2b08-4dde-a086-5df6bc8eff91

ENV JWT_EXPIRES_IN=604800

CMD ["npm", "start"]
