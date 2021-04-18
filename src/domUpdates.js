let domUpdates = {

  populateCards(recipes, user) {
    let cardArea = document.querySelector('.all-cards');

    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
          <header id='${recipe.id}' class='card-header'>
            <label for='add-button' class='hidden'>Click to add recipe</label>
            <button id='${recipe.id}' aria-label='add-button' class='add-recipe-button card-button'>
              <img id='${recipe.id} favorite' class='add add-recipe-button'
              src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
              recipes to cook'>
            </button>
            <label for='favorite-button' class='hidden'>Click to favorite recipe
            </label>
            <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
          </header>
            <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
            <img id='${recipe.id}' tabindex='0' class='card-picture'
            src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
      </div>`)
    })
    this.getFavorites(user);
  },

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
    user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },

  getFavorites(user) {
    if (user.favoriteRecipes.length) {
      user.favoriteRecipes.forEach(recipe => {
        document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
      })
    } else return
  },

  showRecipeNeeds(recipe,recipeCost) {
    let cardArea = document.querySelector('.all-cards');

    cardArea.classList.add('all');
    cardArea.innerHTML = `<h3>${recipe.name}</h3>
    <p class='all-recipe-info'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${recipeCost}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    recipe.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
      ${instruction.instruction}</li>
      `)
    })
  },

  displayPantryView(user, pantry) {
    let pantryButton = document.querySelector('.view-pantry');
    let cardArea = document.querySelector('.all-cards');

    cardArea.innerHTML = '';

    cardArea.innerHTML += ('beforebegin',
      `<div id='recipesUserCanCook' class='card can-cook pantry-box'>
      <span id='canCookTitle' class='recipe-name'>"RECIPES YOU CAN COOK NOW"</span>
      <ul class="can-cook-list"></ul>
      </div>
      <div id='recipesThatNeedIng' class='card cant-cook pantry-box'>
      <span id='cantCookTitle' class='recipe-name'>"RECIPES YOU NEED TO SHOP FOR"</span>
      <ul class="cant-cook-list"></ul>
      </div>
      <div id='groceryList' class='card grocery-list-box pantry-box'>
      <span id='groceryListTitle' class='recipe-name'>"GROCERY LIST"</span>
      <ul class="grocery-list"></ul>
      </div>`)

    pantry.contents.forEach(ingredient => {
      cardArea.innerHTML += `<div id='${ingredient.name}' class='card'>
      <label for='add-ing-button' class='hidden'>Click to add ingredient to grocery list</label>
      <button id='addIngButton ${ingredient.name}' aria-label='add-ingredient-button' class='add-ing-button card-button'>
      <img id='${ingredient.name}' class='add' src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add ingredient to grocery list'></button>
      <span id='${ingredient.name}' class='ingredient-name'>${ingredient.name}</span>
      </div>`
    })
  },

  displayGroceryList(pantry) {
    let groceryList = document.querySelector('.grocery-list');

    if (user.favoriteRecipes.length) {
      pantry.groceryList.forEach(ingredient => {
        groceryList.insertAdjacentHTML('beforebegin', `<li>
        ${ingredient.name}</li>
        `)
      })
    }
  },

  //
  //
  // } else {
  //   return;
  // }
  // addRecipesToPantryView(user, pantry) {
  //   let canCookBox = document.querySelector('.can-cook');
  //   let canCookList = document.querySelector('.can-cook-list');
  //   let canNotCookBox = document.querySelector('.cant-cook');
  //   let cantCookList = document.querySelector('.cant-cook-list');
  //
  //    pantry.canWeCook(user.recipesToCook);

  //   user.recipesToCook.forEach(rec => {
  //     if(!this.hasIngredients) {
  //         pantry.showStillNeeded(rec);
  //         cantCookList.insertAdjacentHTML('afterbegin', `<li>${rec.name}</li>`);
  //     }
  //     } else {
  //         pantry.cookRecipe(rec);
  //         canCookList.insertAdjacentHTML('afterbegin', `<li>${rec.name}</li>`);
  //     }
  //   })
  // }

};


export default domUpdates;
