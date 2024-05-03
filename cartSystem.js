//understanding the cartSytem in javascript(just a simple one)
let cart = [];

function addItemToCart(itemName, price, quantity = 1) 
{
  cart.push({ itemName, price, quantity });
}

function removeItemFromCart(itemName)
 {
  cart = cart.filter(item => item.itemName !== itemName);
}

function getTotalPrice() {
  return cart.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
}

function displayCart() {
  console.log("Shopping Cart:");
  cart.forEach(item => {
    console.log(`${item.itemName} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`);
  });
  console.log(`Total Price: $${getTotalPrice().toFixed(2)}`);
}

addItemToCart("Apple", 0.5, 2);
addItemToCart("Banana", 0.3);
addItemToCart("Orange", 0.4, 3);

displayCart();

removeItemFromCart("Banana");

displayCart();

