BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  f_name VARCHAR NOT NULL,
  l_name VARCHAR NOT NULL,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  car_type INT NOT NULL
);

COMMIT;
