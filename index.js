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
 var toAdd = {};
 toAdd[item] = price;

 setCart([...cart, toAdd]);

 console.log(`${item} has been added to your cart.`)

 return cart;

}

function viewCart() {
  // write your code here
  if (getCart().length == 0){
    console.log("Your shopping cart is empty.");
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
