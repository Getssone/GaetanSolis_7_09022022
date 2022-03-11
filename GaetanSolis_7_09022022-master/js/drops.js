/** Instanciation
 */

let dropIngrBtn = document.getElementById("ingredients-down");//intégration sur la fléche pour qu'il y est propagation de l'action pour l'ouerture
let dropAppBtn = document.getElementById("appareil-down");
let dropUstBtn = document.getElementById("ustensiles-down");

let dropIngrBtnClos = document.getElementById("ingredients-up");//intégration sur la fléche pour qu'il y est propagation de l'action pour la fermeture
let dropAppBtnClos = document.getElementById("appareil-up");
let dropUstBtnClos = document.getElementById("ustensiles-up");


let searchEvery = document.querySelector(".search-every");
let main = document.querySelector(".recipes");

/** Ouverture des drops down
 */
dropIngrBtn.addEventListener("click", openDropIngr);
dropAppBtn.addEventListener("click", openDropApp);
dropUstBtn.addEventListener("click", openDropUst);

/** Fermeture des drops down
 */
dropIngrBtnClos.addEventListener("click", closeAll); 
dropAppBtnClos.addEventListener("click", closeAll);
dropUstBtnClos.addEventListener("click", closeAll);

main.addEventListener("click", closeAll); 
searchEvery.addEventListener("click", closeAll); 


/** Création des Function
 */

//Function fermture de tous les drops down
function closeAll() {
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-app_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

//Function ouverture  selon l'element selectione
function openDropIngr() {
  document.getElementById("drop-ing_open").style.display = "flex";
  document.getElementById("drop-app_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

function openDropApp() {
  document.getElementById("drop-app_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

function openDropUst() {
  document.getElementById("drop-ust_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-app_open").style.display = "none";
}
