# Typescript, Nodejs, Express, Postgress server.
A basic API you can run locally with minimal setup.

## Setup
The Postgress CLI will need to be used and docker needs to be running on your machine.

```
brew install postgresql
npm i
```

## running development
```
cp ./environment/local_example.env .env
docker-compose up -d
npm run dev
```
or
`./scripts/run-local.sh`
or if you want to run it all in docker
`./scripts/run-local-docker.sh`

## running tests (unit)
`npm run test`
