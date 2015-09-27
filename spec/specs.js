describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Medium");
    var availableSizesObject = testPizza.availableSizes;
    expect(Object.keys(availableSizesObject)).to.eql(["Small", "Medium", "Large", "Extra Large", "Giant"]);
    expect(testPizza.availableToppings).to.eql(["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"]);
  });

  it("adds customer's chozen toppings to the array", function() {
    var testPizza = new Pizza();
    testPizza.addToppings("Double Cheese");
    expect(testPizza.chosenToppings).to.eql(["Double Cheese"])
  });

  it("calculates total price for the chosen toppings", function() {
    var testPizza = new Pizza();
    testPizza.addToppings("Double Cheese");
    testPizza.addToppings("Salami");
    expect(testPizza.priceForToppings()).to.equal(1);
  });

  it("returns the price for the given pizza size", function() {
    var testPizza = new Pizza();
    expect(testPizza.priceForSize("Medium")).to.equal(9);
  });

  it("returns total price for pizza with selected toppings and size", function() {
    var testPizza = new Pizza("Large");
    testPizza.addToppings("Double Cheese");
    testPizza.addToppings("Salami");
    expect(testPizza.totalPrice()).to.equal(15);
  });
});
