var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getItemName(idx){
  return Object.keys(getCart()[idx])[0];
}

function getItemPrice(idx){
  return getCart()[idx][getItemName(idx)];
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
      msg += `${getItemName(i)} at $${getItemPrice(i)}, `;
    }
  }

//  console.log(`${msg.slice(0,-2)} and ${getItemName(getCart().length - 1)} at`)
return msg.slice(0,2);
//return `${msg} and ${getItemName(getCart().length - 1)} at $${getItemPrice(getCart().length - 1)}.`;
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
