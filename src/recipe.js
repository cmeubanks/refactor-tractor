class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id; //in use
    this.ingredients = recipe.ingredients; // in use
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData; // in use
  }

  getCookingInstructions(type) {
    let recipe = new Cookbook(recipeData);
    const steps = cooking.recipes.find(recipe => recipe.id === this.id)[type]
    return steps
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
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
