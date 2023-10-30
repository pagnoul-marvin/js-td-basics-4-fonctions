/*****************************
* 020 - Fonctions - Préalable
*/

// 6. FONCTION ANONYME

// 1°) Déclaration de fonction sous la forme d'une expression de fonction

// a) sans paramètre ni return

/* EXERCICE :
- Déclarez sous la forme d'une expression de fonction
  la fonction direBonjour qui affiche "Bonjour !" dans la console
- Exécutez la fonction
*/

// Expression de fonction sans paramètre ni return
function direbonjour() {
    console.log("Bonjour !");
}

// Appel de la fonction

direbonjour();

// b) sans paramètre mais avec return

/* EXERCICE 2 :
- Déclarez sous la forme d'une expression de fonction
  la fonction disBonjour qui retourne la chaîne "Bonjour !"
- Utilisez-la pour afficher "Bonjour !" dans la console
*/

// Expression de fonction sans paramètre mais avec return

function direBonjour2() {
    return "Bonjour !";
}

// Utilisation de la fonction pour afficher "Bonjour !" dans la console

console.log(direBonjour2());

// c) avec paramètre et return

/* EXERCICE 3 :
- Déclarez sous la forme d'une expression de fonction la fonction salue qui
   - prend le paramètre prenom
   - stocke dans une variable message "Bonjour !"
   - retourne ce message
- Utilisez-la pour saluer Thomas dans la console
*/


function direBonjour3(prenom) {
    const message2 = `Bonjour ${prenom} !`;
    return message2;
}

console.log(direBonjour3("Thomas"));


// Expression de fonction avec paramètre et return

// Utilisation de la fonction pour saluer Thomas dans la console
