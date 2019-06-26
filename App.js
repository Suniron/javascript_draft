/*
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
// Concatener une chaine et un nombre:
const f = 100;
console.log("f contient " + f); // "f contient 100"
// Sortie impossible:
const g = "cinq" * 2;
//console.log(g); // NaN

// Forcer la conversion du type d'une variable:
const h = "5";
console.log(h + 1); // Concaténation : affiche "51"

const i = Number("5");
console.log(i + 1); // Addition numérique : affiche 6

// -- INTERRAGIR AVEC L'UTILISATEUR --
// Afficher une saisie (que dans un navigateur):
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);

// Enregistrer une saisie en nombre (que dans un navigateur):
const nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre

// Afficher plusieurs valeurs:
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // "36.9 37.6 37.1"

// -- CONDITIONS --

// Modèle: Condition if:
if (condition) {
  // instructions exécutées quand la condition est vraie
}

// Afficher un nombre saisie si positif
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}

// Tester un booléen:
if (true) {
  // la condition du if est toujours vraie :
  // les instructions de ce bloc seront toujours exécutées
}
if (false) {
  // la condition du if est toujours fausse :
  // les instructions de ce bloc ne seront jamais exécutées
}

// Opérateurs de comparaisons:
//  ===   Egal à
//  !==   Différent de
//  <     Inférieur à
//  <=    Inférieur ou égal à
//  >     Supérieur à
//  >=    Supérieur ou égal à

// Modèle: Condition if / else:
if (condition) {
  // instructions exécutées quand la condition est vraie
}
else {
  // instructions exécutées quand la condition est fausse
}

// Imbriquer des conditions:
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else { // nombre === 0
    console.log(nombre + " est nul");
  }
}

// Imbriquer des conditions avec un else if:
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else if (nombre < 0) {
  console.log(nombre + " est négatif");
} else {
  console.log(nombre + " est nul");
}

// -- CONDITIONS COMPOSEES --
// Vérifier si le contenu de la variable nombre est >= 0 et <= 100:
if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}

// Tester l'opérateur && (= et) avec du booléen:
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Tester l'opérateur || (= ou):
// Si le contenu de nombre est plus petit que 0 ou plus grand que 100:
if ((nombre < 0) || (nombre > 100)) {
  console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}
// Tester l'opérateur ! (= non)
if (!(nombre > 100)) {
  console.log(nombre + " est inférieur ou égal à 100");
}
// Tester l'opérateur ! avec du booléen:
console.log(!true);  // false
console.log(!false); // true

// -- EXEMPLE: EXPRIMER UN CHOIX --
// Exemple de script pour répondre selon la saisie:
const meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris ! Il faut répondre parmis ces choix: soleil, vent, pluie, neige");
}

// Même exemple avec un switch:
const meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
  case "soleil":
    console.log("Sortez en t-shirt.");
    break;
  case "vent":
    console.log("Sortez en pull.");
    break;
  case "pluie":
    console.log("Sortez en blouson.");
    break;
  case "neige":
    console.log("Restez au chaud à la maison.");
    break;
  default:
    console.log("Je n'ai pas compris ! Il faut répondre parmis ces choix: soleil, vent, pluie, neige");
}

// Modèle: switch:
switch (expression) {
  case valeur1:
    // instructions exécutées quand expression vaut valeur1
    break;
  case valeur2:
    // instructions exécutées quand expression vaut valeur2
    break;
  ...
  default:
    // instructions exécutées quand aucune des valeurs ne correspond
}

// Créer une erreur avec un switch sans break:
const x = "abc";
switch (x) {
  case "abc":
    console.log("x vaut abc");
    // ERREUR: pas de break : on passe au bloc suivant !
  case "def":
    console.log("x vaut def");
    break;
}
*/
