
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name  VARCHAR(30) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bread", "food", 4, 123);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("meat", "food", 8, 340);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("potato", "food", 2, 302);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lettuce", "food", 4, 320);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("aspirin", "drugs", 12, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tylenol", "drugs", 10, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hat", "clothes", 12, 49);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirt", "clothes", 15, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothes", 22, 62);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothes", 33, 33);


