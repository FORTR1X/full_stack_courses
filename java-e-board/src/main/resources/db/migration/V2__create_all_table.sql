create table users
(
    id  integer not null constraint user_id_pkey primary key,
    email varchar(255) NOT NULL,
    phone_number varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    enabled boolean NOT NULL,
    username varchar(255) constraint user_username_key unique
);

CREATE TABLE advert
(
    ad_id integer NOT NULL,
    owner character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    header character varying(255) NOT NULL,
    price integer NOT NULL,
    CONSTRAINT ad_pkey PRIMARY KEY (ad_id)
)
;

create table authorities (
    username varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index ix_auth_username on authorities (username,authority);

create table oauth_client_details
(
    client_id               varchar(255) not null constraint oauth_client_details_client_id_pkey primary key,
    access_token_validity   integer,
    additional_information  varchar(255),
    authorities             varchar(255),
    authorized_grant_types  varchar(255),
    autoapprove             boolean not null,
    client_secret           varchar(255),
    refresh_token_validity  integer,
    resource_ids            varchar(255),
    scope                   varchar(255),
    web_server_redirect_uri varchar(255)
);

-- ad-client
INSERT INTO oauth_client_details (client_id,
                                  client_secret,
                                  authorized_grant_types,
                                  scope,
                                  web_server_redirect_uri,
                                  authorities,
                                  access_token_validity,
                                  refresh_token_validity,
                                  additional_information,
                                  autoapprove)
VALUES ('ad-client', -- client-id
        '$2a$10$BMlvMLPJK0peQyVG31NcJOEzQlGF.9rYGOSYi6hfdv/YoFq81FStS', -- hash client secret: zxc
        'password,refresh_token', -- grant types
        'ad', -- scope
        null,
        null,
        3600,
        36000,
        null,
        true);

INSERT INTO users (id, username, email, phone_number, password, enabled) VALUES (1, 'FORTRIX', 'my@mail.ru', '+789', '$2a$10$jGH.1OCNgIcP6jGp.GcUp.rZI3c3dynW389.jBxtLvChnRF.w2q76', true);
INSERT INTO authorities (username, authority) VALUES ('FORTRIX', 'ADMIN');
