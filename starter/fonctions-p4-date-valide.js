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


// Demander à l'utilisateur de saisir une date

const jour = prompt("Entrez un jour :");
const mois = prompt("Entrez un mois :");
const annee = prompt("Entrez une année :");

let isValid = true;

// Fonction pour vérifier si une année est bissextile


// Fonction pour vérifier si une date est valide


function valid() {
    let isBissextile = true;

    function bissextile() {
        if (((annee % 4 === 0) && (!annee % 100 === 0)) || annee % 400 === 0) {
            isBissextile = true;
        } else {
            isBissextile = false;
        }
    }

    bissextile();
    if ((isNaN(jour)) || isNaN(mois) || isNaN(annee)) {
        isValid = false;
    }
    if ((mois > 12) || (mois < 1)) {
        isValid = false;
    }
    if (annee < 1) {
        isValid = false;
    }
    if ((jour > 31) || (jour < 1)) {
        isValid = false;
    }
    switch (mois) {
        case 2 :
            if (isBissextile === true) {
                if (jour > 29) {
                    isValid = false;
                }
            } else {
                isValid = true;
            }
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            if (jour > 30) {
                isValid = false;
            }
            break;
    }
}


// Utilisation de la fonction isValid pour vérifier la date

valid();
if (isValid === true) {
    console.log(`Nous sommes le ${jour} ${mois} ${annee}.`);
} else {
    console.log("La date n'est pas valide");
}
