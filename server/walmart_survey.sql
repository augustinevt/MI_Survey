DROP DATABASE IF EXISTS walmart_survey;
CREATE DATABASE walmart_survey;

\c walmart_survey;

CREATE TABLE blobs (
  ID SERIAL PRIMARY KEY,
  blob text
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name text,
  email text,
  company text
);

INSERT INTO users (name, email, company) VALUES ('Crane Legend', 'crane@legend', 'legendBooks');


CREATE USER nodeuser WITH PASSWORD 'abc123';
GRANT SELECT, UPDATE, INSERT, DELETE ON blobs TO nodeuser;
GRANT USAGE, SELECT ON SEQUENCE blobs_id_seq TO nodeuser;

GRANT SELECT, UPDATE, INSERT, DELETE ON users TO nodeuser;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO nodeuser;
