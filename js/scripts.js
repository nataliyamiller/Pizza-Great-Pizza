var pizzaSizes = {};
pizzaSizes["Small"] = 7;
pizzaSizes["Medium"] = 9;
pizzaSizes["Large"] = 14;
pizzaSizes["Extra Large"] = 17;
pizzaSizes["Giant"] = 23;

var pizzaToppings= ["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"];

function Pizza(size) {
  this.availableSizes = pizzaSizes;
  this.availableToppings = pizzaToppings;
  this.chosenSize = size;
  this.chosenToppings = [];
}

Pizza.prototype.addToppings = function(chosenTopping) {
  return this.chosenToppings.push(chosenTopping);
}

Pizza.prototype.priceForToppings = function() {
  return this.toppingsPrice = this.chosenToppings.length * 0.5;
}

Pizza.prototype.priceForSize = function(size) {
  return _.propertyOf(pizzaSizes)(size);
}

Pizza.prototype.totalPrice = function() {
  var result = 0
   result += this.priceForSize(this.chosenSize) + this.priceForToppings();
   return result;
}
