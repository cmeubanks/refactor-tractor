const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const ingredientsData = require('../src/data/ingredients.js');
const recipeData = require('../src/data/recipes.js');

describe('Pantry', function() {

  it.only('should be an instance of Pantry class', function() {
    let pantry = new Pantry(ingredientsData);

    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it.only('should be able to show all ingredients', function() {
    let pantry = new Pantry(ingredientsData);
    let ingredients = pantry.viewAllIngredients();

    expect(ingredients[0]).deep.equal('wheat flour');
  });

  it.only('should be able to check ingredients in pantry', function() {
    let pantry = new Pantry(ingredientsData);

    expect(pantry.findRecipe('Loaded Chocolate Chip Pudding Cookie Cups')).to.deep.equal({
      name: 'Loaded Chocolate Chip Pudding Cookie Cups',
      id: 595736,
      image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      "ingredients": [
        {"id": 20081, "name": "all purpose flour", "quantity": { "amount": 1.5, "unit": "c"}},
        {"id": 18372, "name": "baking soda", "quantity": {"amount": 0.5, "unit": "tsp"}},
        {"id": 1123, "name": "egg", "quantity": {"amount": 1, "unit": "large"}},
        {"id": 19335, "name": "granulated sugar", "quantity": {"amount": 0.5, "unit": "c"}},
        {"id": 19206, "name": "instant vanilla pudding mix", "quantity": {"amount": 3, "unit": "Tbsp"}},
        {"id": 19334, "name": "light brown sugar", "quantity": {"amount": 0.5, "unit": "c"}},
        {"id": 2047, "name": "salt", "quantity": {"amount": 0.5, "unit": "tsp"}},
        {"id": 1012047, "name": "sea salt", "quantity": {"amount": 24,"unit": "servings"}},
        {"id": 10019903, "name": "semisweet chocolate chips", "quantity": {"amount": 2, "unit": "c"}},
        {"id": 1145, "name": "unsalted butter", "quantity": {"amount": 0.5, "unit": "c"}},
        {"id": 2050, "name": "vanilla extract", "quantity": {"amount": 0.5, "unit": "tsp"}
      }],
      instructions: [
        {number: 1, instruction: 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.'},
        {number: 2,instruction: 'Add egg and vanilla and mix until combined.'},
        {number: 3, instruction: 'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.'},
        {number: 4, instruction: 'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.'},
        {number: 5, instruction: 'Bake for 9 to 10 minutes, or until you see the edges start to brown.'},
        {number: 6, instruction: 'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.'}
      ],
      tags: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"]
    })
  });



})
