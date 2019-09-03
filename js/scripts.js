function OrderPizzal(pizza,cheese,meats){
  this.pizza= pizza;
  this.cheese= cheese;
  this.meats= meats;

}


OrderPizza.prototype= function() {
  // var calculateTotal= this.calculateTotal;
  var OrderPizza =0;
var total = this.size == 1; this.cheese == 4; this.meats == 9;
return this.total;
}

$(document).ready(function(){
  $("form#OrderPizza").submit(function(){
    event.preventDefault();

var total= new total();
total["SelectSize"]=0;
 total["Small"]=1;
  total["Medium"]=2 ;
   total["Large"]= 3;

 total= new total();
 total["SelectCheese"]=0;
  total["Cheddar"]= 4;
   total["ExtraCheese"]=5 ;
    total["Feta"]= 6;

 total= new total();
 total["SelectMeats"]=0;
  total["Sausage"]= 8;
   total["Bacon"]= 9;
    total["Beef"]= 10;

})
})

function Pizza (size,toppings1,toppings2,toppings3){
this.delivery = delivery
this.size = size;
this.toppings1 = toppings1;
this.toppings2 = toppings2;
this.toppings3 = toppings3;
}

Pizza.prototype.total = function(){
  var total =  + this.size + this.toppings1 + this.toppings2 + this.toppings3;
  return total;
}

Pizza.prototype.total2 =function(){
  var total2 =  "Your total is: $" + parseInt(this.size + this.toppings1 + this.toppings2 + this.toppings3);
  return total2;
}
//front end

$(document).ready(function(){
  $("form#YourOrder").submit(function(){
    event.preventDefault();


    var size = parseInt($("select#YourSize").val());
    var toppings1 = parseInt($("select#toppings1").val());
    var toppings2 = parseInt($("select#toppings2").val());
    var toppings3 = parseInt($("select#toppings3").val());


var userPizza = new Pizza (size, toppings1, toppings2, toppings3, total);
var userpizza2 = new Pizza (size, toppings1, toppings2, toppings3, total);
  var total =  userPizza.total();
  var total2 = userPizza.total2();


$("#output").text(total2);


  });
});
