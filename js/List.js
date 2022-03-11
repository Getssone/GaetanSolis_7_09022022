class List {
  constructor() {
    this.all = [];
    this.ingredients = [];
    this.ingredientsSelected = [];
    this.appliances = [];
    this.applianceSelected = [];
    this.ustensils = [];
    this.ustensilsSelected = [];
    this.alltagsSelected = [];
    this.search = " ";
  }

  /**Méthode :
   * 
  */

  // Récupére les recettes

  add(recipe) {
    //ajouter dans l'objet "list" la recette [i] du tableau "all" 
    list.all.push(recipe);
    // console.log(recipe)
  }

  // Affiche les recettes dans le main
  displayRecipes() {
    let html = "";
    // Pour chaque index du tableau 
    for (let i = 0; i < this.filtered.length; i++) {
      // recipe sera = un objet recette filtré
      let recipe = new Recipe(this.filtered[i]);
      //Dans le HTMl ajoute la méthode render qui est dans l'object recipe
      html += recipe.render();
    }
    document.querySelector("main").innerHTML = html;
  }

  /**Filtre les listes des drop down   */

  //Ingredients

  //Collecter l'ingrédient rechercher
  collectIngredients() {
    //filtre les ingrédient pour chaque recette indexé
    this.filtered.forEach((recipe) => {
      // dans chaque recette récupére dans datas "ingrédients" et chaque "ingr" sera indexé
      recipe.ingredients.forEach((ingr) => {
        // Met dans le nouveau tableau les donnée [ingredients] l'"ingredient" dans "ingr" (ingr= chaque {} dans ingrédients)
        this.ingredients.push(ingr.ingredient);
        // console.log(ingr.ingredient)
      });
    });
  }

  //Afficher la listes ingrédients du tableau [ingredients] et le rendre disponnible dans le dropdown
  displayIngredients(ingredients) {
    //[ingredients] est un nouveaux tableaux classé par ordre alphabétique venant de data.ingredients
    ingredients = sortSet(ingredients);
    // console.log(ingredients)

    let html = "";
    //Dans le tableau [ingredients] pour chaque "ingr"
    ingredients.forEach((ingr) => {
      //Ajoute au html la string "a" + normaliseName = function pour accepté toutes les type d'ecriture
      html += `<a href="#" class="ingredient-tag" id="${normaliseName(ingr)}" data-name="${ingr}"> ${ingr} </a>`;
    });
    //Crée le lien HTML et Js pour inséré dans "drop-ingredients_open" le code html de displayIngredients
    document.getElementById("drop-ingredients_open").innerHTML = html;
  }

  // Filtre par ingrédient

  filterByIng() {
    // filtered filtrera les recette
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;
      // Dans le tableau [ingredientsSelected] pour chaque "ingredientsSelected"
      this.ingredientsSelected.forEach((ingSelec) => {
        // si dans la recette il y a l'ingrédient demander "ingredientsSelected.name"
        if (recipe.hasIngredient(ingSelec.name)) {
          // alors ajoute la recette
          count++;
        }
        //console.log(ingredientsSelected.name);
      });
      // si le conteur = à la longeur du tableau ingredientsSelected
      if (count == this.ingredientsSelected.length) {
        // affiche le 
        return true;
      }
      // ne rien faire 
      return false;
    });
    // Affiche les recettes dans la console
    //console.log(this.filtered);
  }

  //Afficher ou Supprime les tags au dessus du drop
  diplayIngredientTag() {
    let html = "";
    // Pour chaque "index" de ce tableau
    for (let i = 0; i < this.ingredientsSelected.length; i++) {
      // Récupere l'index sélectionné de l'ingrédient
      let ingSelected = this.ingredientsSelected[i];
      //console.log(ingSelected)
      //Ajoute au html la string "span" 
      html += `<span class="tagIngr tagsSelection" data-name="${ingSelected.name}" data-id="${ingSelected.id}">${ingSelected.name}  <i class="far fa-times-circle"></i></span>`;
    }
    // console.log(html)
    document.querySelector(".tagsIngr").innerHTML = html;
  }


  //Vérification des ingrédients restants dans les recettes disponibles
  listAvailableIngredients() {
    // Nouveau tableau via l'objet Set 
    let list = new Set();
    // Filtre chaque recette
    this.filtered.forEach((recipe) => {
      // Dans leurs ingrédient pour chaque item (les "item" dans data son dans "ingrédients" et entre {})
      recipe.ingredients.forEach((item) => {
        // Dans le tableau [list] ajouté "ingrédient"
        list.add(item.ingredient);
      });
    });

    // Affiche le taleau [list]
    return list;
  }

  //Filtrer sur la liste des ingrédients
  listenForFilteringIng() {
    // Vérifie si il y a un clic sur un tag
    document.querySelectorAll(".ingredient-tag").forEach((tag) => {
      // le tag cliquez aura pour élément
      tag.addEventListener("click", (e) => {

        //L'element ciblee prend pour attribut le "tag" qui sera identifié
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");
        //Dans le tableau [ingredientsSelected] on crée un attribut id ayant l'id du tag ; un attribut nom ayant le nom du tag
        this.ingredientsSelected.push({
          id: tagId,
          name: tagName,
        });
        //console.log("le tag ayant pour id : " + e.target.getAttribute("id")+ " + la data-name : " + e.target.getAttribute("data-name")+ " a été cliquez");

        // console.log(this.ingredientsSelected);

        // l'element ciblée filtre par ingrédient
        this.filterByIng();
        // l'element ciblée aura un rendu des recettes
        this.displayRecipes();
        // l'element ciblée sera affiché au dessus du drop down
        this.diplayIngredientTag();

        // Vérification des ingrédient restant via le tableau des recettes actualisé
        this.ingredientsAvailable = this.listAvailableIngredients();
        // Trie du tableaux des ingrédient actualisé
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable)
        // Afficher la listes des nouveau ingrédients disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown;
        this.displayIngredients(this.ingredientsAvailable);

        // Vérification des appareils restant via le tableau des recettes actualisé
        this.appliancesAvailable = this.listAvailableAppliances();
        // Trie du tableaux des appareils actualisé
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // Afficher la listes des nouveau appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown
        this.displayAppliances(this.appliancesAvailable);

        // Vérification des ustensil restant via le tableau des recettes actualisé
        this.ustensilsAvailable = this.listAvailableUstensils();
        // Trie du tableaux des ustensil actualisé
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // Afficher la listes des nouveau ustensil disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        this.displayUstensils(this.ustensilsAvailable);

        // Ecoute si il y a un filtre sur la liste des ingrédients
        this.listenForFilteringIng();
        // Ecoute si il y a un filtre sur la liste des appareils
        this.listenForFilteringAppl();
        // Ecoute si il y a un filtre sur la liste des ustensils
        this.listenForFilteringUst();
        // Ecoute si il y a un filtre sur tous
        this.listenForFilteringAll();
        //Désactivation de l'affichage des Tag dans le drop down si ils sont sélectioné
        this.disableAllSelectedTag();
        //Supression du tags sélectioné
        this.closeTags();

        closeAll();
        //Crée le lien HTML et Js pour inséré dans "search-drop_ing" le champs vide
        document.getElementById("search-drop_ing").value = "";
      });
    });
  }


  //APPLIANCE

  //Collecter les appareils rechercher

  collectAppliances() {
    //filtre les appareils pour chaque recette indexé
    this.filtered.forEach((recipe) => {
      // Met dans le nouveau tableau les donnée [appareils] l'"appareils"
      this.appliances.push(recipe.appliance);
      // console.log(recipe.appliance)
    });
  }

  //Afficher la listes appliances du tableau [appliances] et le rendre disponnible dans le dropdown
  displayAppliances(appliances) {
    //[appliances] est un nouveaux tableaux classé par ordre alphabétique venant de data.appliances
    appliances = sortSet(appliances);
    //console.log(appliances)


    let html = "";
    //Dans le tableau [appliances] pour chaque "appl"
    appliances.forEach((appl) => {
      //ajoute au html la string "a" + normaliseName = function pour accepté toutes les type d'ecriture
      html += `<a href="#" class="appareil-tag" id="${normaliseName(appl)}"  data-name="${appl}">${appl}</a>`;
    });
    //Crée le lien HTML et Js pour inséré dans "drop-appareil_open" le code html de displayAppliances
    document.getElementById("drop-appareil_open").innerHTML = html;
  }

  //Filtrer sur la liste des appareils
  listenForFilteringAppl() {
    // Vérifie si il y a un clic sur un tag
    document.querySelectorAll(".appareil-tag").forEach((tag) => {
      // le tag cliquez aura pour élément
      tag.addEventListener("click", (e) => {
        //L'element ciblee prend pour attribut le "tag" qui sera identifié
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");

        //Dans le tableau [applianceSelected] on crée un attribut id ayant l'id du tag ; un attribut nom ayant le nom du tag
        this.applianceSelected.push({
          id: tagId,
          name: tagName,
        });

        //console.log(this.applianceSelected);
        //console.log("le tag ayant pour id : " + e.target.getAttribute("id")+ " + la data-name : " + e.target getAttribute("data-name")+ " a été cliquez");

        // l'element ciblée filtre par appareils
        this.filterByAppl();
        // l'element ciblée aura un rendu des recettes
        this.displayRecipes();
        // l'element ciblée sera affiché au dessus du drop down
        this.diplayApplianceTag();

        // Vérification des appareils restant via le tableau des recettes actualisé
        this.appliancesAvailable = this.listAvailableAppliances();
        // Trie du tableaux des appliancesAvailable
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // Afficher la listes des nouveau appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown;
        this.displayAppliances(this.appliancesAvailable);

        // Vérification des ingrédient restant via le tableau des recettes actualisé
        this.ingredientsAvailable = this.listAvailableIngredients();
        // Trie du tableaux des ingrédient actualisé
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        // Afficher la listes des nouveau ingrédient disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown
        this.displayIngredients(this.ingredientsAvailable);

        // Vérification des ustensil restant via le tableau des recettes actualisé
        this.ustensilsAvailable = this.listAvailableUstensils();
        // Trie du tableaux des ustensil actualisé
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // Afficher la listes des nouveau ustensil disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        this.displayUstensils(this.ustensilsAvailable);

        // Ecoute si il y a un filtre sur la liste des appareils
        this.listenForFilteringAppl();
        // Ecoute si il y a un filtre sur la liste des ingrédients
        this.listenForFilteringIng();
        // Ecoute si il y a un filtre sur la liste des ustensils
        this.listenForFilteringUst();
        // Ecoute si il y a un filtre sur la barre de recherche
        this.listenForFilteringAll();

        //Désactivation de l'affichage des Tag dans le drop down si ils sont sélectioné
        this.disableAllSelectedTag();
        //Supression du tags sélectioné
        this.closeTags();

        closeAll();
        document.getElementById("search-drop_app").value = "";
      });
    });
  }

  // Filtre par appareils
  filterByAppl() {
    // filtered filtrera les recette
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;
      // Dans le tableau [applianceSelected] pour chaque "objAppliance"
      this.applianceSelected.forEach((objAppliance) => {
        // si dans la recette il y a l'appareil demander "objAppliance.name"
        if (recipe.hasAppliance(objAppliance.name)) {
          // alors ajoute la recette
          count++;
        }
        //console.log(objAppliance.name);
      });
      // si le conteur = à la longeur du tableau applianceSelected
      if (count == this.applianceSelected.length) {
        // Affiche le 
        return true;
      }
      // ne rien faire
      return false;
    });
    // Affiche les recettes dans la console
    //console.log(this.filtered);
  }

  //Vérification des appareils restants dans les recettes disponibles
  listAvailableAppliances() {
    // Nouveau tableau via l'objet Set 
    let list = new Set();
    // Filtre chaque recette
    this.filtered.forEach((recipe) => {
      // Dans le tableau [list] ajouté "appareils"
      list.add(recipe.appliance);
      //console.log(recipe.appliance)
    });
    // Affiche le taleau [list]
    return list;
  }

  //Afficher ou Supprime les tags au dessus du drop
  diplayApplianceTag() {
    let html = "";
    // Pour chaque "index" de ce tableau
    for (let i = 0; i < this.applianceSelected.length; i++) {
      // Récupere l'index sélectionné de l'appareil
      let appSelected = this.applianceSelected[i];
      //console.log(appSelected)
      //Ajoute au html la string "span" 
      html += `<span class="tagAppl tagsSelection" data-name="${appSelected.name}" data-id="${appSelected.id}"> ${appSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    //console.log(html)
    document.querySelector(".tagsAppl").innerHTML = html;
  }

  //USTENSILS

  //Collecter les ustensils rechercher
  collectUstensils() {
    //filtre les ustensils pour chaque recette indexé
    this.filtered.forEach((recipe) => {
      // Dans chaque recette récupére dans datas "ustensils" et chaque "ingr" sera indexé
      recipe.ustensils.forEach((ust) => {
        // Met dans le nouveau tableau les donnée [ustensils] l'"ust"
        this.ustensils.push(ust);
        //console.log(ust)
      });
    });
  }
  //Afficher la listes ustensils du tableau [ustensils] et le rendre disponnible dans le dropdown
  displayUstensils(ustensils) {
    //[ustensils] est un nouveaux tableaux classé par ordre alphabétique venant de data.ustensils
    ustensils = sortSet(ustensils);

    let html = "";
    //Dans le tableau [ustensils] pour chaque "ust"
    ustensils.forEach((ust) => {
      //Ajoute au html la string "a" + normaliseName = function pour accepté toutes les type d'ecriture
      html += `<a href="#" class="ustensile-tag" id="${normaliseName(
        ust
      )}b" data-name="${ust}">${ust}</a>`;
    });
    //Crée le lien HTML et Js pour inséré dans "drop-ustensiles_open" le code html de displayUstensils
    document.getElementById("drop-ustensiles_open").innerHTML = html;
  }

  //Filtrer sur la liste des Ustensil
  listenForFilteringUst() {
    // Vérifie si il y a un clic sur un tag
    document.querySelectorAll(".ustensile-tag").forEach((tag) => {
      tag.addEventListener("click", (e) => {
        //L'element ciblee prend pour attribut le "tag" qui sera identifié
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");
        //Dans le tableau [ustensilsSelected] on crée un attribut id ayant l'id du tag ; un attribut nom ayant le nom du tag
        this.ustensilsSelected.push({
          id: tagId,
          name: tagName,
        });

        //console.log("le tag ayant pour id : " + e.target.getAttribute("id")+ " + la data-name : " + e.target.getAttribute("data-name")+ " a été cliquez");

        // console.log(this.ustensilsSelected);

        // l'element ciblée filtre par ustensil
        this.filterByUst();
        // l'element ciblée aura un rendu des recettes
        this.displayRecipes();
        // l'element ciblée sera affiché au dessus du drop down
        this.displayUstensilsTag();

        // Vérification des ustensil restant via le tableau des recettes actualisé
        this.ustensilsAvailable = this.listAvailableUstensils();
        // Trie du tableaux des ustensil actualisé
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // Afficher la listes des nouveau ustensil disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        this.displayUstensils(this.ustensilsAvailable);

        // Vérification des ingrédient restant via le tableau des recettes actualisé
        this.ingredientsAvailable = this.listAvailableIngredients();
        // Trie du tableaux des ingrédient actualisé
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        // Afficher la listes des nouveau ingrédients disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown;
        this.displayIngredients(this.ingredientsAvailable);

        // Vérification des appareils restant via le tableau des recettes actualisé
        this.appliancesAvailable = this.listAvailableAppliances();
        // Trie du tableaux des appareils actualisé
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // Afficher la listes des nouveau appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown
        this.displayAppliances(this.appliancesAvailable);

        // Ecoute si il y a un filtre sur la liste des ustensils
        this.listenForFilteringUst();
        // Ecoute si il y a un filtre sur la liste des ingrédients
        this.listenForFilteringIng();
        // Ecoute si il y a un filtre sur la liste des appareils
        this.listenForFilteringAppl();
        // Ecoute si il y a un filtre sur la barre de recherche
        this.listenForFilteringAll();

        //Désactivation de l'affichage des Tag dans le drop down si ils sont sélectioné
        this.disableAllSelectedTag();
        //Supression du tags sélectioné
        this.closeTags();

        closeAll();
        //Crée le lien HTML et Js pour inséré dans "search-drop_ing" le champs vide
        document.getElementById("search-drop_ust").value = "";
      });
    });
  }

  // Filtre par ustensils
  filterByUst() {
    // filtered filtrera les recette
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;
      // Dans le tableau [ustensilsSelected] pour chaque "objUstensils"
      this.ustensilsSelected.forEach((objUstensils) => {
        // si dans la recette il y a l'ingrédient demander "objUstensils.name"
        if (recipe.hasUstensil(objUstensils.name)) {
          // alors ajoute la recette
          count++;
        }
        //console.log(objUstensils.name);
      });
      // si le conteur = à la longeur du tableau ingredientsSelected
      if (count == this.ustensilsSelected.length) {
        // affiche le 
        return true;
      }
      // ne rien faire 
      return false;
    });
    // Affiche les recettes dans la console
    //console.log(this.filtered);
  }

  //Récupére les ustensils restants dans les recettes sélectionnées afin de ne plus afficher que ceux-ci dans la liste
  listAvailableUstensils() {
    // Nouveau tableau via l'objet Set 
    let list = new Set();
    // Filtre chaque recette
    this.filtered.forEach((recipe) => {
      // Dans leurs ingrédient pour chaque ust (les "ust" dans data son dans "ustensils" et entre {}
      recipe.ustensils.forEach((ust) => {
        // Dans le tableau [list] ajouté "ust"
        list.add(ust);
        //console.log(ust)
      });
    });
    // Affiche le taleau [list]
    return list;
  }

  //Afficher ou Supprime les tags au dessus du drop
  displayUstensilsTag() {
    let html = "";
    // Pour chaque "index" de ce tableau
    for (let i = 0; i < this.ustensilsSelected.length; i++) {
      // Récupere l'index sélectionné de l'ustensil
      let ustSelected = this.ustensilsSelected[i];
      //console.log(ustSelected)
      //Ajoute au html la string "span"
      html += `<span class="tagUst tagsSelection" data-name="${ustSelected.name}" data-id="${ustSelected.id}">${ustSelected.name} <i class="cross-ust far fa-times-circle"></i></span>`;
    }
    // console.log(html)
    document.querySelector(".tagsUst").innerHTML = html;
  }

  //Supprimer tags au dessus des drops
  closeTags() {
    //Récupére lescroix dans le DOM
    let cross = document.querySelectorAll(".fa-times-circle")
    //sur la croix HTML Pour chaque croixCliqué elle auras pour fonction
    cross.forEach((crossClick) => {
      // croixCliqué sera écoute au clic et aura pour évenement
      crossClick.addEventListener("click", (e) => {
        // le Css du noeud parent (<span>) disparait
        e.target.parentNode.style.display = "none";
        // dataName = l'élement ciblée data-name
        let dataName = e.target.parentNode.getAttribute("data-name");
        // l'élement ciblée data-id
        let dataId = e.target.parentNode.getAttribute("data-id");

        //console.log("voici " + dataName + dataId);

        //* RESTAURATION DES TAGS */

        // Si le tag séléctionée possède une class contenant "tagIngr"
        if (e.target.parentNode.classList.contains("tagIngr")) {
          // Pour chaque index du tableau "ingredientsSelected"
          for (let i = 0; i < this.ingredientsSelected.length; i++) {
            // si dans le tableau[ingredientsSelected] en index il y a le nom == à la dataName
            if (this.ingredientsSelected[i].name == dataName) {
              // dans le tableau[ingredientsSelected] joint l'index et enlève le
              this.ingredientsSelected.splice(i, 1);
              // Dans le tableau [alltagsSelected] réintégre = tableau ingredientsSelected + ustensilsSelected + applianceSelected
              this.alltagsSelected = this.ingredientsSelected.concat(
                this.ustensilsSelected,
                this.applianceSelected
              );
              //Crée le lien HTML et Js pour enlever la class "select"
              document.getElementById(dataId).classList.remove("select");
              // Affiche le tableau des ingrédient séléctionné
              console.log(this.ingredientsSelected);
            }
          }
        }
        // Autrement si le tag séléctionée possède une class contenant "tagAppl" 
        else if (e.target.parentNode.classList.contains("tagAppl")) {
          // Pour chaque index du tableau "applianceSelected"
          for (let i = 0; i < this.applianceSelected.length; i++) {
            // si dans le tableau[applianceSelected] en index il y a le nom == à la dataName
            if (this.applianceSelected[i].name == dataName) {
              // dans le tableau[applianceSelected] joint l'index et enlève le
              this.applianceSelected.splice(i, 1);
              // Dans le tableau [alltagsSelected] réintégre = tableau ingredientsSelected + ustensilsSelected + applianceSelected
              this.alltagsSelected = this.ingredientsSelected.concat(
                this.ustensilsSelected,
                this.applianceSelected
              );
              //Crée le lien HTML et Js pour enlever la class "select"
              document.getElementById(dataId).classList.remove("select");
              console.log(this.applianceSelected);
            }
          }
        }
        // Autrement
        else {
          // Pour chaque index du tableau "ustensilsSelected"
          for (let i = 0; i < this.ustensilsSelected.length; i++) {
            // si dans le tableau[ustensilsSelected] en index il y a le nom == à la dataName
            if (this.ustensilsSelected[i].name == dataName) {
              // dans le tableau[ustensilsSelected] joint l'index et enlève le
              this.ustensilsSelected.splice(i, 1);
              // Dans le tableau [alltagsSelected] réintégre = tableau ingredientsSelected + ustensilsSelected + applianceSelected
              this.alltagsSelected = this.ingredientsSelected.concat(
                this.ustensilsSelected,
                this.applianceSelected
              );
              //Crée le lien HTML et Js pour enlever la class "select"
              document.getElementById(dataId).classList.remove("select");
              console.log(this.ustensilsSelected);
            }
          }
        }

        //console.log("cette élement est fermer: " + dataName);



        // Ce filtre = tous le tableau [all]
        this.filtered = this.all;

        // Ce filtre filter par Ingrédient
        this.filterByIng();
        // Ce filtre filter par Ustensil
        this.filterByUst();
        // Ce filtre filter par Appareils
        this.filterByAppl();

        // Chrono metre le temps de recherche 
        this.chrono(this.filtered);

        // Vérification des appareils restant via le tableau des recettes actualisé
        this.appliancesAvailable = this.listAvailableAppliances();
        // Trie du tableaux des appareils actualisé
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // Afficher la listes des nouveaux appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown
        this.displayAppliances(this.appliancesAvailable);

        // Vérification des ingredients restant via le tableau des recettes actualisé
        this.ingredientsAvailable = this.listAvailableIngredients();
        // Trie du tableaux des ingrédients actualisé
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        // Afficher la listes des nouveaux ingrédients disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown
        this.displayIngredients(this.ingredientsAvailable);

        // Vérification des ustensils restant via le tableau des recettes actualisé
        this.ustensilsAvailable = this.listAvailableUstensils();
        // Trie du tableaux des ustensils actualisé
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // Afficher la listes des nouveaux ustensils disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        this.displayUstensils(this.ustensilsAvailable);

        // Affiche les recettes dans le main
        this.displayRecipes();

        //Désactivation tout Tag séléctioné dans le drop down (changement de l'affichage)
        this.disableAllSelectedTag();

        //Ecoute si il y a un Filtrer sur la liste des ingrédients
        this.listenForFilteringIng();
        //Ecoute si il y a un Filtrer sur la liste des ustensils
        this.listenForFilteringUst();
        //Ecoute si il y a un Filtrer sur la liste des appareils
        this.listenForFilteringAppl();
      });
    });
  }

  //Désactivation tout Tag séléctioné dans le drop down (Change l'affichage des ingrédients sélectionnés en italique normale transparent)
  disableAllSelectedTag() {
    // [alltagsSelected] = tableau ingredientsSelected + ustensilsSelected + applianceSelected
    this.alltagsSelected = this.ingredientsSelected.concat(
      this.ustensilsSelected,
      this.applianceSelected
    );
    // Pour chaque index du tableau
    for (let i = 0; i < this.alltagsSelected.length; i++) {
      // tagId sera le tag selectionné (via l'index et récupére l'Id)
      let tagId = this.alltagsSelected[i].id;
      // récupère dans le DOM le tags selectionné et ajoute a sa class "select"
      document.getElementById(tagId).classList.add("select");
      //console.log(tagId);
    }
    console.log("tags sellectionné et modifé", this.alltagsSelected);
  }

  /*   BARRE DE RECHERCHE PRINCIPALE  */

  listenForFilteringAll() {
    // récupère dans le DOM la barre de recherche 
    let mainInput = document.querySelector(".search-all");

    // La recherche principale ayant une entrée aura pour évenement 
    mainInput.addEventListener("input", (e) => {
      // nouvelle demande = différent du tableau 
      let hasNewCharacters = (this.search.length <= e.target.value.length);
      // cette recherche = normalise l'écritrue de la recherche  
      this.search = normalise(e.target.value);
      // item = tous le tableau de recettes
      let items = this.all;
      
      /* NE MARCHE PAS

      // // Ce filtre filter par Ingrédient
      // this.filterByIng();
      // // Ce filtre filter par Ustensil
      // this.filterByUst();
      // // Ce filtre filter par Appareils
      // this.filterByAppl();

      // //Ecoute si il y a un Filtrer sur la liste des ingrédients
      // this.listenForFilteringIng();
      // //Ecoute si il y a un Filtrer sur la liste des ustensils
      // this.listenForFilteringUst();
      // //Ecoute si il y a un Filtrer sur la liste des appareils
      // this.listenForFilteringAppl();
      */

      // si (demande de recherche)
      if (hasNewCharacters) {
        // tous le tableau = filtrer
        items = this.filtered;
      }

      // si (cette recherche possède 2 caractére ou plus)
      if (this.search.length > 2) {

        // function chronomètre de l'algo de recherche
        this.chrono(items);
        // Affiche les recettes dans le main
        this.displayRecipes();


        /* NE MARCHE PAS
        // // Ce filtre filter par Ingrédient
        // this.filterByIng();
        // // Ce filtre filter par Ustensil
        // this.filterByUst();
        // // Ce filtre filter par Appareils
        // this.filterByAppl();

        // // Vérification des ustensils restant via le tableau des recettes actualisé
        // this.ustensilsAvailable = this.listAvailableUstensils();
        // // Trie du tableaux des ustensils actualisé
        // this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // // Afficher la listes des nouveaux ustensils disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        // this.displayUstensils(this.ustensilsAvailable);

        // // Vérification des ingredients restant via le tableau des recettes actualisé
        // this.ingredientsAvailable = this.listAvailableIngredients();
        // // Trie du tableaux des ingrédients actualisé
        // this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        // // Afficher la listes des nouveaux ingrédients disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown
        // this.displayIngredients(this.ingredientsAvailable);

        // // Vérification des appareils restant via le tableau des recettes actualisé
        // this.appliancesAvailable = this.listAvailableAppliances();
        // // Trie du tableaux des appareils actualisé
        // this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // // Afficher la listes des nouveaux appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown
        // this.displayAppliances(this.appliancesAvailable);

        // //Ecoute si il y a un Filtrer sur la liste des appareils
        // this.listenForFilteringAppl();
        // //Ecoute si il y a un Filtrer sur la liste des ingrédients
        // this.listenForFilteringIng();
        // //Ecoute si il y a un Filtrer sur la liste des ustensils
        // this.listenForFilteringUst();
        */



        /* Si aucune recette présenter un message info */

        //si  (la longeur du filtre et = 0)
        if (this.filtered.length == 0) {
          // Crée le lien HTML et Js pour mettre display flex "filtered-empty" et afficher le message info
          document.getElementById("filtered-empty").style.display = "flex";
        } else {
          // Rend indisponible le tag
          this.disableAllSelectedTag();
          // Crée le lien HTML et Js pour mettre display none "filtered-empty" et ne pas afficher le message info
          document.getElementById("filtered-empty").style.display = "none";
        }
      } else {
        // Ce filtre = appliquer sut tous le tableau [all]
        this.filtered = this.all;

        // Ce filtre filter par Ingrédient
        this.filterByIng();
        // Ce filtre filter par Ustensil
        this.filterByUst();
        // Ce filtre filter par Appareils
        this.filterByAppl();

        // Crée le lien HTML et Js pour mettre display none "filtered-empty" et ne pas afficher le message info
        document.getElementById("filtered-empty").style.display = "none";

        /* NE MARCHE PAS 

        // Vérification des ustensils restant via le tableau des recettes actualisé
        this.ustensilsAvailable = this.listAvailableUstensils();
        // Trie du tableaux des ustensils actualisé
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        // Afficher la listes des nouveaux ustensils disponible du tableau [ustensilsAvailable] et l'affiche dans le dropdown
        this.displayUstensils(this.ustensilsAvailable);

        // Vérification des ingredients restant via le tableau des recettes actualisé
        this.ingredientsAvailable = this.listAvailableIngredients();
        // Trie du tableaux des ingrédients actualisé
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        // Afficher la listes des nouveaux ingrédients disponible du tableau [ingredientsAvailable] et l'affiche dans le dropdown
        this.displayIngredients(this.ingredientsAvailable);

        // Vérification des appareils restant via le tableau des recettes actualisé
        this.appliancesAvailable = this.listAvailableAppliances();
        // Trie du tableaux des appareils actualisé
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        // Afficher la listes des nouveaux appareils disponible du tableau [appliancesAvailable] et l'affiche dans le dropdown

        this.displayAppliances(this.appliancesAvailable);

        //Ecoute si il y a un Filtrer sur la liste des appareils
        this.listenForFilteringAppl();
        //Ecoute si il y a un Filtrer sur la liste des ingrédients
        this.listenForFilteringIng();
        //Ecoute si il y a un Filtrer sur la liste des ustensils
        this.listenForFilteringUst();

        // Rend indisponible le tag
        this.disableAllSelectedTag();

        //Ecoute si il y a un Filtrer sur la liste des appareils
        this.listenForFilteringAppl();
        //Ecoute si il y a un Filtrer sur la liste des ingrédients
        this.listenForFilteringIng();
        //Ecoute si il y a un Filtrer sur la liste des ustensils
        this.listenForFilteringUst();
*/
        // Affiche les recettes dans le main
        this.displayRecipes();
      }
    });
  }
  chrono(items) {
    // Temps Actuel de déclanchement
    let temps0 = performance.now();
    // ce filtre = [items] (tableau de toutes les recettes) filtre (les recette) 
    this.filtered = items.filter((recipe) => {
      // Renvoie les recettes ayant le term de la recherche
      return recipe.hasTerm(this.search);
    });

    // console.log(items.filter((recipe) => { return recipe.hasTerm(this.search) }))

    // Temps Actuel de la finalisation
    let temps1 = performance.now();
    // Affiche le temps écoulé
    console.log(
      'l\'algo 1 à mis"' + this.search + '":' + (temps1 - temps0) + "ms"
    );
  }

  /*   INPUT INGREDIENT DANS LE DROP DOWN  */

  //Ecoute si il y a un Filtrer sur la recherche
  listenForFilteringInputIngr() {
    // "ingredientsInputOpen" récupérer l'ID "ingredients" 
    let ingredientsInputOpen = document.getElementById("ingredients");
    // Ecoute le "click" et lance la fonction openDropIngr
    ingredientsInputOpen.addEventListener("click", openDropIngr);
    // "ingredientsInput" récupérer l'ID "search-drop_ing" (la recherche dans le drop ing)
    let ingredientsInput = document.getElementById("search-drop_ing");

    // Ecoute la "recherche" et lance l'"event"
    ingredientsInput.addEventListener("input", (e) => {
      // normalise la recherche
      this.search = normalise(e.target.value);
      // renvoie la recherche
      console.log("il a été taper", this.search);
      // Filtre par  la recherche ingrédient
      this.filterByInputIngr();
    });
  }
  // Filtre par  la recherche ingrédient
  filterByInputIngr() {
    // "ingrTag" récupérer dans le HTML la class "ingredient-tag" 
    let ingrTag = document.querySelectorAll(".ingredient-tag");
    // chaque "ingrTag" ayant une valeur (ing)
    ingrTag.forEach((ing) => {
      // cette valeur (ing) sera en display block
      ing.style.display = "block";
    });
    // chaque "ingrTag" ayant une valeur (ingre)
    ingrTag.forEach((ingre) => {
      // name= normalise la recherche"data-name"
      let name = normaliseForSearch(ingre.getAttribute("data-name"));
      //  si le "name" n'est pas includes à la recherche 
      if (!name.includes(this.search)) {
        // ne les affiche pas
        ingre.style.display = "none";
      }
      //console.log(name)
    });
  }

  /*   INPUT APPAREILS DANS LE DROP DOWN  */

  //Ecoute si il y a un Filtrer sur la recherche
  listenForFilteringInputApp() {
    // "appareilInputOpen" récupérer l'ID "appareil"
    let appareilInputOpen = document.getElementById("appareil");
    // Ecoute le "click" et lance la fonction openDropApp
    appareilInputOpen.addEventListener("click", openDropApp);
    // "appareilInput" récupérer l'ID "search-drop_app" (la recherche dans le drop app)
    let appareilInput = document.getElementById("search-drop_app");

    // Ecoute la "recherche" et lance l'"event"
    appareilInput.addEventListener("input", (e) => {
      // normalise la recherche
      this.search = normalise(e.target.value);

      // renvoie la recherche
      console.log("il a été taper", this.search);
      // Filtre par la recherche appareils
      this.filterByInputApp();
    });
  }

  // Filtre par  la recherche appareils
  filterByInputApp() {
    // "appTag" récupérer dans le HTML la class "appareil-tag" 
    let appTag = document.querySelectorAll(".appareil-tag");
    // chaque "appTag" ayant une valeur (app)
    appTag.forEach((app) => {
      // cette valeur (app) sera en display block
      app.style.display = "block";
    });
    // chaque "appTag" ayant une valeur (appa)
    appTag.forEach((appa) => {
      // name= normalise la recherche"data-name"
      let name = normaliseForSearch(appa.getAttribute("data-name"));
      //  si le "name" n'est pas includes à la recherche
      if (!name.includes(this.search)) {
        // ne les affiches pas
        appa.style.display = "none";
      }
    });
  }


  /*   INPUT USTENSILS DANS LE DROP DOWN  */

  //Ecoute si il y a un Filtrer sur la recherche
  listenForFilteringInputUst() {
    // "ustensilsInputOpen" récupérer l'ID "ustensiles"
    let ustensilsInputOpen = document.getElementById("ustensiles");
    // Ecoute le "click" et lance la fonction openDropUst
    ustensilsInputOpen.addEventListener("click", openDropUst);
    // "ingredientsInput" récupérer l'ID "search-drop_ust" (la recherche dans le drop ust)
    let ustensilsInput = document.getElementById("search-drop_ust");

    // Ecoute la "recherche" et lance l'"event"
    ustensilsInput.addEventListener("input", (e) => {
      // normalise la recherche
      this.search = normalise(e.target.value);
      // renvoie la recherche
      console.log("il a été taper", this.search);
      // Filtre par  la recherche ustensil
      this.filterByInputUst();
    });
  }
  // Filtre par  la recherche ustensil
  filterByInputUst() {
    // "ustTag" récupérer dans le HTML la class "ustensile-tag" 
    let ustTag = document.querySelectorAll(".ustensile-tag");
    // chaque "ustTag" ayant une valeur (ust)
    ustTag.forEach((ust) => {
      // cette valeur (ust) sera en display block
      ust.style.display = "block";
    });
    // chaque "ustTag" ayant une valeur (uste)
    ustTag.forEach((uste) => {
      // name= normalise la recherche"data-name"
      let name = normaliseForSearch(uste.getAttribute("data-name"));
      //  si le "name" n'est pas includes à la recherche
      if (!name.includes(this.search)) {
        // ne les affiches pas
        uste.style.display = "none";
      }
      //console.log(name)
    });
  }
}