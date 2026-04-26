export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[]  -> Tout le monde peut y accéder]
["disconnected"] -> Seulement les utilisateurs non connectés
["connected"] -> Seulement les utilisateurs connectés
["admin"] -> Seulement les utilisateurs avec le rôle admin
["client"] -> Seulement les utilisateurs avec le rôle client
["admin", "client"] -> Seulement les utilisateurs avec le rôle admin ou client
*/