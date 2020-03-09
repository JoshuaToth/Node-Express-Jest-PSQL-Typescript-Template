#!/bin/bash
set -e

# Your database name here
export TNAME=api

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" --set TNAME=$TNAME <<-EOSQL
    CREATE DATABASE :TNAME
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -d $TNAME <<-EOSQL
    CREATE TABLE healthcheck(
    id serial PRIMARY KEY,
    message VARCHAR(100)
    );
    INSERT INTO healthcheck(message)
    VALUES ('OK');
EOSQL