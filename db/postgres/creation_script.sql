-- DROP SCHEMA aforo;

CREATE SCHEMA aforo AUTHORIZATION postgres;

-- aforo.parametros definition

-- Drop table

-- DROP TABLE aforo.parametros;

CREATE TABLE aforo.parametros (
	parametro varchar(20) NULL,
	valor varchar(20) NULL
);

-- aforo.registro definition

-- Drop table

-- DROP TABLE aforo.registro;

CREATE TABLE aforo.registro (
	fecha timestamp NULL,
	entsal int4 NULL,
	puerta int4 NULL,
	origen int4 NULL
);

GRANT ALL ON SCHEMA aforo TO logger;
GRANT ALL ON TABLE aforo.parametros TO logger;
GRANT ALL ON TABLE aforo.registro TO logger;
ALTER ROLE logger SUPERUSER NOCREATEDB NOCREATEROLE INHERIT LOGIN;

