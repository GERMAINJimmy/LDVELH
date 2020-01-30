-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 30 jan. 2020 à 17:12
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ldvelh`
--

-- --------------------------------------------------------

--
-- Structure de la table `collection`
--

CREATE TABLE `collection` (
  `id_collection` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `collection`
--

INSERT INTO `collection` (`id_collection`, `nom`, `logo`) VALUES
(1, 'Astre d\'Or', ''),
(2, 'Chroniques Crétoises', ''),
(3, 'Défis et Sortilèges', ''),
(4, 'Défis de l\'Histoire', ''),
(5, 'Défis Fantastiques', ''),
(6, 'Destins', ''),
(7, 'Double Jeu', ''),
(8, 'Dragon d\'Or', ''),
(9, 'Épouvante', ''),
(10, 'Histoire', ''),
(11, 'La Voie du Tigre', ''),
(12, 'Le Maître du Destin', ''),
(13, 'Les Messagers du Temps', ''),
(14, 'Les Portes Interdites', ''),
(15, 'Loup Ardent', ''),
(16, 'Loup Solitaire', ''),
(17, 'Quête du Graal', ''),
(18, 'Sherlock Holmes', ''),
(19, 'Sorcellerie', '');

-- --------------------------------------------------------

--
-- Structure de la table `inventaire`
--

CREATE TABLE `inventaire` (
  `id_inventaire` int(11) NOT NULL,
  `objet_id` int(11) NOT NULL,
  `personnage_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `id_livre` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collection_id` int(11) NOT NULL,
  `couverture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`id_livre`, `nom`, `collection_id`, `couverture`) VALUES
(1, 'Le Sorcier Majdar', 1, ''),
(2, 'La Cité Interdite', 1, ''),
(3, 'Le Royaume de l\'Oubli', 1, ''),
(4, 'La Guerre des sorciers', 1, ''),
(5, 'La Vengeance', 2, ''),
(6, 'Le Labirinthe', 2, ''),
(7, 'L\'Odyssée d\'Althéos', 2, ''),
(8, 'Caïthness l\'Elementaliste', 3, ''),
(9, 'Keldrilh le Menestrel', 3, ''),
(10, 'Péreim le Chevalier', 3, ''),
(11, 'Kandjar le Magicien', 3, ''),
(12, 'Les Héritiers de Dorgan', 3, ''),
(13, 'Le Sanctuaire des Horlas', 3, ''),
(14, 'La Huitième Porte', 3, ''),
(15, 'L\'Ultime Réincarnation', 3, ''),
(16, 'Le Trésor des Pharaons', 4, ''),
(17, 'La Dernière Folie de Caligula', 4, ''),
(18, 'La Guerre de Troie aura-t-elle lieu?', 4, ''),
(19, 'Sacrifice chez les Aztèques', 4, ''),
(20, 'Le Sorcier de la Montagne de feu', 5, ''),
(21, 'La Citadelle du Chaos', 5, ''),
(22, 'La Foret de la Malédiction', 5, ''),
(23, 'La Galaxie Tragique', 5, ''),
(24, 'La Cité des Voleurs', 5, ''),
(25, 'Le Labyrinthe de la Mort', 5, ''),
(26, 'L’Île du Roi Lézard', 5, ''),
(27, 'Le Marais aux Scorpions', 5, ''),
(28, 'La Sorcière des Neiges', 5, ''),
(29, 'Le Manoir de l\'enfer', 5, ''),
(30, 'Le Talisman de la Mort', 5, ''),
(31, 'Le Mercenaire de l\'Espace', 5, ''),
(32, 'Le Combattant de l\'Autoroute', 5, ''),
(33, 'Le Temple de la Terreur', 5, ''),
(34, 'Les Trafiquants de Kelter', 5, ''),
(35, 'Défis Sanglants sur l\'Océan', 5, ''),
(36, 'Rendez-vous avec la MORT', 5, ''),
(37, 'La Planète Rebelle', 5, ''),
(38, 'Les Démons des Profondeurs', 5, ''),
(39, 'l’Épée du Samouraï', 5, ''),
(40, 'l’Épreuve des champions', 5, ''),
(41, 'La Grande Menace des Robots', 5, ''),
(42, 'Les Sceaux de la Destruction', 5, ''),
(43, 'La Créature venue du Chaos', 5, ''),
(44, 'La Forteresse du Cauchemar', 5, ''),
(45, 'La Crypte du Sorcier', 5, ''),
(46, 'Le Chasseur des Etoiles', 5, ''),
(47, 'Les Spectres de l\'Angoisse', 5, ''),
(48, 'Les Rôdeurs de la nuit', 5, ''),
(49, 'Le Gouffre de la Cruauté', 5, ''),
(50, 'L\'Empire des Hommes-Lézards', 5, ''),
(51, 'Les Esclaves de l’Éternité', 5, ''),
(52, 'Le Justicier de l\'univers', 5, ''),
(53, 'Le Voleur d’Âmes', 5, ''),
(54, 'Le Vampire du Château Noir', 5, ''),
(55, 'La Nuit des Mutants', 5, ''),
(56, 'Les Sombres Sohortes', 5, ''),
(57, 'L’Élu des Six Clans', 5, ''),
(58, 'Le Volcan de Zamarra', 5, ''),
(59, 'Le Sceptre Noir', 5, ''),
(60, 'La Vengeance des Démons', 5, ''),
(61, 'L\'Ancienne Prophétie', 5, ''),
(62, 'Le repaire des morts-vivants', 5, ''),
(63, 'La Légendes des Guerriers Fantômes', 5, ''),
(64, 'La Tour de la Destruction', 5, ''),
(65, 'L\'arpenteur de la Lune', 5, ''),
(66, 'Les Mercenaires du Levant', 5, ''),
(67, 'Les Mondes de l\'Aleph', 5, ''),
(68, 'Le Siège de Sardath', 5, ''),
(69, 'Retour à la Montagne de Feu', 5, ''),
(70, 'Les Mages de Solani', 5, ''),
(71, 'La Légende de Zagor', 5, ''),
(72, 'Le Sépulcre des Ombres', 5, ''),
(73, 'Le Voleur de Vie', 5, ''),
(74, 'Les Chevaliers du Destin', 5, ''),
(75, 'Le Chasseur de Mages', 5, ''),
(76, 'La Revanche du Vampire', 5, ''),
(77, 'Le Dragon de la Nuit', 5, ''),
(78, 'La malédiction de la Momie', 5, ''),
(79, 'L’Œil d’Émeraude', 5, ''),
(80, 'Les Pirates du crâne noir', 5, ''),
(81, 'Les Hurlements du Loup-Garou', 5, ''),
(82, 'Stormslayer', 5, ''),
(83, 'La nuit du Nécromancien', 5, ''),
(84, 'Massacre à la Tronçonneuse de Zombies', 5, ''),
(85, 'Le Pirate des Sept Mers', 6, ''),
(86, 'l\'Etoile de la Destinée', 6, ''),
(87, 'Le Peuple Maudit', 6, ''),
(88, 'Le Collier Maléfique', 6, ''),
(89, 'Cœur de Glace', 6, ''),
(90, 'Issel le Guerrier', 7, ''),
(91, 'Darien le Magicien', 7, ''),
(92, 'Coréus le Prince', 7, ''),
(93, 'Bardik le Voleur', 7, ''),
(94, 'Lothar le Sorcier', 7, ''),
(95, 'Clovis le Chevalier', 7, ''),
(96, 'Le Tombeau du Vampire', 8, ''),
(97, 'Le Dieu Perdu', 8, ''),
(98, 'Le Seigneur de l\'Ombre', 8, ''),
(99, 'La Malédiction du Pharaon', 8, ''),
(100, 'Le Château des Âmes Damnes', 8, ''),
(101, 'L’œil du Dragon', 8, ''),
(102, 'Le Château de Dracula', 9, ''),
(103, 'Frankenstein le Maudit', 9, '');

