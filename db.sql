use casaone;

create table IF not exists ratings(
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100),
  product_id VARCHAR(100),
  rating_score INT NOT NULL,
  description TEXT,
  is_published bit(1),
  creation_date date,
  PRIMARY KEY(id)
);

insert into ratings (user_name, product_id, rating_score, description, is_published) VALUES ("Ankit Jain", 1, 5, "Super Comfortable" , 1);
insert into ratings (user_name, product_id, rating_score, description, is_published) VALUES ("Ashish Agarwal", 1, 5, "Excellent product",1);
insert into ratings (user_name, product_id, rating_score, description, is_published) VALUES ("Chintu", 1, 4, "", 1);
