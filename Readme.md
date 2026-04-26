# QuaiAntique Restaurant — Front-end

Site vitrine pour le restaurant fictif Quai Antique, développé en Vanilla JS dans le cadre du projet fil rouge STUDI.

---

## Crédits

Inspiré des projets étudiants :
- **ThomasBDC** — [QuaiAntiqueRestaurantFront](https://github.com/ThomasBDC/QuaiAntiqueRestaurantFront),(https://github.com/ThomasBDC/QuaiAntiqueRestaurantFront)

Développé par **Melle G. (Welle11)**

---

## Stack technique

- Vanilla JavaScript ES6+
- HTML5 / CSS3
- Bootstrap 5
- Bootstrap Icons
- SCSS

---

## Prérequis

- Node.js >= 18
- npm

---

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/Welle11/QuaiAntiqueRestaurant_FRONT.git
cd QuaiAntiqueRestaurant_FRONT
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm start
```

Le site est accessible sur `http://localhost:3000`

---

## Pages disponibles

| Route | Accès | Description |
|-------|-------|-------------|
| / | Public | Accueil |
| /galerie | Public | Galerie photos |
| /carte | Public | La carte des menus |
| /signin | Non connecté | Connexion |
| /signup | Non connecté | Inscription |
| /account | Connecté | Mon compte |
| /reserver | Connecté | Faire une réservation |
| /allResa | Connecté | Mes réservations |

---

## Back-end

Ce front-end communique avec l'API Symfony :
[QuaiAntiqueRestaurant_BACK](https://github.com/Welle11/QuaiAntiqueRestaurant_BACK)