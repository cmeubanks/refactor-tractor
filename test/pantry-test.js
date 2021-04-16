const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const ingredientsData = require('../src/data/ingredients.js');
const recipeData = require('../src/data/recipes.js');

describe('Pantry', function() {

      it('should be an instance of Pantry class', function() {
        let pantry = new Pantry(ingredientsData);

        expect(pantry).to.be.an.instanceOf(Pantry);
      });

      it('should be able to show all ingredients', function() {
        let ingredientsData = [
          {"id": 20081, "name": "all purpose flour", "quantity": {"amount": 1.5, "unit": "c"}},
          {"id": 18372, "name": "baking soda", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1123, "name": "egg", "quantity": {"amount": 1, "unit": "large"}},
          {"id": 19335, "name": "granulated sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 19206, "name": "instant vanilla pudding mix", "quantity": {"amount": 3, "unit": "Tbsp"}},
          {"id": 19334, "name": "light brown sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 2047, "name": "salt", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1012047, "name": "sea salt", "quantity": {"amount": 24, "unit": "servings"}},
          {"id": 10019903, "name": "semisweet chocolate chips", "quantity": {"amount": 2, "unit": "c"}},
          {"id": 1145, "name": "unsalted butter", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 2050, "name": "vanilla extract", "quantity": {"amount": 0.5, "unit": "tsp"}}
        ];
        let pantry = new Pantry(ingredientsData);
        let ingredients = pantry.viewAllIngredients();

        expect(ingredients[0]).deep.equal('all purpose flour');
      });

      it('should be able to find a recipe', function() {
        let pantry = new Pantry(ingredientsData);

        expect(pantry.findIngredients('Loaded Chocolate Chip Pudding Cookie Cups')).to.deep.equal([
            {name: 'all purpose flour', id: 20081, quantity: {amount: 1.5, unit: 'c'}},
            {name: 'baking soda', id: 18372, quantity: {amount: 0.5, unit: 'tsp'}},
            {name: 'egg', id: 1123, quantity: {amount: 1, unit: 'large'}},
            {name: 'granulated sugar', id: 19335, quantity: {amount: 0.5, unit: 'c'}},
            {name: 'instant vanilla pudding mix', id: 19206, quantity: {amount: 3, unit: 'Tbsp'}},
            {name: 'light brown sugar', id: 19334, quantity: {amount: 0.5, unit: 'c'}},
            {name: 'salt', id: 2047, quantity: {amount: 0.5, unit: 'tsp'}},
            {name: 'sea salt', id: 1012047, quantity: {amount: 24, unit: 'servings'}},
            {name: 'semisweet chocolate chips', id: 10019903, quantity: {amount: 2, unit: 'c'}},
            {name: 'unsalted butter', id: 1145, quantity: {amount: 0.5, unit: 'c'}},
            {name: 'vanilla extract', id: 2050, quantity: {amount: 0.5, unit: 'tsp'}}
          ]);
      });

      it('should be able to tell if we have all the ingredients we need for a recipe', function() {
          let ingredientsData = [
            {"id": 20081, "name": "all purpose flour", "quantity": {"amount": 1.5, "unit": "c"}},
            {"id": 18372, "name": "baking soda", "quantity": {"amount": 0.5, "unit": "tsp"}},
            {"id": 1123, "name": "egg", "quantity": {"amount": 1, "unit": "large"}},
            {"id": 19335, "name": "granulated sugar", "quantity": {"amount": 0.5, "unit": "c"}},
            {"id": 19206, "name": "instant vanilla pudding mix", "quantity": {"amount": 3, "unit": "Tbsp"}},
            {"id": 19334, "name": "light brown sugar", "quantity": {"amount": 0.5, "unit": "c"}},
            {"id": 2047, "name": "salt", "quantity": {"amount": 0.5, "unit": "tsp"}},
            {"id": 1012047, "name": "sea salt", "quantity": {"amount": 24, "unit": "servings"}},
            {"id": 10019903, "name": "semisweet chocolate chips", "quantity": {"amount": 2, "unit": "c"}},
            {"id": 1145, "name": "unsalted butter", "quantity": {"amount": 0.5, "unit": "c"}},
            {"id": 2050, "name": "vanilla extract", "quantity": {"amount": 0.5, "unit": "tsp"}}
          ];
          let pantry = new Pantry(ingredientsData);

          expect(pantry.canWeCook('Loaded Chocolate Chip Pudding Cookie Cups')).to.equal(this.hasIngredients = true);
      });

      it('should be able to remove all ingredients for recipe from pantry if we can cook a meal', function () {
        let ingredientsData = [
          {"id": 20081, "name": "all purpose flour", "quantity": {"amount": 1.5, "unit": "c"}},
          {"id": 18372, "name": "baking soda", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1123, "name": "egg", "quantity": {"amount": 1, "unit": "large"}},
          {"id": 19335, "name": "granulated sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 19206, "name": "instant vanilla pudding mix", "quantity": {"amount": 3, "unit": "Tbsp"}},
          {"id": 19334, "name": "light brown sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 2047, "name": "salt", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1012047, "name": "sea salt", "quantity": {"amount": 24, "unit": "servings"}},
          {"id": 10019903, "name": "semisweet chocolate chips", "quantity": {"amount": 2, "unit": "c"}},
          {"id": 1145, "name": "unsalted butter", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 2050, "name": "vanilla extract", "quantity": {"amount": 0.5, "unit": "tsp"}}
        ];
        let pantry = new Pantry(ingredientsData);

        expect(pantry.cookRecipe('Loaded Chocolate Chip Pudding Cookie Cups')).to.deep.equal([]);
      })


      it('should be able to tell what ingredients are missing for a recipe', function() {
        let ingredientsData = [
          {"id": 20081, "name": "all purpose flour", "quantity": {"amount": 1.5, "unit": "c"}},
          {"id": 18372, "name": "baking soda", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1123, "name": "egg", "quantity": {"amount": 1, "unit": "large"}},
          {"id": 19335, "name": "granulated sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 19206, "name": "instant vanilla pudding mix", "quantity": {"amount": 3, "unit": "Tbsp"}},
          {"id": 19334, "name": "light brown sugar", "quantity": {"amount": 0.5, "unit": "c"}},
          {"id": 2047, "name": "salt", "quantity": {"amount": 0.5, "unit": "tsp"}},
          {"id": 1012047, "name": "sea salt", "quantity": {"amount": 24, "unit": "servings"}},
          {"id": 10019903, "name": "semisweet chocolate chips", "quantity": {"amount": 2, "unit": "c"}},
          {"id": 1145, "name": "unsalted butter", "quantity": {"amount": 0.5, "unit": "c"}},
        ];
          let pantry = new Pantry(ingredientsData);

          expect(pantry.showStillNeeded('Loaded Chocolate Chip Pudding Cookie Cups')).deep.equal(
            ["vanilla extract"]);
      });

});
