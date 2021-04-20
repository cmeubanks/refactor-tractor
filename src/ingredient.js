class Ingredient {
  constructor(ingredient, recipeIngredientData) {
    this.id = ingredient.id,
    this.name = ingredient.name,
    this.estimatedCostInCents = ingredient.estimatedCostInCents,
    this.quantity = recipeIngredientData.quantity
  }
}

export default Ingredient;
