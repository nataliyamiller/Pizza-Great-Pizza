var pizzaSizes = ["Small", "Medium", "Large", "Extra Large", "Giant"];
var pizzaToppings= ["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms"];

function Pizza() {
  this.sizes = pizzaSizes;
  this.toppings = pizzaToppings;
  this.price = 0;
  this.quantity = 0;
}

Pizza.prototype.getSizeIndex = function(chosenSize) {
  var result;
  chosenSize.toLowerCase();
  for (var i = 0; i < this.sizes.length; i++) {
    if (this.sizes[i] === chosenSize) {
      result = i;
    }
  }
  return result;
}

Pizza.prototype.getToppingIndex = function(chosenTopping) {
  var result;
  chosenTopping.toLowerCase();
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === chosenTopping) {
      result = i;
    }
  }
  return result;
}
