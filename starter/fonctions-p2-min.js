/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique


// Utilisation de la fonction calcMin pour calculer le minimum

function calcMin (min,max) {
    const calcul = `Le minimum entre ${min} et ${max} est ${min}.`;
    return calcul;
}

console.log(calcMin("15","20"));

// Version avec une arrow function

const calcMin2 = (min,max) => {
    const calcul2 = `Le minimum entre ${min} et ${max} est ${min}.`;
    return calcul2;
}
console.log(calcMin2("20","25"));


// Utilisation de la fonction calcMinArrow pour calculer le minimum


// Version encore plus concise avec une arrow function
const calcMinConcise = (a, b) => (a < b) ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum



