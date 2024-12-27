/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()

let inputJoueur = document.getElementById("inputEcriture");
let boutonValid = document.getElementById("btnValiderMot");
console.log(inputJoueur);
console.log(boutonValid);

let motAffichage = document.querySelector(".zoneProposition");
let scoreAffichage = document.querySelector(".zoneScore span");
console.log(motAffichage);
console.log(scoreAffichage);

let btnRadio = document.querySelectorAll(".optionSource input");
console.log(btnRadio);

// inputJoueur.setAttribute("attribut a chnager", "attribut changer");
// inputJoueur.classList.add("pour rajouter une classe");
// inputJoueur.classList.remove("pour nelever une classe");