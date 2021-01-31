var bag=prompt("How many bag would you like ? (bag price: 20$)");
var Pen=prompt("How many pen would you like ? (Pen price: 1$)");
var Calculator=prompt("How many Calculator would you like ? (Calculator price: 10$)");

var price=0;
function get_price(bag,Pen,Calculator){
    price=bag*20+Pen*1+Calculator*10;
    return price;
}

price=get_price(bag,Pen,Calculator);

document.getElementById("price").innerText=" Total price is : "+price;


