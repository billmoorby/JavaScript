export const cart = [];

export function addToCart(productId) {
  let matchingItem;

  // Check for duplicate items so we can increase quantity
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // 13c
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  // 13d
  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    // matchingItem.quantity += 1;
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId, 
      quantity
    });
  };
};