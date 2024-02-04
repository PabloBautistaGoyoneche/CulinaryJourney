CREATE DATABASE `culinary_journey`;

----------------------------------------------------------

USE `culinary_journey`;

----------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  `user_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `hashed_password` varchar(255) NOT NULL
);

----------------------------------------------------------

DROP TABLE IF EXISTS `favorite_recipes`;

CREATE TABLE favorite_recipes (
  `favorite_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int NOT NULL,
  `recipe_id` int NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);

