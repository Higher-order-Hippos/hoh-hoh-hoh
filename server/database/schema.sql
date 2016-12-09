-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `fullname` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'items'
--
-- ---

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `wishlist_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'wishlists'
--
-- ---

DROP TABLE IF EXISTS `wishlists`;

CREATE TABLE `wishlists` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sessions'
--
-- ---

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(100) NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT 'Unnamed Room',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_rooms'
--
-- ---

DROP TABLE IF EXISTS `users_rooms`;

CREATE TABLE `users_rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NULL DEFAULT NULL,
  `room_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `items` ADD FOREIGN KEY (wishlist_id) REFERENCES `wishlists` (`id`);
ALTER TABLE `wishlists` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `sessions` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `users_rooms` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `users_rooms` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
