let domUpdates = {

  populateCards(recipes, user) {
    let cardArea = document.querySelector('.all-cards');

    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }

    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
          <header id='${recipe.id}' class='card-header'>
            <label for='add-button' class='hidden'>Click to add recipe</label>
            <button id='${recipe.id}' aria-label='add-button' class='add-button card-button'>
              <img id='${recipe.id} favorite' class='add'
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


  displayPantryView(ingredients, pantry) {
    let pantryButton = document.querySelector('.view-pantry');
    let cardArea = document.querySelector('.all-cards');

    cardArea.innerHTML = '';
    pantryButton.innerHTML = 'Refresh Pantry'
    cardArea.innerHTML = '';
    pantry.contents.forEach(ingredient => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${ingredient.name}'
      class='card'>
      <header id='${ingredient.name}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${ingredient.name}' aria-label='add-button' class='add-button card-button'>
      <img id='${ingredient.name}' class='add'
      src='https://image.flaticon.com/icons/svg/32/32339.svg' alt='Add to
      recipes to cook'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${ingredient.name}' aria-label='favorite-button' class='favorite favorite-active card-button'>
      </button></header>
      <span id='${ingredient.name}' class='recipe-name'>${ingredient.name}</span>
      <img id='${ingredient.name}' tabindex='0' class='card-picture'
      src='${ingredient.name}' alt='Food from recipe'>
      </div>`)
    })
  }

  // displayGroceryList(pantry) {
  // Add to actual HTML then toggle hidden?
  // If no items: "You don't have anything on your grocery list"
  // Loop through to add
  // }

};


export default domUpdates;
