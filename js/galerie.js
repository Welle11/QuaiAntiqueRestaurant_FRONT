const galerieImage = document.getElementById("allImages");

// Ordre d'affichage voulu par id
const ordreVoulu = [1, 6, 2, 3, 5, 4];

// On appelle l'API pour récupérer toutes les images
fetch(apiUrl + "picture")
    .then(response => response.json())
    .then(pictures => {
        let html = '';
        // On trie selon l'ordre voulu
        ordreVoulu.forEach(id => {
            const picture = pictures.find(p => p.id === id);
            if (picture) {
                html += getImage(picture.title, `../images/${encodeURIComponent(picture.slug)}`);
            }
        });
        galerieImage.innerHTML = html;
    })
    .catch(error => console.log('error', error));

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100" alt="${titre}"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="ROLE_ADMIN">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;

}
