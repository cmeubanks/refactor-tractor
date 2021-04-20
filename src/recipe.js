class Recipe {
  constructor(selectedRecipe, ingredientsData) {
    // this.name = recipe.name;
    // this.id = recipe.id; //in use
    // this.ingredients = recipe.ingredients; // in use
    // this.instructions = recipe.instructions;
    // this.tags = recipe.tags;
    this.recipe = selectedRecipe
    this.ingredientsData = ingredientsData; // in use
  }

  getCookingInstructions(type) {
    return this.recipe[type];
  }

  getRecipeInstructions() {
    let newObj = this.recipe.ingredients.reduce((obj, ingred) => {
      // ingred.forEach()
      obj["id"] = ingred.id;
      obj["quantity"] = {"amount": ingred.quantity.amount, "unit": ingred.quantity.unit, "name": this.ingredientsData.filter(ingredient => ingred.id === ingredient.id)[0].name}
      return obj
    },{});
    // newObj['instructions'] = this.recipe.instructions
    return newObj
  }

  // instantiateIngredients() {
  //   return this.recipe.ingredients.map(recipeIngredient => {
  //     const ingredientInfo = this.ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
  //     if (ingredientInfo) {
  //       return new Ingredient(ingredientInfo, recipeIngredient);
  //     }
  //   });
  // }

  calculateCost() {
    let costCounter = 0;
    this.recipe.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }

}

export default Recipe;
