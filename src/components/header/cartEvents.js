// src/utils/cartEvents.js
const cartEvent = new Event('updateCartCount');

export const updateCartCount = () => {
  window.dispatchEvent(cartEvent);
};

export const onUpdateCartCount = (callback) => {
  window.addEventListener('updateCartCount', callback);
};

export const offUpdateCartCount = (callback) => {
  window.removeEventListener('updateCartCount', callback);
};