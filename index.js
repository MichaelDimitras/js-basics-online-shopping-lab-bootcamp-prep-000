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

  else if (getCart.length == 1) {
    console.log(`In your cart, you have ${cart[0].keys()[0]} at $${cart[0]}.`)
  }

  else{

    var msg = "In your cart, you have ";

    for(var i = 0; i < cart.legnth - 1; i++){
      msg += ` ${cart[i].keys()[0]} at $${cart[i]}, `;
    }

    console.log(`${msg} and ${cart[cart.length - 1].keys()[0]} at $${cart[cart.length - 1]}`);
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
