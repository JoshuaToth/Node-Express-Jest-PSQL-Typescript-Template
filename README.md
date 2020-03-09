# Typescript, Nodejs, Express, Postgress server.

`brew install postgresql`

## running development
```
cp ./environment/local_example.env .env
docker-compose up -d
npm run dev
```
or `./scripts/run-local.sh`

## running tests (unit)
`npm run test`
