import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "pages/home.html", []),
    new Route("/galerie", "La galerie", "pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "pages/auth/account.html", ["ROLE_USER"]),
    new Route("/editPassword", "Changement de mot de passe", "pages/auth/editPassword.html", ["ROLE_USER"]),
    new Route("/allResa", "Vos Réservations", "pages/reservations/allResa.html", ["ROLE_USER"], "/js/allResa.js"),
    new Route("/reserver", "Réserver", "pages/reservations/reserver.html", ["ROLE_USER"], "/js/reserver.js"),
    new Route("/carte", "La carte", "pages/carte.html", [], "/js/carte.js"),
];

export const websiteName = "Quai Antique";

