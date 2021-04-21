let domUpdates = {

  populateCards(recipes, user) {
    let cardArea = document.querySelector('.all-cards');

    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }

    let tagArea = document.querySelector('#filterTagsAside')
    if(tagArea.classList.contains('hidden')) {
      tagArea.classList.remove('hidden')
    }

    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
          <header id='${recipe.id}' class='card-header'>
            <label for='add-button' class='hidden'>Click to add recipe</label>
            <button id='${recipe.id}' aria-label='add-button' class='add-recipe-button card-button'><img id='${recipe.id} favorite' class='add add-recipe-button'
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

  generateTags(tagsArray) {
    const tagButton = document.querySelector('#radioBtnArea');
    tagsArray.forEach(tag => {
      tagButton.insertAdjacentHTML('afterbegin', `<div><input type='checkbox' class="recipe-tag" id='${tag}'>
      <label for='${tag}'>${tag}</label></div>`)
      tagButton.insertAdjacentHTML('afterbegin',
      `<div><input type='checkbox' class='recipe-tag' id='${tag}'
      aria-checked='false' tabindex='0'>
      <label for='${tag}'>${tag}</label></div>`)
    })
  },

  // resetTagSelection() {
  //   const clearTags = document.querySelector('.clear-tags')
  //   clearTags.add
  // }

  showRecipeNeeds(recipe, cost) {
    let tagArea = document.querySelector('#filterTagsAside')
    tagArea.classList.add('hidden')
    let cardArea = document.querySelector('.all-cards');
    let recipeIngredients = recipe.getRecipeInstructions()
    cardArea.classList.add('all');
    cardArea.innerHTML = `<h3>${recipe.recipe.name}</h3>
    <p class='all-recipe-info'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${cost}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </p>`;

    let ingredientsSpan = document.querySelector('.ingredients');

    let instructionsSpan =
     document.querySelector('.instructions');
    recipeIngredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.quantity.name}</li></ul>
      `)
    })
    recipe.recipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li>
      ${instruction.instruction}</li>
      `)
    })
  },

  displayPantryView(ingredientTotal) {
    let pantryButton = document.querySelector('.view-pantry');
    let cardArea = document.querySelector('.all-cards');

    cardArea.innerHTML = '';

    cardArea.innerHTML += ('beforebegin',
      `<div id='recipesUserCanCook' class='card can-cook pantry-box'>
        <label for="canCookList" id='canCookTitle' class='recipe-name'>RECIPES YOU CAN COOK NOW</label>
        <ul id='canCookList' class="can-cook-list"></ul>
      </div>
      <div id='recipesThatNeedIng' class='card cant-cook pantry-box'>
        <label for="canNotCookList" id='cantCookTitle' class='recipe-name'>RECIPES YOU NEED TO SHOP FOR</label>
        <ul id='canNotCookList' class="cant-cook-list"></ul>
      </div>
      <div id='groceryListBox' class='card grocery-list-box pantry-box'>
        <label for="groceryList" id='groceryListTitle' class='recipe-name'>GROCERY LIST</label>
        <ul id='groceryList' class="grocery-list"></ul>
      </div>`)

    ingredientTotal.forEach(ingredient => {
      cardArea.innerHTML += `<div id='${ingredient.id}' class='ingredient-card'>
      <label for='add-ing-button' class='hidden'>Click to add ingredient to grocery list</label>
      <button id='${ingredient.id}' aria-label='add-ingredient-button' class='add-ing-button card-button'>
      </button>
      <span id='${ingredient.name}' class='ingredient-name'>${ingredient.name}</span>
      </div>`
    })
  },

  displayGroceryList(pantry) {
    let groceryList = document.querySelector('.grocery-list');
    groceryList.innerText = " ";

    if (pantry.groceryList.length) {
      pantry.groceryList.forEach(ingredient => {
        groceryList.innerHTML += `<li>${ingredient.name}</li>`
      })
    }
  },

  displayRecipesToCook(user) {
    let canCookList = document.querySelector('.can-cook-list');
    let canNotCookList = document.querySelector('.cant-cook-list');

    if (user.recipesToCook.length) {
      user.recipesToCook.forEach(recipe => {
        canCookList.insertAdjacentHTML('beforebegin',
        `<li>${recipe.name}</li><button class="cook-me-btn" class="cookMeBtn">Cook Me</button>
        `)
      })
    }
  }

};


export default domUpdates;
