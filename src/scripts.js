import './css/base.scss';
import './css/styles.scss';

// import recipeData from './data/recipes';
// import ingredientsData from './data/ingredients';
// import users from './data/users';

import {getData} from './api';
import domUpdates from './domUpdates';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import Ingredient from './ingredient';

let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
let searchButton = document.querySelector('.find')
let tagsContainer = document.querySelector('#filterTagsAside')

let user, pantry, cookbook;

let userArray;
let recipeArray;
let ingredientsArray;

let pantryButton = document.querySelector('.view-pantry');
let addRecipeButton = document.querySelector('.add-button');
let addIngButton = document.getElementById('add-ing-btn');
let ingCard = document.querySelector('.ing-card');
// let groceryList = document.querySelector('.grocery-list');

window.addEventListener('load', onStartup)

homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);
searchButton.addEventListener('click', viewSearchMatches);
pantryButton.addEventListener('click', showPantryView);
tagsContainer.addEventListener('click', filterByTags);
// addRecipeButton.addEventListener('click', );
// addIngButton.addEventListener('click', function() {
//   console.log('YAY!');
// })

function onStartup() {
  getData('users')
  .then(response => userArray = response)
  .then(() => {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = userArray.find(user => {
  return user.id === Number(userId)
  })
  user = new User(userId, newUser.name, newUser.pantry)
  pantry = new Pantry(user.pantry)
  domUpdates.greetUser(user);
  })
  getData('recipes')
  .then(response => recipeArray = response)
  .then(() => {
    cookbook = new Cookbook(recipeArray)
    domUpdates.populateCards(cookbook.showAllRecipes(), user);
    loadTags(cookbook.recipes)
  })
}

function loadTags(cookbookRecipes) {
  const tagsArray = cookbookRecipes.reduce((arr, recipe) => {
    recipe.tags.forEach(tag => {
      if(!arr.includes(tag)){
        arr.push(tag)
      }
    })
    return arr
  },[])
  domUpdates.generateTags(tagsArray)
}


function grabSelectedTags() {
  let selectedTags = []
  const recipeTags = document.querySelectorAll('.recipe-tag')
  if(event.target.classList.contains('clear-tags')){
    recipeTags.forEach(tag =>{
      tag.checked = false;
    })
    return domUpdates.populateCards(cookbook.showAllRecipes(), user)
  }
  if(event.target.id === "radioBtnArea"){
    return false
  }
  // const recipeTags = document.querySelectorAll('.recipe-tag')
  recipeTags.forEach(tag =>{
    if(tag.checked && !selectedTags.includes(tag.id)){
      selectedTags.push(tag.id)
    }
  })
  console.log(selectedTags)
  return selectedTags
}

function filterByTags() {
const selectedTags = grabSelectedTags()
if(event.target.classList.contains('clear-tags')){
  return false;
}
const searchResults = cookbook.recipes.filter(recipe => {
    return recipe.tags.some(tag => selectedTags.includes(tag));
  });
  domUpdates.populateCards(searchResults, user)
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    cardArea.classList.remove('all')
  }
  if (!user.favoriteRecipes.length) {
    favButton.innerHTML = 'You have no favorites!';
    domUpdates.populateCards(cookbook.recipes);
    return
  } else {
    favButton.innerHTML = 'Refresh Favorites'
    cardArea.innerHTML = '';
    user.favoriteRecipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}'
      class='card'>
      <header id='${recipe.id}' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}' aria-label='add-button' class='add-recipe-button card-button'>
      </button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite-active card-button'>
      </button></header>
      <span id='${recipe.id}' class='recipe-name'>${recipe.name}</span>
      <img id='${recipe.id}' tabindex='0' class='card-picture'
      src='${recipe.image}' alt='Food from recipe'>
      </div>`)
    })
  }
}

function favoriteCard(event) {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromFavorites(specificRecipe)
  }
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('card-picture')) {
    displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.innerHTML = 'View Favorites';
    pantryButton.innerHTML = 'View Pantry';
    tagsContainer.classList.remove('hidden');
    domUpdates.populateCards(cookbook.showAllRecipes(), user);
  } else if (event.target.classList.contains('add-recipe-button')) {
    addRecipeToCookList(event);
  } else if (event.target.classList.contains('add-ing-button')) {
    addToGroceryList(event);
    domUpdates.displayGroceryList(pantry);
  }
}

function displayDirections(event) {

  let newRecipeInfo = cookbook.recipes.find(recipe => {
    if (recipe.id === Number(event.target.id)) {
      return recipe;
    }
  })
  getData('ingredients')
  .then(result => ingredientsArray = result)
  .then(() => {
    let recipeObject = new Recipe(newRecipeInfo, ingredientsArray);
    let cost = recipeObject.calculateCost()
    let costInDollars = (cost / 100).toFixed(2)
    domUpdates.showRecipeNeeds(recipeObject, costInDollars)
  })
}

function viewSearchMatches() {
  let searchInput = document.querySelector('#search-input')
  debugger
  let recipesFound = cookbook.findRecipe(searchInput.value)
  domUpdates.populateCards(recipesFound, user);
  event.preventDefault()
}


// PANTRY FUNCTIONS
function showPantryView() {
  let pantryIngredients = pantry.viewAllIngredients();

  if (tagsContainer.classList.contains('filter-tags-aside')) {
    tagsContainer.classList.add('hidden');
  }

  if (cardArea.classList.contains('home')) {
    cardArea.classList.remove('all');
  }
  getData('ingredients')
  .then(result => ingredientsArray = result)
  .then(() => {
    let ingredientTotal = [];

    pantryIngredients.forEach(ing => {
      ingredientsArray.forEach(ingredient => {
        if(ing.ingredient === ingredient.id) {
          ingredientTotal.push(ingredient);
        }
      })
    })

    domUpdates.displayPantryView(ingredientTotal);
    domUpdates.displayRecipesToCook(user);
    domUpdates.displayGroceryList(pantry);
  })
}

function addRecipeToCookList(event) {
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      user.addToCookList(recipe);
    }
  });
}

function addToGroceryList(event) {
  let groceryList = document.querySelector('.grocery-list');

  getData('ingredients')
  .then(result => ingredientsArray = result)
  .then(() => {
    let specificIngredient = ingredientsArray.find(ingredient => {
        if (ingredient.id === Number(event.target.id)) {
          pantry.addIngToGroceryList(ingredient);
        }
    })
  })
  domUpdates.displayGroceryList(pantry);
}
