// Vérifier l'algo si marche: Valide

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
       <article id=${this.id}>
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

  //POUR ALGO 2
  hasInIng(str) {
    //Mise à zero 
    let exists = false;
    // Dans les [ingredients] de cette reccette, pour chaque index "ing"
    this.ingredients.forEach((ing) => {
      // si dans cette recette, les index "ingr" ont un ingrédient = l'ingredient demander
      if (normalise(ing.ingredient).includes(str)) {
        // alors affiche la recette car l'ingredient existe
        exists = true;
      }
    });
    return exists;
  }
  hasInApp(str) {
    //Mise à zero 
    let exists = false;
    // si cette recette à un appareil = appareil demander
    if (normalise(this.appliance).includes(str)) {
      // alors affiche la recette car l'appareil existe
      exists = true;
    }
    return exists;
  }
  //récuperer l'ustensil demander
  hasInUst(str) {
    //Mise à zero
    let exists = false;
    // Dans les ustensils de cette recette, pour chaque index "ustensil" 
    this.ustensils.forEach((ust) => {
      // si dans cette recette, les ustensils = l'ustensil demander
      if (normalise(ust).includes(str)) {
        // alors affiche la recette car l'ustensil existe
        exists = true;
      }
    });
    return exists;
  }
  //récuperer le mot dans le titre 
  hasInTitle(str) {
    //Mise à zero 
    let exists = false;
    // si cette recette à dans son titre un mot = mot demander
    if (normalise(this.name).includes(str)) {
      // alors affiche la recette car le mot existe
      exists = true;
    }
    return exists;
  }
  //récuperer le mot dans la description 
  hasInDescription(str) {
    //Mise à zero
    let exists = false;
    // si cette recette dans ca description à un mot = mot demander
    if (normalise(this.description).includes(str)) {
      // alors affiche la recette car le mot existe
      exists = true;
    }
    return exists;
  }
}
