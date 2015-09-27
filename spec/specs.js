describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza();
    expect(testPizza.availableSizes.length).to.equal(5);
    expect(testPizza.availableToppings).to.eql(["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"]);
    expect(testPizza.price).to.equal(0);
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
});
