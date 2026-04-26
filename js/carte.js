const allMenus = document.getElementById("allMenus");

fetch(apiUrl + "menu")
    .then(response => response.json())
    .then(menus => {
        let html = '';
        menus.forEach(menu => {
            html += getMenuCard(menu.title, menu.description, menu.price);
        });
        allMenus.innerHTML = html;
    })
    .catch(error => console.log('error', error));

function getMenuCard(titre, description, price){
    titre = sanitizeHtml(titre);
    description = sanitizeHtml(description ?? '');
    return `
        <div class="col">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                    <h3 class="card-title" style="color: var(--bs-primary)">${titre}</h3>
                    <p class="card-text text-muted">${description}</p>
                    <p class="fw-bold fs-5">${price.toFixed(2).replace('.', ',')} €</p>
                </div>
            </div>
        </div>`;
}

