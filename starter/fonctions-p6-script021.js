/*****************************
 * 021 - Function Statements and Expressions
 */

/*
1. Déclarez, en utilisant une fonction expression, la fonction whatDoYouDo
   prenant deux paramètres, job et firstName. Cette fonction retourne le prénom suivi
   d'une phrase qui décrit le job de la personne pour différents cas de job :
   - si c'est teacher, "teaches kids how to code"
   - si c'est driver, "drives a cab in Lisbon"
   - si c'est designer, "designs beautiful websites"
   - dans tous les autres cas, "does something else"
*/
/*
const whatDoYouDo = function (job, firstName) {
    // Utilisez des conditions (if/else if) pour décrire le job de la personne en fonction de la valeur de 'job'.
    // Renvoyez la phrase appropriée en utilisant un return.
    let sayHelloString = firstName;
    switch (job) {
        case "teacher" :
            sayHelloString += "teaches kids how to code";
            break;
        case "driver" :
            sayHelloString += "drives a cab in Lisbon";
            break;
        case "designer" :
            sayHelloString += "designs beautiful websites";
            break;
        default :
            sayHelloString += "does something else";
    }
    return sayHelloString;
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("driver", "Jane"));
console.log(whatDoYouDo("designer", "Mark"));
/*
/*
2. Utilisez cette fonction pour afficher dans la console ce que font :
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

const whatDoYouDo = {
    nom: ["John", "Jane", "Mark"],
    profession: ["Teacher", "Driver", "Designer"],
    test(job) {
        switch (job) {
            case "Teacher" :
                return (`${this.nom[0]} teaches kids how to code`);
            case "Driver" :
                return (`${this.nom[1]} drives a cab in Lisbon`);
            case "Designer" :
                return (`${this.nom[2]} designs beautiful websites`);
            default :
                return (`does smth else`);
        }
    }
}

console.log(whatDoYouDo.test(whatDoYouDo.profession[0]));
console.log(whatDoYouDo.test(whatDoYouDo.profession[1]));
console.log(whatDoYouDo.test(whatDoYouDo.profession[2]));
