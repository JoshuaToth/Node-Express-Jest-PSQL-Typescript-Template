# Typescript, Nodejs, Express, Postgres server.
A basic API you can run locally with minimal setup.
Includes Unit tests and E2E tests to ensure the DB can be hit.

## Setup
The Postgres CLI will need to be used and docker needs to be running on your machine.

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
`npm run test:unit`

## running tests (e2e)
Ensure docker is running
`npm run test:e2e`
