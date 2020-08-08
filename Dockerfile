FROM node:14.7.0-buster
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && apt-get install -y tzdata
RUN npm install -g @vue/cli @vue/cli-service-global 
RUN mkdir /app/
WORKDIR /app/
RUN npm install