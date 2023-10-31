/*
FONCTIONS - PRÉPA 3 : Une première calculatrice
1. Déclarez la fonction calculer()
   pour qu'elle gère les 4 opérations mathématiques de base :
   addition, soustraction, multiplication et division.
   Conseil : utilisez un switch pour basculer entre les différentes opérations.
2. Utilisez ensuite votre fonction pour calculer
   - 4 + 6 (qui doit évidemment donner 10)
   - 4 - 6 (qui doit évidemment donner -2)
   - 2 * 0 (qui doit évidemment donner 0)
   - 12 / 0 (qui doit donner Infinity)
Aide : votre fonction s'exécute avec le pattern suivant : calculer(nb1, "+", nb2)
*/

// Déclaration de la fonction calculer

const operation = prompt("Quelle opération voulez-vous effectuer ?");

const chiffre1 = parseInt(prompt("Quel est votre chiffre minimal ?"));
const chiffre2 = parseInt(prompt("Quel est votre chiffre maximal ?"));

function calculer(min, max) {
    switch (operation) {
        case "addition" :
            console.log(`${chiffre1} + ${chiffre2} = ${chiffre1 + chiffre2}`);
            break;
        case "soustraction" :
            console.log(`${chiffre1} - ${chiffre2} = ${chiffre1 - chiffre2}`);
            break;
        case "multiplication" :
            console.log(`${chiffre1} * ${chiffre2} = ${chiffre1 * chiffre2}`);
            break;
        case "division" :
            console.log(`${chiffre1} / ${chiffre2} = ${chiffre1 / chiffre2}`);
            break;
        default :
            console.log("Cette opéation n'existe pas");
    }
}

// Utilisation de la fonction calculer

calculer(`${chiffre1}`, `${chiffre2}`);