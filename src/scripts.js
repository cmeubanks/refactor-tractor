import './css/base.scss';
import './css/styles.scss';

import {getData} from './api';
import domUpdates from './domUpdates';
import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

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
let cookList = document.querySelector('.can-cook-list')
// let groceryList = document.querySelector('.grocery-list');

window.addEventListener('load', onStartup)

homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', runFavorites);
cardArea.addEventListener('click', cardButtonConditionals);
searchButton.addEventListener('click', viewSearchMatches);
pantryButton.addEventListener('click', showPantryView);
tagsContainer.addEventListener('click', filterByTags);
// cookList.addEventListener('click', updateUserPantry);

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

  recipeTags.forEach(tag =>{
    if(tag.checked && !selectedTags.includes(tag.id)){
      selectedTags.push(tag.id)
    }
  })
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

function runFavorites() {
  let length = user.favoriteRecipes.length
  domUpdates.viewFavorites(cookbook.recipes, user.favoriteRecipes, length)
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
      if(pantry.canWeCook(recipe)) {
        console.log("we can cook!")
        pantry.cookRecipe(recipe)
      } else {
        console.log("we can NOT cook!")
        pantry.showStillNeeded(recipe)
      }
    }
  });
}

function updateUserPantry(event) {
  // cookMeBtn = document.querySelectorAll('.cook-me-btn')
  // if (event.target.classList.contains('.cook-me-btn'){
  //   console.log(event.target.id)
  // }
  // recipe.ingredients.forEach(ingredient => {
  //   postData(user.id, ingredient.id, ingredient.quantity.amount)
  // })
  // .then()
  //.then refetch data so that pantry recipes update
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
