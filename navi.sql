-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Paź 2018, 10:30
-- Wersja serwera: 10.1.31-MariaDB
-- Wersja PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `navi`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dest`
--

CREATE TABLE `dest` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `lat` decimal(11,0) NOT NULL,
  `lon` int(11) NOT NULL,
  `json` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `dest`
--

INSERT INTO `dest` (`id`, `name`, `lat`, `lon`, `json`) VALUES
(4, 'Strauss', '52445296', 16738784, '{\"name\":\"Strauss\",\"lat\":\"52445296\",\"lon\":\"16738784\",\"numer\":\"462299100\",\"kontakt\":\"Jacek Napieralski\",\"telefon\":\"+48 603068150\",\"godziny\":\"ca\\u0142a doba\"}\r\n'),
(38, 'GoodFood', '55', 16, '{\"name\":\"GoodFood\",\"lat\":\"55\",\"lon\":\"16\",\"numer\":\"656\",\"kontakt\":\"Andraszak Dariusz\",\"telefon\":\"514716306\",\"godziny\":\"all day\"}'),
(41, '2227 Pamiątkowo', '52550121', 16696361, '{\"name\":\"2227 Pami\\u0105tkowo\",\"lat\":\"52550121\",\"lon\":\"16696361\",\"numer\":\"23\",\"kontakt\":\"Wojtek\",\"telefon\":\"600094154\",\"godziny\":\"all day\"}'),
(52, 'Pamiątkowo staw', '52553128', 16695990, ''),
(55, 'Kawa zielona', '52444490', 16737953, '{\"name\":\"Kawa zielona\",\"lat\":\"52444490\",\"lon\":\"16737953\",\"numer\":\"33\",\"kontakt\":\"Jacek Napieralski\",\"telefon\":\"603068150\",\"godziny\":\"all\",\"user\":\"2227\"}'),
(70, 'jungheinrich', '12', 13, '{\"name\":\"jungheinrich\",\"kontakt\":\"Marcin Brylski\",\"godziny\":\"8:00 do 16:00\",\"telefon\":\"600 094 055\",\"user\":\"2225\"}'),
(71, 'Firma Karlik', '12', 13, '{\"name\":\"Firma Karlik\",\"kontakt\":\"Karlik\",\"godziny\":\"07:00 do 17:00\",\"telefon\":\"112\",\"user\":\"2225\"}'),
(72, 'Firma Karlik', '12', 13, '{\"name\":\"Firma Karlik\",\"kontakt\":\"Karlik\",\"godziny\":\"07:00 do 17:00\",\"telefon\":\"112\",\"user\":\"2225\"}'),
(73, 'Rohlig', '12', 13, '{\"name\":\"Rohlig\",\"kontakt\":\"?\",\"godziny\":\"all\",\"telefon\":\"?\",\"user\":\"2225\"}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `user` text COLLATE utf8_unicode_ci NOT NULL,
  `week` int(11) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `status` text COLLATE utf8_unicode_ci NOT NULL,
  `json` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `log`
--

INSERT INTO `log` (`id`, `user`, `week`, `from_date`, `to_date`, `status`, `json`) VALUES
(17, '2225', 38, '2018-09-29', '2018-09-29', 'terminated', '[{\"day\":\"6\",\"date\":\"2018-09-29\",\"start\":\"20:07:15\",\"stop\":\"20:07:15\",\"points\":0}]'),
(21, '2225', 37, '2018-09-29', '2018-09-29', 'terminated', '[{\"day\":\"6\",\"date\":\"2018-09-29\",\"start\":\"21:17:48\",\"stop\":\"21:17:57\",\"points\":0}]'),
(23, '2225', 35, '2018-09-29', '2018-09-29', 'terminated', '[{\"day\":\"6\",\"date\":\"2018-09-29\",\"start\":\"21:47:06\",\"stop\":\"22:07:50\",\"points\":0}]'),
(28, '2225', 33, '2018-09-30', '2018-09-30', 'terminated', '[{\"day\":\"0\",\"date\":\"2018-09-30\",\"start\":\"21:28:42\",\"stop\":\"21:28:42\",\"points\":1,\"point1\":{\"start\":\"21:49:04\",\"klient\":\"Kawa zielona\",\"dojazd\":[0,21]}},{\"day\":\"1\",\"date\":\"2018-10-01\",\"start\":\"13:44:45\",\"stop\":\"13:44:45\",\"points\":3,\"point1\":{\"start\":\"13:45:07\",\"klient\":\"GoodFood\",\"dojazd\":[0,1],\"stop\":\"14:57:55\"},\"point2\":{\"start\":\"15:24:24\",\"klient\":\"Kawa zielona\",\"dojazd\":[1,-33],\"stop\":\"18:30:32\"},\"point3\":{\"start\":\"19:50:56\",\"klient\":\"jungheinrich\",\"dojazd\":[1,20]}},{\"day\":\"1\",\"date\":\"2018-10-01\",\"start\":\"19:01:50\",\"stop\":\"19:01:50\",\"points\":1,\"point1\":{\"start\":\"19:50:56\",\"klient\":\"jungheinrich\",\"dojazd\":[0,49]}},{\"day\":\"2\",\"date\":\"2018-10-02\",\"start\":\"07:26:29\",\"stop\":\"07:26:29\",\"points\":2,\"point1\":{\"start\":\"07:26:45\",\"klient\":\"GoodFood\",\"dojazd\":[0,0],\"stop\":\"07:31:58\"},\"point2\":{\"start\":\"07:32:02\",\"klient\":\"Firma Karlik\",\"dojazd\":[0,1],\"stop\":\"08:41:13\"}}]'),
(31, '2225', 4, '2018-10-01', '2018-10-01', 'terminated', '[{\"day\":\"1\",\"date\":\"2018-10-01\",\"start\":\"09:25:10\",\"stop\":\"09:25:10\",\"points\":3,\"point1\":{\"start\":\"09:49:05\",\"klient\":\"Kawa zielona\",\"dojazd\":[0,24],\"stop\":\"10:12:23\"},\"point2\":{\"start\":\"10:14:50\",\"klient\":\"Strauss\",\"dojazd\":[0,2],\"stop\":\"10:56:31\"},\"point3\":{\"start\":\"13:18:52\",\"klient\":\"GoodFood\",\"dojazd\":[3,-38],\"stop\":\"13:20:11\"}}]'),
(35, '2225', 40, '2018-10-02', '2018-10-02', 'active', '[{\"day\":\"1\",\"date\":\"2018-10-01\",\"start\":\"08:00:10\",\"stop\":\"16:45:10\",\"points\":1,\"point1\":{\"start\":\"08:45:03\",\"klient\":\"Samsung\",\"dojazd\":[0,45]}},{\"day\":\"2\",\"date\":\"2018-10-02\",\"start\":\"08:00:10\",\"stop\":\"09:53:10\",\"points\":1,\"point1\":{\"start\":\"08:30:03\",\"klient\":\"Rohlig\",\"dojazd\":[0,30]}}]');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, '2225', 'owieczka@szopa.pl', 'dupa', 'dupa', '2018-08-07 22:00:00', '2018-08-07 22:00:00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `dest`
--
ALTER TABLE `dest`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `dest`
--
ALTER TABLE `dest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT dla tabeli `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT dla tabeli `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
