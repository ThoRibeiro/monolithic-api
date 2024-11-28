
# Monolithic API

## Description
Ce projet est une API monolithique développée développée avec Node.js, Express, TypeScript, avec une base de données MongoDB gérée via Docker. Pour un jeu RPG.

---

## Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) (livré avec Node.js)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Fonctionnalités

- **Authentification et Gestion des Joueurs** : Inscription, connexion (avec JWT), gestion des profils, avatars, statistiques, et historique des parties.
- **Gestion de la Position des Joueurs** : Suivi en temps réel des positions via WebSockets, détection d'interactions, et gestion des déplacements.
- **Paramétrage et Personnalisation** : Choix des classes, personnalisation des attributs, équipement de compétences, et options de compte.
- **Gestion de l'Inventaire** : Ajout/suppression d'objets, gestion de l'équipement, consommation d'items, et marché en jeu.

---
## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ThoRibeiro/monolithic-api.git
cd monolithic-api
```

### 2. Installer les dépendances

Exécutez la commande suivante pour installer toutes les dépendances :

```bash
npm install
```

### 3. Configurer Husky

Activez les hooks Git avec Husky :

```bash
npm run prepare
```

Husky configurera automatiquement les hooks Git pour assurer la qualité du code (e.g., exécution de Prettier avant les commits).

### 4. Lancer la base de données MongoDB

Pour démarrer l'instance MongoDB avec Docker Compose, exécutez la commande suivante à la racine du projet :

```bash
docker-compose up -d
```

Cela démarrera MongoDB en arrière-plan.

---

## Structure du projet

```
src/
├── controllers/       # Logique des requêtes HTTP
├── middlewares/       # Fonctions intermédiaires (authentification, validation, etc.)
├── models/            # Schémas Mongoose pour MongoDB
├── routes/            # Définition des routes et association aux contrôleurs
├── server.ts          # Point d'entrée de l'application
```
---

## Lancer le projet

### 1. Mode développement

Pour lancer le projet en mode développement, utilisez la commande suivante :

```bash
npm run start:dev
```

Le serveur sera accessible sur [http://localhost:3500](http://localhost:3500).


## Docker Compose

### 1. Services disponibles

Le fichier `docker-compose.yml` déploie les services suivants :

- **MongoDB** : Base de données principale à l'adresse `mongodb://localhost:27017`.

### 2. Arrêter les services

Pour arrêter les services, exécutez :

```bash
docker-compose down
```

## Auteur

- **BONAL Alexis / RAOUT Enguéran & RIBEIRO Thomas**

---

## Licence

Ce projet est sous licence [MIT](LICENSE).
