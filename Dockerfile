FROM amazonlinux:2

RUN curl --silent --location https://rpm.nodesource.com/setup_16.x | bash -
RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo |  tee /etc/yum.repos.d/yarn.repo
RUN yum -y install nodejs npm git
RUN yum -y update

# Create work directory
WORKDIR /usr/src/app

COPY src /usr/src/app/src
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY tsconfig.build.json /usr/src/app/
COPY prisma /usr/src/app/prisma
COPY .env /usr/src/app/.env

RUN npm ci
RUN npx prisma generate
RUN npx prisma migrate dev

# Build and run the app
RUN npm run build
CMD npm run start

EXPOSE 4000