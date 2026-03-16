// // Create the Data Structure
// const products = [{
//   image: 'images/products/athletic-cotton-socks-6-pairs.jpg', 

//   name: 'Black and Gray Athletic Cotton Socks - 6 Pairs', 

//   rating: {
//     stars: 4.5, 
//     count: 87
//   }, 

//   priceCents: 1090
// },
 
// {
//   image: 'images/products/intermediate-composite-basketball.jpg', 

//   name: 'Intermediate Size Basketball', 

//   rating: {
//     stars: 4, 
//     count: 127
//   }, 

//   priceCents: 2095
// }, 

// {
//   image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg', 

//   name: 'Adults Plain Cotton T-Shirt - 2 Pack', 

//   rating: {
//     stars: 4.5, 
//     count: 56
//   }, 

//   priceCents: 799
// }, 

// {
//   image: 'images/products/black-2-slot-toaster.jpg', 

//   name: '2 Slot Toaster - Black', 

//   rating: {
//     stars: 5, 
//     count: 2197
//   }, 

//   priceCents: 1899

// }];

// Modules (Only work with Live Server)
import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// Load products using backend.
loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = '';

  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  let filteredProducts = products;

  // If a search exists in the URL parameters.
  // Filter the products that match the search.
  if (search) {
    filteredProducts = products.filter((product) => {
      let matchingKeyword = false;

      product.keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(search.toLowerCase())) {
          matchingKeyword = true;
        };
      });

      return matchingKeyword || product.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  // Generate the HTML by looping through the data structure
  filteredProducts.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsURL()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" 
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });


  document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;


  function updateCartQuantity(productId) {
    // Calculate total cart quantity
    const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
    
    // 13j - 13l
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

    addedMessage.classList.add('added-to-cart-visible');

    setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);
  };

  // Using 14d function
  updatePageCartQuantity();

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        // The kebab case gets CONVERTED to CAMEL CASE
        // const productId = button.dataset.productId;

        // ^ using the destructuring method
        const {productId} = button.dataset;

        // Update quantitySelector here to avoid null error in tests.
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        const quantity = Number(quantitySelector.value);

        // Run addToCart method
        addToCart(productId, quantity);

        //Run updateCartQuantity method
        updateCartQuantity(productId);
      });
  });

  // 14d. Update the Amazon Page Cart Quantity when it loads. New function that does take in productId parameter.
  function updatePageCartQuantity() {
    const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-page-cart-quantity')
      .innerHTML = cartQuantity;
  };

  document.querySelector('.js-search-button')
    .addEventListener('click', () => {
      const search = document.querySelector('.js-search-bar').value;
      window.location.href = `amazon.html?search=${search}`;
    });
};