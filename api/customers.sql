SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `customers` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `customers`;

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) COLLATE utf8_unicode_ci NOT NULL,
  `number` tinyint(2) COLLATE utf8_unicode_ci NOT NULL,
  `purchase` tinyint(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `customer` ADD PRIMARY KEY (`id`);
ALTER TABLE `customer` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `customer` (`id`, `name`, `email`, `price`,`number`, `purchase`) VALUES
(1, 'Nguyen Xuan Binh', '52000018@student.tdtu.edu.vn', 999, 7, 1),
(2, 'Nguyen Cong Hien', '52000444@student.tdtu.edu.vn', 799, 4, 0)