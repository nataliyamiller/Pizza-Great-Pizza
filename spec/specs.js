describe('Pizza', function() {
  var testPizza = new Pizza();
  it("creates a new pizza with the given specifications", function() {
    expect(testPizza.sizes.length).to.equal(5);
    expect(testPizza.toppings).to.eql(["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"]);
    expect(testPizza.price).to.equal(0);
  });

  it("finds an index of a given pizza size in the sizes array", function() {
    expect(testPizza.getSizeIndex("Medium")).to.equal(1);
  });

  it("finds an index of a given pizza topping in the toppings array", function() {
    expect(testPizza.getToppingIndex("Salami")).to.equal(1);
  });
});
