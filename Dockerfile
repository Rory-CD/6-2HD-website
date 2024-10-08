FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# Debug step to check Node.js, npm, and npx versions
RUN echo "Checking Node.js, npm, and npx versions..." && \
    node -v && \
    npm -v && \
    npx -v && \
    which npx

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]