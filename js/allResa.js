const allReservations = document.getElementById("allReservations");

let myHeaders = new Headers();
myHeaders.append("X-AUTH-TOKEN", getToken());

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(apiUrl + "reservation", requestOptions)
    .then(response => response.json())
    .then(reservations => {
        if(reservations.length === 0){
            allReservations.innerHTML = '<p class="text-center">Vous n\'avez pas encore de réservation.</p>';
            return;
        }
        let html = '';
        reservations.forEach(resa => {
            const date = new Date(resa.date).toLocaleDateString('fr-FR');
            html += `
                <a href="#">
                    <span>${sanitizeHtml(date)}</span> | 
                    <span>${sanitizeHtml(resa.time)}</span> | 
                    <span>${sanitizeHtml(String(resa.nbGuests))} personne(s)</span> | 
                    <span>${sanitizeHtml(resa.allergies ?? 'Pas d\'allergie')}</span>
                </a>`;
        });
        allReservations.innerHTML = html;
    })
    .catch(error => console.log('error', error));

    