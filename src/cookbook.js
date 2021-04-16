class Cookbook {
  constructor(data) {
    this.recipes = data;
  }

  showAllRecipes() {
    return this.recipes;
  }

  filterByTags() {
    
  }

  findRecipe(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        return (ingredient.name.includes(searchText)) ||
        (recipe.name.includes(searchText))
      });
    })
  }
}

export default Cookbook;
