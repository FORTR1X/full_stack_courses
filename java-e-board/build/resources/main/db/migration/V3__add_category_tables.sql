create table category
(
    category_id integer not null constraint category_id_pkey primary key,
    category_name character varying(255) not null
);

CREATE TABLE subcategories
(
    sub_id integer not null constraint sub_id_pkey primary key,
    subcategories character varying(255) not null,
    category_id integer not null,
    constraint fk_category_id_category foreign key(category_id) references category(category_id)
)
;
