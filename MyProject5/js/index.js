"use strict";

fetch('json/productsData.json')
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));

cart.init();

$(document).ready(function () {
  const cart = document.querySelector('.cart');
  cart.addEventListener('click',evt =>{
    evt.preventDefault();
    cart.classList.toggle('active');
  });

  const productsContainer = $('.product-wrapper');
  const js = {
    "id": 1,
      "category_id": 6,
      "title": "Продукт 1",
      "image": "Layer2.jpg",
      "price": 1000,
      "hit": 0,
      "rating": 2.5,
      "description1": "Описание №1 для товара №1",
      "description2": "Описание №2 для товара №1",
      "description3": "Описание №3 для товара №1"
  };

  let product = new ProductCart(js.id, js.title, js.image, js.price, js.rating,
      'product', 'image-product', 'text-product', 'product__rating', 'product__price',
      'product__price_btn add_to_cart', 'products.html?id=' + js.id);

  productsContainer.append(product.render());
});