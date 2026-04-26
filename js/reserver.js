const formReservation = document.getElementById("formReservation");
const btnReserver = document.getElementById("btnReserver");
const nomInput = document.getElementById("NomInput");
const prenomInput = document.getElementById("PrenomInput");

// Pré-remplir les champs Nom et Prénom depuis l'API
let myHeadersGet = new Headers();
myHeadersGet.append("X-AUTH-TOKEN", getToken());

fetch(apiUrl + "account/me", { method: 'GET', headers: myHeadersGet })
    .then(response => response.json())
    .then(user => {
        nomInput.value = user.lastName ?? '';
        prenomInput.value = user.firstName ?? '';
    })
    .catch(error => console.log('error', error));

btnReserver.addEventListener("click", creerReservation);

function creerReservation(){
    let dataForm = new FormData(formReservation);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", getToken());

    let raw = JSON.stringify({
        "date": dataForm.get("Date"),
        "time": dataForm.get("Heure"),
        "nbGuests": Number.parseInt(dataForm.get("NbConvives")),
        "allergies": dataForm.get("Allergies")
    });

    fetch(apiUrl + "reservation", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                console.log("Erreur lors de la réservation");
            }
        })
        .then(result => {
            if(result){
                globalThis.location.replace("/allResa");
            }
        })
        .catch(error => console.log('error', error));
}

