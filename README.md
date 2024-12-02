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

En installant les dépendances, la commande `npm run prepare` sera également appelée.
Elle permet la configuration automatique de Husky pour les différents hooks Git.

### 3. Création du .env

Initialisation du .env avec un JWT_SECRET
```bash
JWT_SECRET = your_jwt_secret
```

### 3. Lancer la base de données MongoDB

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

## Référencer les Issues dans les Commits

Lorsque vous travaillez sur une issue GitHub, vous pouvez la référencer ou même la fermer automatiquement dans un commit en suivant ces étapes :

### Référencer une Issue

- Pour référencer une issue, utilisez simplement son numéro précédé d'un `#` dans le message du commit.

**Exemple :**

```bash
git commit -m "fix: Corrige un bug lié à l'authentification #42"
```

Cela ajoutera un lien vers l'issue **#42** dans l'historique du commit.

### Fermer une Issue automatiquement

- Utilisez des mots-clés comme `fixes`, `closes` ou `resolves` suivi du numéro de l'issue pour la fermer automatiquement lorsque le commit est fusionné dans la branche principale.

**Exemple :**

```bash
git commit -m "feat: Ajoute le modèle User fixes #10"
```

Cela fermera automatiquement l'issue **#10**.

### Référencer plusieurs Issues

- Vous pouvez également mentionner plusieurs issues dans un seul commit.

**Exemple :**

```bash
git commit -m "update: Implémente la validation de l'utilisateur fixes #10, resolves #11"
```

---

## Lancer le projet

### 1. Mode développement

Pour lancer le projet en mode développement, utilisez la commande suivante :

```bash
npm run dev
```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000).

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
