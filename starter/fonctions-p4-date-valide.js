/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/


const jour = parseInt(prompt('Entrez le jour'));
const mois = parseInt(prompt('Entrez le mois'));
const annee = parseInt(prompt('Entrez le année'));

let isValid = true;

function valid() {
    let isBissextile = false;

    function bissextile() {
        if (((annee % 4 === 0) && (!annee % 100 === 0)) || annee % 400 === 0) {
            isBissextile = true;
        }
    }

    bissextile();
    if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
        isValid = false;
    }
    if (jour < 1 || jour > 31) {
        isValid = false;
    }
    if (mois < 1 || mois > 12) {
        isValid = false;
    }
    if (annee < 1) {
        isValid = false;
    }

    switch (mois) {
        case 2 :
            if (isBissextile) {
                if (jour > 29) {
                    isValid = false;
                }
            } else {
                if (jour > 28) {
                    isValid = false;
                }
            }
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            if (jour > 30) {
                isValid = false;
            }
    }
}

valid();
if (isValid === true) {
    console.log(`Nous sommes le ${jour} ${mois} ${annee}`);
} else {
    console.log(`Ce n'est pas une date valide`);
}




