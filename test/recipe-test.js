import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

// let recipe;

describe('Recipe', () => {
  let recipeData, ingredientsData, recipe;

  beforeEach(() => {

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
        ],
    "instructions": [
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      },
      {
        "number": 2,
        "instruction": "Add egg and vanilla and mix until combined."
      },
      ],
    "tags": [
      "antipasti",
      "starter",
      "snack"
    ]
  },
  {
    "name": "Maple Dijon Apple Cider Grilled Pork Chops",
    "id": 678353,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "name": "apple cider",
        "id": 1009016,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "name": "apples",
        "id": 9003,
        "quantity": {
          "amount": 2,
          "unit": ""
        }
      },
      {
        "name": "pork chops",
        "id": 10010062,
        "quantity": {
          "amount": 24,
          "unit": "ounce"
        }
      }
    ],
    "instructions": [
      {
        "number": 1,
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
      }
    ],
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  ];

  ingredientsData = [
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "baking sode",
      "estimatedCostInCents": 582
    },
    {
      "id": 1009016,
      "name": "apple cider",
      "estimatedCostInCents": 472
    },
  ]
    recipe = new Recipe(recipeData[0], ingredientsData);
  });

  it('Should hold its own ingredient data', () => {

    expect(recipe.ingredients).to.equal(recipeData[0].ingredients);
  })

  it('Should hold its own instruction data', () => {

    expect(recipe.instructions).to.equal(recipeData[0].instructions);
  })

  it('should be able to return the instructions of a specified recipe', () => {
    const recipeInstructions = recipe.getCookingInstructions("instructions");

    expect(recipeInstructions).to.deep.equal([
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      },
      {
        "number": 2,
        "instruction": "Add egg and vanilla and mix until combined."
      },
      ])
  })

  it('Should be able to calculate the cost of its ingredients', () => {

    expect(recipe.calculateCost()).to.equal(504);
  });


});
