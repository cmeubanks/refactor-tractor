class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  // METHODS:
  viewAllIngredients() {
    this.contents.map(ingredient => ingredient.name);
  }



  // return array of all this.contents

  // checkIngredients(recipe)
  //

  // checkStillNeeded(!checkIngredients)
  //

  // cookMeal(checkIngredients)
  //



}

export default Pantry;
