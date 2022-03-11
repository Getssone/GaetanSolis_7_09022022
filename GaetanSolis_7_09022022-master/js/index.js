// Récupére les recettes dans la data
console.log(recipes);

// Création d'un nouvelle object list
let list = new List();

// Pour chaque recette indexé dans le tableau
for (let i = 0; i < recipes.length; i++) {
  // création d'un nouvelle object recette pour chaque recette indexé dans le tableau
  let recipe = new Recipe(recipes[i]);
  // Dans l'object List ajoute l'objet recette
  list.add(recipe);
}

// Par default le filtre est sur l'ensemble des recettes du tableau
list.filtered = list.all;

// Rend disponible les recettes
list.displayRecipes();
// Récupére les ingrédients de chaque recettes
list.collectIngredients();
// Rend disponible les ingrédients de chaque recettes situee dans l'object "list.ingredients"
list.displayIngredients(list.ingredients);
// Vérification du filtre ingredients
list.listenForFilteringIng();
// Récupére les appareils de chaque recettes
list.collectAppliances();
// Rend disponible les appareil de chaque recettes situee dans l'object "list.appliances"
list.displayAppliances(list.appliances);
// Vérification du filtre appareil
list.listenForFilteringAppl();
// Récupére les ustensils de chaque recettes
list.collectUstensils();
// Rend disponible les appareil de chaque recettes situee dans l'object "list.ustensils"
list.displayUstensils(list.ustensils);
// Vérification du filtre ustensiles
list.listenForFilteringUst();
// Vérification du filtre Search-every(loupe)
list.listenForFilteringAll();
// Vérification du filtre input ingredients
list.listenForFilteringInputIngr();
// Vérification du filtre input appareils
list.listenForFilteringInputApp();
// Vérification du filtre input ustensils
list.listenForFilteringInputUst();
