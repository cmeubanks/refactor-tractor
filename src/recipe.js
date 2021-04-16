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
