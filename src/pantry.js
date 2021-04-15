const recipeData = require('../src/data/recipes.js');

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  viewAllIngredients() {
    return this.contents.default.map(ingredient => ingredient.name);
  }

  findRecipe(recipe) {
    return recipeData.default.find(currentRecipe => currentRecipe.name === recipe ? currentRecipe : "No recipe found");
  }

  checkStillNeeded() {

  }
  // If we can't cook a recipe, what do we still need?


  cookMeal(checkIngredients) {

  }
  // If we can cook a recipe, remove the item from the pantry


}

module.exports = Pantry;
// export default Pantry;