-- --------------------------------------------------------

--
-- Structure de la table `monstre`
--

CREATE TABLE `monstre` (
  `id_monstre` int(11) NOT NULL,
  `nom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `objet`
--

CREATE TABLE `objet` (
  `id_objet` int(11) NOT NULL,
  `nom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paragraphe`
--

CREATE TABLE `paragraphe` (
  `id_paragraphe` int(11) NOT NULL,
  `livre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

CREATE TABLE `personnage` (
  `id_personnage` int(11) NOT NULL,
  `nom` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `pseudo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personnage_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `collection`
--
ALTER TABLE `collection`
  ADD PRIMARY KEY (`id_collection`);

--
-- Index pour la table `inventaire`
--
ALTER TABLE `inventaire`
  ADD PRIMARY KEY (`id_inventaire`);

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id_livre`),
  ADD KEY `collection-livre` (`collection_id`);

--
-- Index pour la table `monstre`
--
ALTER TABLE `monstre`
  ADD PRIMARY KEY (`id_monstre`);

--
-- Index pour la table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id_objet`);

--
-- Index pour la table `paragraphe`
--
ALTER TABLE `paragraphe`
  ADD PRIMARY KEY (`id_paragraphe`);

--
-- Index pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD PRIMARY KEY (`id_personnage`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `collection`
--
ALTER TABLE `collection`
  MODIFY `id_collection` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `inventaire`
--
ALTER TABLE `inventaire`
  MODIFY `id_inventaire` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `livre`
--
ALTER TABLE `livre`
  MODIFY `id_livre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT pour la table `monstre`
--
ALTER TABLE `monstre`
  MODIFY `id_monstre` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `objet`
--
ALTER TABLE `objet`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paragraphe`
--
ALTER TABLE `paragraphe`
  MODIFY `id_paragraphe` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personnage`
--
ALTER TABLE `personnage`
  MODIFY `id_personnage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `livre`
--
ALTER TABLE `livre`
  ADD CONSTRAINT `collection-livre` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id_collection`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
