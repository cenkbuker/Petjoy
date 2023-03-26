\echo 'Delete and recreate petjoy db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE petjoy;
CREATE DATABASE petjoy;
\connect petjoy

\i petjoy-schema.sql
\i petjoy-seed.sql

\echo 'Delete and recreate petjoy_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE petjoy_test;
CREATE DATABASE petjoy_test;
\connect petjoy_test

\i petjoy-schema.sql
