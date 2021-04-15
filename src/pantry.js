class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  viewAllIngredients() {
    return this.contents.default.map(ingredient => ingredient.name);
  }

  checkIngredients(recipe) {
    // Return a boolean for single recipe
    // Return an array of strings with recipes that
    // a user can cook
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
