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

 var toAdd = {item, Math.floor(Math.random(1,100)}
 setCart(Object.assign(cart, toAdd);

 console.log(`${item} + " has been added to your cart."`)
 return cart;

}



function viewCart() {
  // write your code here
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
