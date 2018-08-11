-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: sql105.epizy.com
-- Generation Time: Aug 09, 2018 at 02:53 PM
-- Server version: 5.6.35-81.0
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `epiz_22433247_aio`
--

-- --------------------------------------------------------

--
-- Table structure for table `cat`
--

CREATE TABLE IF NOT EXISTS `cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `term` text NOT NULL,
  `cat` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=153 ;

--
-- Dumping data for table `cat`
--

INSERT INTO `cat` (`id`, `term`, `cat`) VALUES
(12, 'clothes', 'C'),
(13, 'sandals', 'C'),
(14, 'shoes', 'C'),
(15, 'socks', 'C'),
(16, 'shirts', 'C'),
(17, 't-shirts', 'C'),
(18, 'sweaters', 'C'),
(19, 'ring', 'C'),
(20, 'necklace', 'C'),
(21, 'dobb', 'C'),
(22, 'earring', 'C'),
(23, 'ear-ring', 'C'),
(24, 'ear ring', 'C'),
(25, 'anklets', 'C'),
(26, 'diamond', 'C'),
(27, 'bracelet', 'C'),
(28, 'makeup', 'C'),
(29, 'powder', 'C'),
(30, 'scrubber', 'C'),
(31, 'cream', 'C'),
(32, 'makeup-kit', 'C'),
(33, 'lipstick', 'C'),
(34, 'foundation', 'C'),
(35, 'remover', 'C'),
(36, 'nail polish', 'C'),
(37, 'computer', 'E'),
(38, 'accessories', 'E'),
(39, 'camera', 'E'),
(40, 'keyboard', 'E'),
(41, 'mouse', 'E'),
(42, 'usb', 'E'),
(43, 'parts', 'E'),
(44, 'cable', 'E'),
(45, 'stick', 'E'),
(46, 'card', 'E'),
(47, 'tires', 'E'),
(48, 'wire', 'E'),
(49, 'connectors', 'E'),
(50, 'lan', 'E'),
(51, 'cables', 'E'),
(52, 'bulb', 'E'),
(53, 'light', 'E'),
(54, 'ram', 'E'),
(55, 'harddisk', 'E'),
(56, 'disk', 'E'),
(57, 'cd', 'E'),
(58, 'dvd', 'E'),
(59, 'drive', 'E'),
(60, 'led', 'E'),
(61, 'lcd', 'E'),
(62, 'display', 'E'),
(63, 'sensor', 'E'),
(64, 'food', 'F'),
(65, 'pizza', 'F'),
(66, 'burger', 'F'),
(67, 'ice', 'F'),
(68, 'cream', 'F'),
(69, 'chocolate', 'F'),
(70, 'vegetable', 'F'),
(71, 'fruits', 'F'),
(72, 'beverages', 'F'),
(73, 'pepsi', 'F'),
(74, 'coca', 'F'),
(75, 'cola', 'F'),
(76, 'mountain', 'F'),
(77, 'dew', 'F'),
(78, 'thumbs', 'F'),
(79, 'up', 'F'),
(80, 'fanta', 'F'),
(81, 'miranda', 'F'),
(82, 'biscuits', 'F'),
(83, 'cookies', 'F'),
(84, 'wafers', 'F'),
(85, 'vanilla', 'F'),
(86, 'mango', 'F'),
(87, 'pineapple', 'F'),
(88, 'utensils', 'G'),
(89, 'furniture', 'G'),
(90, 'book', 'G'),
(91, 'stationary', 'G'),
(92, 'items', 'G'),
(93, 'presentation', 'G'),
(94, 'cover', 'G'),
(95, 'pen', 'G'),
(96, 'pencil', 'G'),
(97, 'comics', 'G'),
(98, 'chair', 'G'),
(99, 'sofa', 'G'),
(100, 'pillow', 'G'),
(101, 'cover', 'G'),
(102, 'bed', 'G'),
(103, 'sheet', 'G'),
(104, 'bed', 'G'),
(105, 'spread', 'G'),
(106, 'curtains', 'G'),
(107, 'rain', 'G'),
(108, 'coat', 'G'),
(109, 'musical', 'M'),
(110, 'instruments', 'M'),
(111, 'guitar', 'M'),
(112, 'flute', 'M'),
(113, 'strings', 'M'),
(114, 'piano', 'M'),
(115, 'keyboard', 'M'),
(116, 'drums', 'M'),
(117, 'mic', 'M'),
(118, 'vocals', 'M'),
(119, 'sports', 'S'),
(120, 'wear', 'S'),
(121, 'jersey', 'S'),
(122, 'track', 'S'),
(123, 'suits', 'S'),
(124, 'ball', 'S'),
(125, 'bat', 'S'),
(126, 'tennis', 'S'),
(127, 'net', 'S'),
(128, 'knee', 'S'),
(129, 'cap', 'S'),
(130, 'guard', 'S'),
(131, 'skipping', 'S'),
(132, 'rope', 'S'),
(133, 'board', 'S'),
(134, 'kit', 'S'),
(135, 'health', 'H'),
(136, 'care', 'H'),
(137, 'medicine', 'H'),
(138, 'soap', 'H'),
(139, 'shampoo', 'H'),
(140, 'conditioner', 'H'),
(141, 'drinks', 'H'),
(142, 'tablets', 'H'),
(143, 'sanitize', 'H'),
(144, 'sanitary', 'H'),
(145, 'pad', 'H'),
(146, 'liquid', 'H'),
(147, 'soaps', 'H'),
(148, 'domex', 'H'),
(149, 'dettol', 'H'),
(150, 'savlon', 'H'),
(151, 'harpik', 'H'),
(152, 'syrup', 'H');

-- --------------------------------------------------------

--
-- Table structure for table `linq`
--

CREATE TABLE IF NOT EXISTS `linq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` tinytext NOT NULL,
  `ql` longtext NOT NULL,
  `fav` longtext NOT NULL,
  `sep` text NOT NULL,
  `cat` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `linq`
--

INSERT INTO `linq` (`id`, `company`, `ql`, `fav`, `sep`, `cat`) VALUES
(1, 'Amazon', 'https://www.amazon.in/s/ref=sr_st_price-asc-rank?keywords=', 'https://www.amazon.in/favicon.ico', '%20', 'A'),
(2, 'Flipkart', 'https://www.flipkart.com/search?sort=relevance&q=', 'https://www.flipkart.com/favicon.ico', '+', 'A'),
(3, 'Snapdeal', 'https://www.snapdeal.com/search?sort=rlvncy&keyword=', 'https://www.snapdeal.com/favicon.ico', '%20', 'A'),
(4, 'Limeroad', 'https://www.limeroad.com/search/', 'https://www.limeroad.com/favicon.ico', '%20', 'C'),
(5, 'Myntra', 'https://www.myntra.com/', 'https://cdn.myntassets.com/skin1/icons/favicon.ico', '%20', 'C'),
(6, 'TataCliq', 'https://www.tatacliq.com/search/page-1?q=', 'https://www.tatacliq.com/favicon.ico', '%20', 'C'),
(7, 'Pepperfry', 'https://www.pepperfry.com/site_product/search?order=price&q=', 'https://www.pepperfry.com/favicon.ico', '%20', 'G'),
(8, 'BigBasket', 'https://www.bigbasket.com/ps/?q=', 'https://www.bigbasket.com/favicon.ico', '%20', 'F'),
(9, 'Urbanladder', 'https://www.urbanladder.com/products/search?sort=price_asc&availability=In+Stock+Only&keywords=', 'https://www.urbanladder.com/favicon.ico', '+', 'G'),
(10, 'Nykaa', 'https://www.nykaa.com/search/result/?sort=relevance&q=', 'https://www.nykaa.com/favicon.ico', '%20', 'C');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
