var pizzaSizes = {};
pizzaSizes["Small"] = 7;
pizzaSizes["Medium"] = 9;
pizzaSizes["Large"] = 14;
pizzaSizes["Extra Large"] = 17;
pizzaSizes["Giant"] = 23;

var pizzaToppings= ["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms", "Some Humor"];

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

var appendSizeButtons = function() {
  // var keys = Object.keys(pizzaSizes);
  var append = "";
  for (key in pizzaSizes) {
    append += '<label class="sizes"><input type="radio" name="size" value="' + key + '"> ' + key + ' </input></label><br>';
  }
  return append;
}

var appendToppingsBoxes = function() {
  var append = "";
  pizzaToppings.forEach(function(topping) {
    append += '<label class="toppings"><input type="checkbox" name="topping" value="'+ topping +'"> '+ topping + ' </label><br>';
  });
  return append;
}


$(document).ready(function() {
  $("p").append(appendSizeButtons());
  $("h2").append(appendToppingsBoxes());
  $(":radio").wrap("<span style='background-color:red'>");
  $(":checkbox").wrap("<span style='background-color:blue'>");
});
//   <form>
//   <input type="radio" name="sex" value="male" checked> Male
//   <br>
//   <input type="radio" name="sex" value="female"> Female
// </form>
// }
