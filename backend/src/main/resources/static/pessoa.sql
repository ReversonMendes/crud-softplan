CREATE TABLE public.pessoas
(
    id serial NOT NULL,
    nome character varying(255),
    email character varying(255),
    datanascimento date,
    sexo character(1) ,

    CONSTRAINT pessoas_pkey PRIMARY KEY (id)
)

