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

CREATE FUNCTION notify_trigger_registro() RETURNS trigger AS $$
    DECLARE
    BEGIN
      PERFORM pg_notify('watch_registro', row_to_json(NEW)::text);
      RETURN new;
    END;
    $$ LANGUAGE plpgsql;

    CREATE TRIGGER watch_registro_trigger AFTER INSERT ON aforo.registro 
    FOR EACH ROW EXECUTE PROCEDURE notify_trigger_registro()

