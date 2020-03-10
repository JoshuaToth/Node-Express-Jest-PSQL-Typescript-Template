# Typescript, Nodejs, Express, Postgress server.

`brew install postgresql`

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
or `./scripts/run-local.sh`

## running tests (unit)
`npm run test`
