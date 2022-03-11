// Valide

class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.serving = data.serving;
    this.ingredients = data.ingredients;
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit= data.unit;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;  
    this.ustensils = data.ustensils;
    this.terms = new Set();

    this.collectTerms();
  }

  //pour filtrer sur  les tags
  //récuperer (ingrédient demander)
  hasIngredient(ingredient) {
    //Mise à zero 
    let exists = false;
    // Dans les ingredients de cette reccette, pour chaque index "ingr"  
    this.ingredients.forEach((ing) => {
      // si dans cette recette, les index "ingr" ont un ingrédient = l'ingredient demander
      if (ing.ingredient === ingredient) {
        // alors affiche la recette car l'ingredient existe
        exists = true;
      }
    });
    return exists;
  }
  //récuperer l'appareil demander
  hasAppliance(appl) {
    //Mise à zero
    let exists = false;
    // si cette recette à un appareil = appareil demander
    if (this.appliance === appl) {
      // alors affiche la recette car l'appareil existe
      exists = true;
    }
    return exists;
  }
  //récuperer l'ustensil demander
  hasUstensil(ust) {
    //Mise à zero
    let exists = false;
    // Dans les ustensils de cette recette, pour chaque index "ustensil" 
    this.ustensils.forEach((ustensil) => {
      // si dans cette recette, les ustensils = l'ustensil demander
      if (ustensil === ust) {
        // alors affiche la recette car l'ustensil existe
        exists = true;
      }
    });
    return exists;
  }

// Affiche recette
render() {
  let ingredientHtml = "";

  this.ingredients.forEach((ingr) => {
    if (ingr.quantity) {
      if (ingr.unit && ingr.quantity) {
        ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span> : ${ingr.quantity} ${ingr.unit}</div>`;
      } else {
        ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span> : ${ingr.quantity}</div>`;
      }
    } else {
      ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span></div>`;
    }
  });

  return `
     <article class="article" id=${this.id} tabindex="0">
    
       <div class="photo"><img src="logo.png"/></div>
       <div class="article-all">
          <div class="title">
               <div class="title-txt">${this.name}</div>
              <div class="title-time"><i class="far fa-clock"></i> ${this.time}</div>
          </div>
           <div class="details">
              <div class="details-ing">${ingredientHtml}</div>
              <div class="details-txt">${this.description}</div>
          </div>
       </div>
     </article>`;
}

// Pour Algo 1
  //regroupe dans un ensemble tous les termes utiles d'une recette en vue de la recherche barre principale
  collectTerms() {
    let recipe = this;
    // Mise en tableau le nom des recettes
    let nameToConcatArray = [normalise(recipe.name)];
    // console.log(nameToConcatArray)

    // Mise en tableau des ingrédient 
    let ingredientsToConcatArray = getIngredientsToConcat(recipe);
    //  console.log(ingredientsToConcatArray)

    // Mise en tableau le nom des appareilles
    let applianceToConcat = [normalise(recipe.appliance)];

    // Mise en tableau le nom des ustensiles
    let ustensilsToConcatArray = getUstensilsToConcat(recipe);
    // console.log(ustensilsToConcatArray)

    // Récupération des résumés des recettes
    let descriptionToConcat = recipe.description;
    // console.log(descriptionToConcat)


    // Normalisation de l'écriture des résumés des recettes
    let descriptionNorm = normalise(descriptionToConcat);
    // console.log(descriptionNorm)

    // Mise en tableau des resumés en sous-chaînes afin de faire des recherches par la suite
    let descriptionToConcatArray = descriptionNorm.split(" ");
    // console.log(descriptionToConcatArray)

    // Mise en tableau le nom des recettes + filtre les mots qui prenne de l'espace dans la recherche Algo
    let descriptionToBeConcatArray = descriptionToConcatArray.filter(
      (elt) => {
        if (stopWords.includes(elt)) {
          return false;
        }
        return true;
      });

    let recipeAllTermsArray = nameToConcatArray.concat(
      ingredientsToConcatArray,
      applianceToConcat,
      ustensilsToConcatArray,
      descriptionToBeConcatArray
    );
    // console.log(recipeAllTermsArray)

    // Utilisation de l'object typescript "Setconstructor"
    //utilisation "recipeAllTermsArray" pour chercher le mots clés dans tout le tableau.
    this.terms = new Set( //ATTENTION Difficulté à utilisé cette object 
      // Dans tous les termes cherche les élément
      recipeAllTermsArray.filter((elt) => {
        // si inférieur à 3 rien (On ne peut pas mettre plus car eau , riz sont des termes clés à 3 caractères)
        if (elt.length <= 2) {
          return false;
        }
        // si supérieur à renvoie le tableau avec les réponses ayant 3 caractére ou +
        return true;

      })

    );
    //Trie dans l'ordre alphabétique les terms, ce qui crée un nouvelle object (tableau ordre alphabétique) ATTENTION voir Utils SortSet crée ou remplace les élement dans this.terms ?
    this.terms = sortSet(this.terms);
    //Test du trie par recette
    // console.log(recipe.id, recipe.name, this.terms);
  }
  //recherche principale pour algo 1
  hasTerm(str) {
    let exists = false;
    // Dans le tableau terms de cette recette, pour chaque index "term" 
    this.terms.forEach((term) => {
      //si "term" possède le mots
      if (term.includes(str)) {
        // alors renvoie vrai
        exists = true;
      }
    });
     //renvoie la réponse
    return exists;
    
  
  }
  
}
