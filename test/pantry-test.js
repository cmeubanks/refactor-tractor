const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/pantry.js');
const ingredientsData = require('../src/data/ingredients.js');

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

})
