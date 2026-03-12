import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import '../data/cart-oop.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();

/*
document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/