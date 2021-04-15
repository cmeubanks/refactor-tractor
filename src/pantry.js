const recipeData = require('../src/data/recipes.js');

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  viewAllIngredients() {
    return this.contents.default.map(ingredient => ingredient.name);
  }

  findIngredients(recipe) {
    let currRecipe = recipeData.default.find(currentRecipe => currentRecipe.name === recipe ? currentRecipe : "No recipe found");
    return currRecipe.ingredients
  }

  checkStillNeeded() {
    // let currRecipe = this.findRecipe(recipe);
    // console.log(currRecipe.ingredients);
  }
  // If we can't cook a recipe, what do we still need?


  cookMeal(checkIngredients) {

  }
  // If we can cook a recipe, remove the item from the pantry


}

module.exports = Pantry;
// export default Pantry;
