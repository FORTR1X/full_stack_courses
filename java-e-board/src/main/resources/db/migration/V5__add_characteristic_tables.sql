create table immovables_characteristic (
    ad_id integer not null constraint pk_id_immobables primary key, -- id объявления
    rent boolean not null, -- аренда/покупка
    room_number int, -- количество комнат
    rent_period varchar(100), -- срок аренды
    monthly_cost int, -- ежемесечная стоимость
    floor int, -- этаж проживания (квартира)
    floor_count int, -- количество этажей (дом)
    constraint fk_immovables_id foreign key(ad_id) references advert(ad_id)
);

create table transport_characteristic (
    ad_id integer not null constraint pk_id_transport primary key, -- id объявления
    brand varchar(100), -- марка
    relase_year int, -- год выпуска
    milage int, -- пробег
    capacity int, -- объем двигателя
    gears_count int, -- количество передач (мото)
    wheel_drive varchar(100), -- привод автомобиля
    constraint fk_transport_id foreign key(ad_id) references advert(ad_id)
);

create table household_product_characteristic (
    ad_id integer not null constraint pk_id_household_product primary key, -- id объявления
    brand varchar(100), -- марка
    relase_year int, -- дата выпуска
    was_in_use boolean, -- БУ?
    constraint fk_household_product_id foreign key(ad_id) references advert(ad_id)
);