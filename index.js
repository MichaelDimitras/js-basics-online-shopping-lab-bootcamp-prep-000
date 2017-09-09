var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getItemName(idx){
  return Object.keys(getCart()[0])[0];
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

  else if (getCart().length == 1){
    console.log(`In your cart, you have ${getItemName(0)} at $${getCart()[0][getItemName(0)]}.`)
  }

  else {
    var msg = "In your cart, you have ";

    for(var i = 0; i < getCart().length - 1; i++){
      msg += `${getItemName(i)} at $${getCart()[i][getItemName(i)]}, `;
    }

    //console.log(`${msg}and ${getItemName(getCart.length - 1)} at $${getCart()[0][getItemName(getCart.length - 1)]}.`);
  }

  return `${msg}and ${getItemName(getCart().length - 1)} at $${getItemName[]}`;
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
