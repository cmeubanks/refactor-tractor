const recipeData = require('../src/data/recipes.js');

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
    this.hasIngredients = false;
  }

  viewAllIngredients() {
    return this.contents.map(ingredient => ingredient.name);
  }

  findIngredients(recipe) {
    let currRecipe = recipeData.default.find(currentRecipe => currentRecipe.name === recipe ? currentRecipe : "No recipe found");
    return currRecipe.ingredients;
  }
  // Input: recipe - "name"
  // Output: array of objects - ingredients/amounts needed to cook

  canWeCook(recipe) {
    let currRecipe = this.findIngredients(recipe).map(ing => ing.name);
    let pantryIng = this.viewAllIngredients();

    let checkIt = currRecipe.filter(ing => pantryIng.includes(ing) ? ing : null);

    return (checkIt.length === currRecipe.length) ? this.hasIngredients = true : his.hasIngredients = false;
  }

  findMissingIng(recipe) {
    // if canWeCook is false

    // console.log(pantryIng);
  }
  // Input:
  // Output: Array of objects needed with name (and maybe amount)
  //

  // cookMeal(recipe) {
  // if canWeCook is true
  //
  // }
  // If we can cook a recipe, remove the item from the pantry

  // if pantry === recipe
  // splice any value (from pantry) who's index != -1 or just any
  // matching value



}

module.exports = Pantry;
// export default Pantry;
