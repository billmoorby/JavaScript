import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


// Async Await = Shortcut for Promises.
// Async makes a function return a promise. Wraps code in promise.
async function loadPage() {
  // Try and catch for error handling.
  // Try contains code that could cause an error.
  try {
    // throw() manually creates an error. Value gets saved in catch() parameter.
    // throw 'error1';

    // Await lets you write async code like normal code. Can only be used inside async function and on PROMISES. Waits for line to finish before moving to next line.
    await loadProductsFetch();

    // reject() paramater in Promise lets you create an error in the future.
    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve('value3');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please ty again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
};
loadPage();


// Promises = better way to handle asynchronous code. Similar to done(). Lets us wait for code to finish before moving to next step Helps avoid nesting and keeps code flat.

/*
// promise.all() lets us run multiple promises at the SAME TIME, nad wait for all of them to finish. Use an array of promises.
Promise.all([
  loadProductsFetch(), 

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  // resolve parameter = function that lets us control when we go to the next step.
  loadProducts(() => {
    resolve('value1');
  });

  // Does next step(then()) in SEPARATE THREAD independent of the other code.
}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/


// Multiple callbacks = a lot of nesting(code inside code).
/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/