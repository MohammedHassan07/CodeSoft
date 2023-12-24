-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2023 at 08:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `Id` int(11) NOT NULL,
  `Name` varchar(200) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`Id`, `Name`, `Email`, `Password`) VALUES
(1, 'Dr. Shameem', 'shameem@xyz.com', '$2a$10$TbNclHluqRuLHlpx1IvNheAax2opm4pPFl9Yr77QUf3xukTh4hFZi'),
(2, 'Prof. Afeefa', 'afeefa@xyz.com', '$2a$10$3LdVJhd6Qz6eNVaODEVHXe0qu6qC/K3MkdF44OzHIWZrWRREIl5I.'),
(3, 'Dr. Salman', 'salman@xyz.com', '$2a$10$Xkj6cahCt7/98zVkRHc6N.XguRwfPOp3zDG/KH9TYrh/23demwD42'),
(4, 'Prof. Anwar', 'anwar@xyz.com', '$2a$10$JEQoPum8jcUWatDT5IcaPuSdnIHA56fXOk0PTSIaMgp9oMnlW9si6'),
(5, 'Dr. Raghib', 'raghib@xyz.com', '$2a$10$HRQZFdkGCXGtLugVKWIIIOePfSwdLoOLWwxHpnDOfjAit1SLp/tsq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
