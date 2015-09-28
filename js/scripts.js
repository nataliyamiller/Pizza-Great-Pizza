var pizzaSizes = {};
pizzaSizes["Small"] = 7;
pizzaSizes["Medium"] = 9;
pizzaSizes["Large"] = 14;
pizzaSizes["Extra Large"] = 17;
pizzaSizes["Giant"] = 23;

var pizzaToppings = ["Double Cheese", "Salami", "Smoked Bacon", "Pineapple", "Green Peppers", "Mashrooms", "Some Humor"];

function Pizza() {
  this.availableSizes = pizzaSizes;
  this.availableToppings = pizzaToppings;
  this.chosenSize = "";
  this.chosenToppings = [];
}

Pizza.prototype.addToppings = function(chosenTopping) {
  return this.chosenToppings.push(chosenTopping);
}

Pizza.prototype.removeToppings = function(chosenTopping) {
  var index = this.chosenToppings.indexOf(chosenTopping);
  return this.chosenToppings.splice(index, 1);
}

Pizza.prototype.priceForToppings = function() {
  return this.toppingsPrice = this.chosenToppings.length * 0.5;
}

Pizza.prototype.chooseSize = function(size) {
  return this.chosenSize = size;
}

Pizza.prototype.priceForSize = function(size) {
  return _.propertyOf(this.availableSizes)(size);
}

Pizza.prototype.totalPrice = function() {
   return this.priceForSize(this.chosenSize) + this.priceForToppings();
}

function CustomerOrder(pizza) {
  this.pizza = pizza;
  this.quantity = 0;
}

CustomerOrder.prototype.totalOrder = function() {
  return this.pizza.totalPrice() * this.quantity;
}

Pizza.prototype.appendSizeButtons = function() {
  var append = "";
  for (key in this.availableSizes) {
    append += '<label class="sizes"><input type="radio" name="size" value="' + key + '"> ' + key + ' </label><br>';
  }
  return append;
}

var appendToppingsBoxes = function() {
  var append = "";
  pizzaToppings.forEach(function(topping) {
    append += '<label class="toppings"><input type="checkbox" name="checkme" value="'+ topping +'"> '+ topping + ' </label><br>';
  });
  return append;
}

var appendQuantityBox = function() {
return  '<label for="quantity">Quantity  </label>' +
        '<input type="number" name="quantity" class="quantity" value="1" min="1" max="10">';
}


$(document).ready(function() {
  $(".result").hide();
  $("h2").append(appendToppingsBoxes());
  $("#quantity-box").append(appendQuantityBox());
  $(":checkbox").wrap("<span style='background-color:blue'>");
  var newPizza = new Pizza();
  $("p").append(newPizza.appendSizeButtons());
  var newOrder = new CustomerOrder(newPizza);

  $(":radio").change(function() {
    var size = $(this).val();
    newPizza.chooseSize(size);
    newPizza.priceForSize(size);
    $("#selected-size").text(size);
    $("#size-price").text("$" + newPizza.priceForSize(size));
  });


  $(".quantity").change(function() {
    newOrder.quantity = $("input[name=quantity]").val();
  });

  $(":checkbox").click(function() {
    var topping = $(this).val();
    if ($(this).is(':checked')) {
      if(newPizza.chosenToppings.indexOf(topping) < 0) {
        newPizza.addToppings(topping);
      }
    } else {
    newPizza.removeToppings(topping);
    }
    newPizza.chosenToppings;
    newPizza.priceForToppings();
  $("#selected-toppings").text(newPizza.chosenToppings);
  $("#toppings-price").text("$" + newPizza.priceForToppings());
  });

  $("#order").click(function() {

    $(".result").show();
    var price = newOrder.totalOrder();
  $("#total-price").text("$" + price);
});
});
