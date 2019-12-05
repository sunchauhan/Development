FROM nodejs:8-RHOAR

# Create app directory
WORKDIR ${APP_ROOT}/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package.json ${APP_ROOT}/src

USER root

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./app ${APP_ROOT}/src

EXPOSE 8080

CMD [ "npm", "start" ]
