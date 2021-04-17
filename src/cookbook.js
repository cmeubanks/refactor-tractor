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
        return (ingredient.name.toLowerCase().includes(searchText.toLowerCase()))||
        (recipe.name.toLowerCase().includes(searchText.toLowerCase()))
      });
    })
  }
}

export default Cookbook;
