var pizzaSizes = ["Small", "Medium", "Large", "Extra Large", "Giant"];
var pizzaToppings= ["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"];

function Pizza() {
  this.availableSizes = pizzaSizes;
  this.availableToppings = pizzaToppings;
  this.chosenToppings = [];
  this.price = 0;
}

Pizza.prototype.addToppings = function(chosenTopping) {
  return this.chosenToppings.push(chosenTopping);
}

Pizza.prototype.priceForToppings = function() {
  return this.toppingsPrice = this.chosenToppings.length * 0.5;
}
