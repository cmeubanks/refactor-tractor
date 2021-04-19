const recipeData = require('../src/data/recipes.js');

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
    this.groceryList = [];
    this.CanCookRecipes = [];
    this.CanNotCookRecipes = [];
  }

  viewAllIngredients() {
    console.log(this.contents)
    return this.contents.map(ingredient => ingredient.name);
  }

  findIngredients(recipe) {
    let currRecipe = recipeData.default.find(currentRecipe => currentRecipe.name === recipe ? currentRecipe : "No recipe found");
    return currRecipe.ingredients;
  }

  canWeCook(recipe) {
    let currRecipe = this.findIngredients(recipe).map(ing => ing.name);
    let pantryIng = this.viewAllIngredients();

    let checkIt = currRecipe.filter(ing => pantryIng.includes(ing) ? ing : null);
    return (checkIt.length === currRecipe.length) ? true : false;
  }

  // findWhatWeCanCook(recipeList) {
  //   recipeList.forEach(recipe => {
  //     if(this.canWeCook(recipe)) {
  //       this.CanCookRecipes.push(recipe);
  //       return;
  //     } else {
  //       this.CanNotCookRecipes.push(recipe);
  //       return;
  //     }
  //   })
  // }
  // WE MAY WANT TO ADD THIS FUNCTIONALITY IN THE SCRIPTS INSTEAD
  // IT'S NOT WORKING HERE AND I THINK IT MAY BE BETTER TO DIVVY OUT

  cookRecipe(recipe) {
    let currRecipe = this.findIngredients(recipe);

    currRecipe.forEach(ing => {
      let ingred = ing.name
      let i = this.contents.indexOf(ingred);
      this.contents.splice(i, 1);
    })
    return this.contents;
  }

  showStillNeeded(recipe) {
    let currRecipe = this.findIngredients(recipe).map(ing => ing.name);
    let pantryIng = this.viewAllIngredients();

    return currRecipe.filter(ingObj => {
        if(pantryIng.indexOf(ingObj) === -1) {
          return ingObj;
        }
    })
  }

  addIngToGroceryList(recipe) {
    if (!this.groceryList.includes(recipe)) {
      this.groceryList.push(recipe);
    }
  }

}

module.exports = Pantry;
// export default Pantry;
