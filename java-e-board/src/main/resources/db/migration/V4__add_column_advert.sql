ALTER TABLE advert ADD COLUMN "sub_id" integer;
ALTER TABLE advert ADD FOREIGN KEY (sub_id) REFERENCES subcategories(sub_id);