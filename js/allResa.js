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
                <div class="d-flex justify-content-between align-items-center mb-2 p-3 border rounded">
                    <span>
                         ${sanitizeHtml(date)} | 
                         ${sanitizeHtml(resa.time)} | 
                         ${sanitizeHtml(String(resa.nbGuests))} personne(s) | 
                         ${sanitizeHtml(resa.allergies ?? 'Pas d\'allergie')}
                    </span>
                    <button 
                        class="btn btn-danger btn-sm" 
                        onclick="annulerReservation(${resa.id})">
                        Annuler
                    </button>
                </div>`;
        });
        allReservations.innerHTML = html;
    })
    .catch(error => console.log('error', error));

function annulerReservation(id){
    if(!confirm("Voulez-vous vraiment annuler cette réservation ?")){
        return;
    }

    let myHeadersDelete = new Headers();
    myHeadersDelete.append("X-AUTH-TOKEN", getToken());

    fetch(apiUrl + "reservation/" + id, {
        method: 'DELETE',
        headers: myHeadersDelete,
        redirect: 'follow'
    })
        .then(response => {
            if(response.ok){
                globalThis.location.reload();
            } else {
                console.log("Erreur lors de l'annulation");
            }
        })
        .catch(error => console.log('error', error));
}