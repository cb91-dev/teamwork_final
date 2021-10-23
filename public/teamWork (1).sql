-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 16, 2021 at 06:57 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teamWork`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_logs`
--

CREATE TABLE `api_logs` (
  `table_id` int(255) NOT NULL,
  `req_url` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `user_action` varchar(255) NOT NULL,
  `response_code` varchar(255) NOT NULL,
  `session_num` varchar(255) NOT NULL,
  `date_stamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `users_firstName` varchar(255) DEFAULT NULL,
  `employees_idNumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `api_logs`
--

INSERT INTO `api_logs` (`table_id`, `req_url`, `ip_address`, `user_action`, `response_code`, `session_num`, `date_stamp`, `users_firstName`, `employees_idNumber`) VALUES
(1992, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:20', NULL, NULL),
(1993, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=isLoggedin', '127.0.0.1', 'GET', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(1994, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(1995, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '201', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(1996, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(1997, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(1998, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:21', NULL, NULL),
(2015, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=endtest', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:33:23', NULL, NULL),
(2016, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2017, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=isLoggedin', '127.0.0.1', 'GET', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2018, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2019, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '201', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2020, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2021, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2022, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:02', NULL, NULL),
(2039, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=endtest', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:34:04', NULL, NULL),
(2040, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 02:36:34', NULL, NULL),
(2041, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:43', NULL, NULL),
(2042, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=isLoggedin', '127.0.0.1', 'GET', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:43', NULL, NULL),
(2043, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2044, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2045, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '201', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2046, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2047, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2048, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:44', NULL, NULL),
(2066, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=endtest', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 04:42:46', NULL, NULL),
(2067, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '::1', 'POST', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:11', 'Craig', 94),
(2068, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=viewMyDetails', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:13', 'Craig', 94),
(2069, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=viewMyAvail', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:15', 'Craig', 94),
(2070, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=deletemyAvail', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:28', 'Craig', 94),
(2071, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=insertMy_Avail', '::1', 'POST', '201', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:46', 'Craig', 94),
(2072, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=viewMyAvail', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:57:48', 'Craig', 94),
(2073, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=isLoggedin', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:58:23', 'Craig', 94),
(2074, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=viewMyDetails', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:58:41', 'Craig', 94),
(2075, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=viewMyDetails', '::1', 'GET', '200', '0rji3uvdjj1ub33a670rfkogcn', '2021-09-16 04:58:45', 'Craig', 94),
(2076, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:13:14', NULL, NULL),
(2077, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:08', NULL, NULL),
(2078, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=isLoggedin', '127.0.0.1', 'GET', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:08', NULL, NULL),
(2079, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:08', NULL, NULL),
(2080, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:08', NULL, NULL),
(2081, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=register', '127.0.0.1', 'POST', '201', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:09', NULL, NULL),
(2082, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=logout', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:09', NULL, NULL),
(2083, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:09', NULL, NULL),
(2084, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=login', '127.0.0.1', 'POST', '401', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:09', NULL, NULL),
(2102, 'http://localhost:8888/stage2/TeamWork/api/api.php?action=endtest', '127.0.0.1', 'GET', '200', '6hbvum7jp85uj7ljrddssu2nfl', '2021-09-16 06:20:11', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `availabilities`
--

CREATE TABLE `availabilities` (
  `availabilities_Id` int(11) NOT NULL,
  `Monday` varchar(255) NOT NULL,
  `Tuesday` varchar(255) NOT NULL,
  `Wednesday` varchar(255) NOT NULL,
  `Thursday` varchar(255) NOT NULL,
  `Friday` varchar(255) NOT NULL,
  `Saturday` varchar(255) NOT NULL,
  `Sunday` varchar(255) NOT NULL,
  `employees_idNumber` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `availabilities`
--

INSERT INTO `availabilities` (`availabilities_Id`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`, `employees_idNumber`) VALUES
(79, 'Yes', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 94);

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `employees_idNumber` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `phone_number` int(12) NOT NULL,
  `is_manager` varchar(255) DEFAULT NULL,
  `clock_Number` varchar(255) NOT NULL,
  `pword` varchar(255) NOT NULL,
  `DOB` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`employees_idNumber`, `firstName`, `lastName`, `email`, `department`, `phone_number`, `is_manager`, `clock_Number`, `pword`, `DOB`) VALUES
(94, 'Craig', 'Bennett', 'craigrbennett91@gmail.com', 'Fresh_Produce', 41552469, '1', '5555', 'Volkswagen91', '2018-07-22'),
(105, 'Manager', 'Manager', 'manager@teamwork.com', 'Front_Counter', 123456789, NULL, '2222', 'Manager@123', '2017-02-01'),
(109, 'Frank', 'Eeeewew', 'wewwe91@gmail.com', 'Bakery', 412873789, NULL, '7774', 'Password#91', '2018-07-22'),
(113, 'manager', 'Bigboss', 'bigboss@admin.com', 'Fresh_Produce', 41552436, '1', '7777', 'bigBoss@122', '2008-02-22');

-- --------------------------------------------------------

--
-- Table structure for table `Live_Clock`
--

CREATE TABLE `Live_Clock` (
  `logs_id` int(255) NOT NULL,
  `clockIn` varchar(255) NOT NULL,
  `clockOut` varchar(255) DEFAULT NULL,
  `employee_clock_num` int(4) NOT NULL,
  `employees_idNumber` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Live_Clock`
--

INSERT INTO `Live_Clock` (`logs_id`, `clockIn`, `clockOut`, `employee_clock_num`, `employees_idNumber`) VALUES
(66, '2021-09-14 11:57:26', '2021-09-14 11:59:28', 2222, 105),
(67, '2021-08-14 12:00:25', '2021-08-14 12:45:25', 7774, 109),
(68, '2021-08-14 12:10:25', '2021-09-14 17:06:44', 7777, 113),
(80, '2021-09-14 16:12:12', '2021-09-14 16:57:20', 5555, 94),
(81, '2021-09-14 16:54:31', '2021-09-14 16:57:20', 5555, 94),
(82, '2021-09-14 16:54:31', '2021-09-14 17:06:44', 7777, 113),
(83, '2021-09-14 16:57:06', '2021-09-14 16:57:20', 5555, 94),
(84, '2021-09-14 17:00:01', '2021-09-14 17:06:44', 7777, 113),
(85, '2021-09-14 17:04:37', '2021-09-14 17:06:44', 7777, 113),
(88, '2021-09-16 0:12:43', NULL, 5555, 94);

-- --------------------------------------------------------

--
-- Table structure for table `Schedule`
--

CREATE TABLE `Schedule` (
  `schedule_id` int(255) NOT NULL,
  `employees_idNumber` int(11) NOT NULL,
  `Department` varchar(255) NOT NULL,
  `time_from` time NOT NULL,
  `time_till` time NOT NULL,
  `day` varchar(11) NOT NULL,
  `month` varchar(11) NOT NULL,
  `year` varchar(11) NOT NULL,
  `approved_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Schedule`
--

INSERT INTO `Schedule` (`schedule_id`, `employees_idNumber`, `Department`, `time_from`, `time_till`, `day`, `month`, `year`, `approved_by`) VALUES
(1, 94, '', '10:00:00', '16:00:00', 'Monday', 'September', '2021', 94),
(2, 94, 'Bakery', '10:30:00', '17:30:00', 'Monday', 'September', '2021', 94);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_logs`
--
ALTER TABLE `api_logs`
  ADD PRIMARY KEY (`table_id`),
  ADD KEY `FK_employees_idNumber` (`employees_idNumber`);

--
-- Indexes for table `availabilities`
--
ALTER TABLE `availabilities`
  ADD PRIMARY KEY (`availabilities_Id`),
  ADD KEY `Employees_ID` (`employees_idNumber`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`employees_idNumber`);

--
-- Indexes for table `Live_Clock`
--
ALTER TABLE `Live_Clock`
  ADD PRIMARY KEY (`logs_id`),
  ADD KEY `employees_idNumber` (`employees_idNumber`);

--
-- Indexes for table `Schedule`
--
ALTER TABLE `Schedule`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `fk_schedule_employees` (`employees_idNumber`),
  ADD KEY `fk_approved_by` (`approved_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_logs`
--
ALTER TABLE `api_logs`
  MODIFY `table_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2103;

--
-- AUTO_INCREMENT for table `availabilities`
--
ALTER TABLE `availabilities`
  MODIFY `availabilities_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `Employees`
--
ALTER TABLE `Employees`
  MODIFY `employees_idNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `Live_Clock`
--
ALTER TABLE `Live_Clock`
  MODIFY `logs_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `Schedule`
--
ALTER TABLE `Schedule`
  MODIFY `schedule_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `api_logs`
--
ALTER TABLE `api_logs`
  ADD CONSTRAINT `FK_employees_idNumber` FOREIGN KEY (`employees_idNumber`) REFERENCES `Employees` (`employees_idNumber`);

--
-- Constraints for table `availabilities`
--
ALTER TABLE `availabilities`
  ADD CONSTRAINT `availabilities_ibfk_1` FOREIGN KEY (`employees_idNumber`) REFERENCES `Employees` (`employees_idNumber`);

--
-- Constraints for table `Live_Clock`
--
ALTER TABLE `Live_Clock`
  ADD CONSTRAINT `live_clock_ibfk_1` FOREIGN KEY (`employees_idNumber`) REFERENCES `Employees` (`employees_idNumber`);

--
-- Constraints for table `Schedule`
--
ALTER TABLE `Schedule`
  ADD CONSTRAINT `fk_approved_by` FOREIGN KEY (`approved_by`) REFERENCES `Employees` (`employees_idNumber`),
  ADD CONSTRAINT `fk_schedule_employees` FOREIGN KEY (`employees_idNumber`) REFERENCES `Employees` (`employees_idNumber`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
