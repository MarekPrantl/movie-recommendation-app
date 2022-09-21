# Hasn't been tested - personal computer can't run Docker due to virtualization

FROM node:18-alpine

# Yarn install
RUN npm install -g yarn

# API key for TMDB database requests
# Normally would be secret
ENV TMDB_API_KEY=1bf3263d134dca13c6fcbe0955370d4b

WORKDIR /srv/

# Copy necessary files
COPY package.json /srv/
COPY yarn.lock /srv/
COPY webpack.config.js /srv/
COPY .babelrc /srv/
COPY public /srv/
COPY src /srv/

EXPOSE 3000

# Install node_modules
RUN yarn install

CMD ["yarn", "start"]