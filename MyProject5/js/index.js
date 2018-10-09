"use strict";

const productsContainer = $('.product-wrapper');
productsContainer.html('');

fetch('json/productsData.json')
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(productJson => {
      for (let i = 0; i < 8; i++) {
        console.log(productJson[i])
        let product = new ProductCart(productJson[i].id, productJson[i].title, productJson[i].image, productJson[i].price, productJson[i].rating,
            'product', 'image-product', 'text-product', 'product__rating', 'product__price',
            'product__price_btn add_to_cart', 'products.html?id=' + productJson.id);
        productsContainer.append(product.render());
      }
    })
    .catch(error => console.log(error));

$(document).ready(function () {
  const cartHover = document.querySelector('.cart');
  cartHover.addEventListener('click', evt => {
    evt.preventDefault();
    cartHover.classList.toggle('active');
  });

  cart.init();
});