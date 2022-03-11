// Valide
//récupération de tous les termes afin de créer un tableau dans lequel l'algo 1 effectuera sa recherche

function getIngredientsToConcat(recipe) {
  let ingredientsToConcatArray = [];
  let ingr = recipe.ingredients;
  for (let i = 0; i < ingr.length; i++) {
    // normalisation de l'écriture pour chaque ingredient indexe en tant qu'ingredient 
    let ingredientsToConcat = normalise(ingr[i].ingredient);
    // console.log(ingredientsToConcat)

    ingredientsToConcatArray.push(ingredientsToConcat);
  }
  return ingredientsToConcatArray;
}

function getUstensilsToConcat(recipe) {
  let ustensilsToConcatArray = [];
  let ust = recipe.ustensils;
  for (let i = 0; i < ust.length; i++) {
    let ustensilsToConcat = normalise(ust[i]);
    // console.log(ustensilsToConcat)
    ustensilsToConcatArray.push(ustensilsToConcat);
  }

  return ustensilsToConcatArray;
}
