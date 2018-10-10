"use strict";

const productsContainer = $('.product-wrapper');
const productsContainerCatalog = $('.catalog-products-cart');
const productsContainerSingle = $('.may-like');
productsContainer.html('');
productsContainerCatalog.html('');
productsContainerSingle.html('');

fetch('json/productsData.json')
    .then(result => {
      return result.json();
    })
    .then(productJson => {
      for (let i = 0; i < 9; i++) {
        let product = new ProductCart(productJson[i].id, productJson[i].title, productJson[i].image, productJson[i].price, productJson[i].rating,
            'product', 'image-product', 'text-product', 'product__rating', 'product__price',
            'product__price_btn add_to_cart', 'products.html?id=' + productJson.id);
        productsContainerCatalog.append(product.render());
        if (i < 8) {
          productsContainer.append(product.render());
        }
        if (i < 4) {
          productsContainerSingle.append(product.render());
        }
      }
    })
    .catch(error => console.log(error));

window.onload = () => {
  const cartHover = document.querySelector('.cart');
  cartHover.addEventListener('click', evt => {
    //evt.preventDefault();
    cartHover.classList.toggle('active');
  });
  cart.init();
  pageCart.init();
};