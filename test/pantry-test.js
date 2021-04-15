const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');

describe('Pantry', function() {
let ingredientsData;
let recipeData;
let pantry;

  beforeEach(() => {
    ingredientsData = [
    {
      "id": 20081,
      "name": "all purpose flour",
      "amount": 1.5,
    }, {
      "id": 18372,
      "name": "baking soda",
      "amount": 0.5,
    }, {
      "id": 1123,
      "name": "egg",
      "amount": 1,
    }, {
      "id": 19335,
      "name": "granulated sugar",
      "amount": 0.5,
    }, {
      "id": 19206,
      "name": "instant vanilla pudding mix",
      "amount": 3,
    }, {
      "id": 19334,
      "name": "light brown sugar",
      "amount": 0.5,
    }, {
      "id": 2047,
      "name": "salt",
      "amount": 0.5,
    }, {
      "id": 1012047,
      "name": "sea salt",
      "amount": 24,
    }, {
      "id": 10019903,
      "name": "semisweet chocolate chips",
      "amount": 2,
    }, {
      "id": 1145,
      "name": "unsalted butter",
      "amount": 0.5,
    }, {
      "id": 2050,
      "name": "vanilla extract",
      "amount": 0.5,
    }];

    recipeData = [
      {
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "name": "all purpose flour",
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "name": "baking soda",
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "name": "egg",
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          },
          {
            "name": "granulated sugar",
            "id": 19335,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "name": "instant vanilla pudding mix",
            "id": 19206,
            "quantity": {
              "amount": 3,
              "unit": "Tbsp"
            }
          },
          {
            "name": "light brown sugar",
            "id": 19334,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "name": "salt",
            "id": 2047,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "name": "sea salt",
            "id": 1012047,
            "quantity": {
              "amount": 24,
              "unit": "servings"
            }
          },
          {
            "name": "semisweet chocolate chips",
            "id": 10019903,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "name": "unsalted butter",
            "id": 1145,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "name": "vanilla extract",
            "id": 2050,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          }
        ]
      }

    pantry = new Pantry(ingredientsData);
  });

  it.only('should be an instance of Pantry class', function() {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it.only('should be able to show all ingredients', function() {
    expect(pantry.viewAllIngredients()).deep.equal(["all purpose flour", "baking soda"]);
  });


})
