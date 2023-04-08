-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 08 avr. 2023 à 14:04
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pizzabd`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `nom`, `email`, `password`) VALUES
(1, 'Dupont', 'jean.dupont@example.com', 'Paris'),
(2, 'Martin', 'sophie.martin@example.com', 'Lyon'),
(3, 'Lefebvre', 'pierre.lefebvre@example.com', 'Marseille'),
(4, 'Garcia', 'maria.garcia@example.com', 'Barcelone'),
(5, 'Rossi', 'luigi.rossi@example.com', 'st jean la vetre'),
(8, 'Angelo', 'mail@opif.com', 'aerty'),
(9, 'angelo', 'ange@aa', 'a89'),
(10, 'angelo', 'angelo12@g.com', 'a89'),
(11, 'angelo', 'angelo12@g.com', 'a89'),
(12, 'a', 'a@a.com', 'a'),
(13, 'a', 'a@a.com', 'a'),
(33, 'test', 'test@test', 'test'),
(34, 'a', 'testy@test', 'a'),
(35, 'a', 'mabite@gmail.com', 'a'),
(36, 'a', 'test@a.fr', 'a'),
(37, 'a', 'abgeng@aerar', 'a'),
(38, 'asa', 'arerearazer@ramlekrlmazk.rle', 'm'),
(39, 'asa', 'arerearazer@rarmlekrlmazk.rle', 'e'),
(40, 'asa', 'arrerearazer@rarmlekrlmazk.rle', 'm'),
(41, 'asa', 'arrereagggrazer@rarmlekrlmazk.rle', 'g'),
(42, 'a', 'nom@prenom.fr', 'a89');

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float(8,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `panier`
--

INSERT INTO `panier` (`id`, `name`, `price`, `quantity`) VALUES
(9, 'Marguerita', 10.75, 1),
(10, 'Pepperonni', 11.00, 1),
(11, 'Marguerita', 10.75, 1);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float(8,2) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `name`, `description`, `price`, `image`) VALUES
(1, 'Marguerita', 'Sauce tomate, feuilles de basilic frais, mozzarella. Sublime la recette avec supplément de délicieux anchois après cuisson.', 10.75, 'img/margheritha.png'),
(2, 'Pepperonni', 'Sauce tomate, mozzarella, pepperoni.', 11.00, 'img/pepperoni.png'),
(3, '4 Fromages', 'Sauce tomate, mozzarella, parmesan, gorgonzola, fromage de chèvre.', 9.95, 'img/4fromage.png'),
(4, 'Reine', 'Sauce tomate, feuilles de basilic frais, mozzarella. Sublime la recette avec supplément de délicieux anchois après cuisson.\r\n', 12.75, 'img/reine.png'),
(5, 'Hawaïenne', 'Sauce tomate, feuilles de basilic frais, mozzarella. Sublime la recette avec supplément de délicieux anchois après cuisson.\r\n', 7.95, 'img/hawaienne.png'),
(6, 'Napolitaine', 'Sauce tomate, feuilles de basilic frais, mozzarella. Sublime la recette avec supplément de délicieux anchois après cuisson.', 10.95, 'img/napolitaine.png\r\n                                                                             ');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
