var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * (100) + 1);

 var toAdd = {[item]: [price]};

 setCart([toAdd, ...cart]);

 console.log(`${item} has been added to your cart.`)

 return cart;

}



function viewCart() {
  // write your code here
  if (getCart().length == 0_ return "Your shopping cart is empty.";

  else{
    var msg = "In your cart, you have ");

    for(var i in cart){
      msg += ` ${cart[i].keys[0]} at ${cart[i]}, `;
    }

    return `${msg.slice(0,-2)}.`;
  }


}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
