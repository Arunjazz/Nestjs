# NestJS template

An Learning nestjs starter template

## Prerequisite

- [docker](https://docs.docker.com/get-docker/)
- [yarn](https://yarnpkg.com/getting-started/install)
- [nodejs](https://nodejs.org/en/download/)

## Usage

### Clone this repository

```bash
git clone "url from the clone part" <AppName>
cd <AppName>
git remote rm origin
```

Create a new repository in gitlab and add the repository as remote

```bash
git remote add origin <NewRepo>
git push -u origin main
```

### Install dependencies(locally)

```bash
yarn install
```

### Running the app(locally)

```bash
# start application or
$ yarn start

# start application and watch files or
$ yarn start:dev

# start application with debugger or
$ yarn start:debug

# build application and
$ yarn build

# start application in production
$ yarn start:prod
```

### Test the app(locally)

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
$ npx serve -s coverage/lcov-report/
```

### Running the app(docker)

```bash
# build the image locally
$ docker build -t <AppName>:dev--target=development

# build the docker image and start the container
$ docker compose up -d

# stop the container
$ docker compose down
```
