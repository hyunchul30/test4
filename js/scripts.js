function OrderPizza() {
  this.OrderPizza=calculateTotal();
  this.pizza= pizza;
  this.cheese= cheese;
  this.meats= meats;
  this.calculateTotal= calculateTotal();
};

var calculateTotal= new Array();
calculateTotal["Small"]=1;
calculateTotal["Medium"]=2 ;
calculateTotal["Large"]= 3;

calculateTotal["Cheddar"]= 4;
calculateTotal["ExtraCheese"]=5 ;
calculateTotal["Feta"]= 6;

calculateTotal["Sausage"]= 7;
calculateTotal["Bacon"]= 8;
calculateTotal["Beef"]= 9;
OrderPizza.prototype.calculateTotal= function() {
alert("total:"+ val)};
  cosole.log("calculateTotal()");
if(this.pizza == "Small" && this.cheese == "Cheddar" && this.meats == "Bacon") {

  return this.calculateTotal();
}

}


$(document).ready(function(){
  $("#OrderPizza").click(function(){
$("#SZ")
  });
});
