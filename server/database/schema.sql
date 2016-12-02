--
-- Database: `hohohoh`
--
CREATE DATABASE IF NOT EXISTS `hohohoh`;
USE `hohohoh`;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'wishlists'
--
-- ---

DROP TABLE IF EXISTS `wishlists`;

CREATE TABLE `wishlists` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'items'
--
-- ---

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_wishlists` INTEGER NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `items` ADD FOREIGN KEY (id_wishlists) REFERENCES `wishlists` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `wishlists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `wishlists` (`id`,`name`,`id_users`) VALUES
-- ('','','');
-- INSERT INTO `items` (`id`,`id_wishlists`,`name`) VALUES
-- ('','','');
-- INSERT INTO `users` (`id`,`username`,`password`,`name`) VALUES
-- ('','','','');
