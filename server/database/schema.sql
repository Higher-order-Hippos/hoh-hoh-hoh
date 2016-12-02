--
-- Database: `hohohoh`
--
CREATE DATABASE IF NOT EXISTS `hohohoh`;
USE `hohohoh`;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `id_wishlists` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
   PRIMARY KEY (ID)
)

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
   PRIMARY KEY (ID)
)

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `id_users` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
   PRIMARY KEY (ID)
)

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `wishlists` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `items` ADD FOREIGN KEY (id_wishlists) REFERENCES `wishlists` (`id`);
