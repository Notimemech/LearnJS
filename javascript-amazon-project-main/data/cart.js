export const cart = [];

export function addToCart(id) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (id === cartItem.id) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      id: id,
      quantity: 1,
    });
  }
}
