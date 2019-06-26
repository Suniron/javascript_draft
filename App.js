// -- DECLARATION DES VARIABLES --
// Ecrire dans la console:
console.log("Message à afficher");

// Créer une variable et afficher son type:
let a;
console.log(a); // Elle n'a pas encore de type, donc 'undefined'

// Créer une variable et afficher son contenu:
let b;      //  ou:
b = 8.24;   // let b = 8.24;
console.log(b);

// Créer une constante (valeur qui ne changera pas):
let c = 0;  // c vaut 0
c += 1;     // c vaut 1
c ++;       // c vaut 2
console.log(c)

// -- PORTEE DES VARIABLES --
let num1 = 0;
{
  num1 = 1; // OK : num1 est déclarée dans le bloc parent
  const num2 = 0;
}
console.log(num1); // 1
//console.log(num2); // Erreur : num2 n'est pas visible ici !

// -- NOTION D'EXPRESSION --
// Manipuler des variables:
const c = 3; // 3 est une expression dont la valeur est 3
let d = c; // d est une expression dont la valeur est celle de c (3 ici)
d = d + 1; // (d + 1) est une expression dont la valeur est celle de d + 1 (4 ici)
console.log(d); // 4

// Priorité dans les calculs:
let e = 3 + 2 * 4; // e contient 11 (3 + 8)
e = (3 + 2) * 4;   // e contient 20 (5 * 4)

// Insérer le résultat d'un calcul dans une chaine (grâce à ${expression}):
const country = "France";
console.log(`Je vis en ${country}`); // "Je vis en France"

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"

// -- CONVERSIONS DE TYPE --
