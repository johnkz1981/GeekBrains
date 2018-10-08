"use strict";

/**
 * Проверка есть ли корзина в localStorage
 * Если нет, то создает
 */
if (!localStorage.getItem("cart")) {
  let productsInCart = [];
  localStorage.setItem("cart", JSON.stringify(productsInCart));
}

/**
 * Записывает из localStorage данные в массив
 */
let productsInCart = JSON.parse(localStorage.getItem("cart"));


/**
 * Объект корзины
 */
const cart = {
      /**
       * Первоначальные данные общего количества и конечной цены
       */
      totalCartSettings: {
        totalQty: 0,
        totalPrice: 0
      },

      /**
       * Считает общее количество и окончательную цену исходя из товаров в корзине
       */
      createTotalCartSettings() {
        for (let i = 0; i < productsInCart.length; i++) {
          this.totalCartSettings.totalQty += productsInCart[i].qty;
          this.totalCartSettings.totalPrice += productsInCart[i].price * productsInCart[i].qty;
        }
      },

      /**
       * Инициализинует корзину
       */
      init() {
        const buttonArray = document.querySelectorAll('.add-cart');
        this.createTotalCartSettings();
        this.outputQtyTotalPrice();
        this.createListContainer();
        this.addProductToCart(buttonArray);
      },

      /**
       * Выводит общее количество и окончательную цену
       */
      outputQtyTotalPrice() {

        if (this.totalCartSettings.totalQty > 0) {
          document.querySelector('.totalQty').classList.add('active');
        } else {
          document.querySelector('.totalQty').classList.remove('active');
        }
        document.querySelector('.totalQty').innerHTML = this.totalCartSettings.totalQty;
        document.querySelector('.totalPrice_price').innerHTML = this.totalCartSettings.totalPrice;
      },

      addProductToCart(buttonArray) {
        for (let i = 0; i < buttonArray.length; i++) {
          buttonArray[i].addEventListener('click', (event) => this.addToCart(event), true)
        }
      },

      /**
       * Добавляет товар в корзину
       * @param {MouseEvent} event Событие клика мышью
       */
      addToCart(event) {
        this.checkForAvailability(event);
        this.createListContainer();
        this.changeTotalCounter(event);
      },

      /**
       * Проверяет есть ли такой товар в корзине
       * @param {MouseEvent} event Событие клика мышью
       */
      checkForAvailability(event) {
        let id = null;
        for (let item of event.composedPath()) {
          if (item.className === 'add-cart') {
            id = +item.dataset.id;
          }
        }
        for (let i = 0; i < productsInCart.length; i++) {
          if (productsInCart[i].id === id) {
            productsInCart[i].qty += 1;
            localStorage.setItem("cart", JSON.stringify(productsInCart));
            return;
          }
        }
        this.addNewProduct(event);
      },

      /**
       * Добавляет товар в корзину если его там нет
       * @param {MouseEvent} event Событие клика мышью
       */
      addNewProduct(event) {
        for (let item of event.composedPath()) {
          if (item.className === 'add-cart') {
            productsInCart.push({
              'id': +item.dataset.id,
              'name': item.dataset.name,
              'price': +item.dataset.price,
              'img': item.dataset.img,
              'qty': 1,
            });
          }
        }
        localStorage.setItem("cart", JSON.stringify(productsInCart));
      },

      /**
       * Пересчитывет количество товара в корзине и общую стоимость
       * @param event
       */
      changeTotalCounter(event) {
        this.totalCartSettings.totalQty += 1;
        for (let item of event.composedPath()) {
          if (item.className === 'add-cart') {
            this.totalCartSettings.totalPrice += +item.dataset.price;
          }
        }
        this.outputQtyTotalPrice();
      },

      /**
       * Выводит товары в корзину
       */
      /*`<article class="item">
  <a href="single.html?id=555" class="productCartCard_image">
  <img src="img/basket2.svg" alt="sdfsd">
  </a>
  <div class="productCartInfo">
  <div class="caption"><a href="single.html?id=555" class="product_name_link">sdfsd
  </a>
  </div>
  <div class="productCartPrice"><span class="productCartQty">1 </span>x
                                        <span class="productCartPrice"> 555 руб.</span></div></div>
                                        <div class="productCartButton"><button class="productCartButton" data-id="555">Del</button>
                                        </div>
                                        </article>`*/
      createListContainer() {
        let html = `
          <div class="item">
            <a href="single-page.html">
              <img src="img/Layer_44.jpg" alt="">
            </a>
            <div>
              <div class="caption">Rebox Zane</div>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="price">1 x
                <span>$250</span>
              </div>
            </div>
            <div class="close">
              <i class="fas fa-times-circle"></i>
            </div>

          </div>
          <div class="hr"></div>
          
          <div class="h4">`;
        const productsInCartContainer = document.querySelector('.productsInCart');
        productsInCartContainer.innerHTML = html;

        for (let i = 0; i < productsInCart.length; i++) {
          const productWrap = document.createElement('article');
          productWrap.classList.add('item');
          productsInCartContainer.appendChild(productWrap);

          const imgLink = document.createElement('a');
          imgLink.setAttribute('href', 'single.html?id=' + productsInCart[i].id);
          imgLink.classList.add('productCartCard_image');
          productWrap.appendChild(imgLink);

          const image = new Image();
          image.src = `img/${productsInCart[i].img}`;
          image.alt = productsInCart[i].name;
          imgLink.appendChild(image);

          const productInfo = document.createElement('div');
          productInfo.classList.add('productCartInfo');
          productWrap.appendChild(productInfo);

          const productName = document.createElement('div');
          productName.classList.add('caption');
          productName.innerHTML = productsInCart[i].name;
          productInfo.appendChild(productName);

          const productRating = document.createElement('div');
          productRating.classList.add('star');
          productInfo.appendChild(productRating);

          const reitng = 4.5;
          for (let i = 0; i < Math.round(reitng); i++) {
            const productRatingElem = document.createElement('i');
            productRatingElem.classList.add('fas');

            if (i === (Math.round(reitng) - 1) && reitng !== Math.round(reitng)){
              productRatingElem.classList.add('fa-star-half-alt');
            }else {
              productRatingElem.classList.add('fa-star');
            }
            productRating.appendChild(productRatingElem);
          }

          /*const productLink = document.createElement('a');
          productLink.setAttribute('href', 'single.html?id=' + productsInCart[i].id);
          productLink.classList.add('product_name_link');
          productLink.innerHTML = productsInCart[i].name;
          productName.appendChild(productLink);*/

          const productPrice = document.createElement('div');
          productPrice.classList.add('productCartPrice');
          productPrice.classList.add('price');
          productPrice.innerHTML = `${productsInCart[i].qty} x 
                                      <span class="productCartPrice"> $${productsInCart[i].price} </span>`;
          productInfo.appendChild(productPrice);

          const productButtonWrap = document.createElement('div');
          productButtonWrap.classList.add('close');
          productWrap.appendChild(productButtonWrap);

          const productButton = document.createElement('i');
          productButton.classList.add('productCartButton');
          productButton.innerHTML = `<i class ="fas fa-times-circle"></i>`;
          productButton.setAttribute('data-id', productsInCart[i].id);
          productButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.deleteFromCart(event)
          });
          productButtonWrap.appendChild(productButton);

          const hr = document.createElement('div');
          hr.classList.add('hr');
          productsInCartContainer.appendChild(hr);

          const h4 = document.createElement('h4');
          hr.classList.add('h4');
          productsInCartContainer.appendChild(h4);
        }
      }
      ,

      /**
       * Удаляет товар из корзины
       * @param {MouseEvent} event Событие клика мышью
       */
      deleteFromCart(event) {
        let id = null;
        for (let item of event.composedPath()) {
          if (item.className === 'productCartButton') {
            id = +item.dataset.id;
          }
        }
        for (let i = 0; i < productsInCart.length; i++) {
          if (productsInCart[i].id === id) {
            this.totalCartSettings.totalQty -= productsInCart[i].qty;
            this.totalCartSettings.totalPrice -= productsInCart[i].price * productsInCart[i].qty;
            productsInCart.splice(i, 1);
          }
        }
        this.createListContainer();
        this.outputQtyTotalPrice();
        localStorage.setItem("cart", JSON.stringify(productsInCart));
      }
      ,
    }
;

/**
 * Объект карзины, для вывода на страницу
 */
const pageCart = {
  init() {
    this.createCart()
  },

  createCart() {
    const cartContainer = $('.cart__table');
    cartContainer.html('');
    for (let i = 0; i < productsInCart.length; i++) {
      let tableTr = $('<tr/>');
      tableTr.appendTo(cartContainer);

      let tableTh = $('<th/>', {class: 'text-center'}).html(i + 1);
      tableTh.appendTo(tableTr);

      let tableTdPhoto = $('<td/>', {class: 'text-center'});
      let photo = $('<img>', {
        src: 'img/' + productsInCart[i].img,
        'alt': productsInCart[i].title,
        style: 'width: 50px'
      });
      photo.appendTo(tableTdPhoto);
      tableTdPhoto.appendTo(tableTr);

      let tableTdName = $('<td/>', {class: 'text-center'});
      let link = $('<a/>', {href: 'products.html?id=' + productsInCart[i].id}).html(productsInCart[i].name);
      link.appendTo(tableTdName);
      tableTdName.appendTo(tableTr);

      let tableTdQty = $('<td/>', {class: 'text-center'}).html(productsInCart[i].qty);
      tableTdQty.appendTo(tableTr);

      let tableTdPrice = $('<td/>', {class: 'text-center'}).html(productsInCart[i].price + ' руб.');
      tableTdPrice.appendTo(tableTr);

      let tableTdSum = $('<td/>', {class: 'text-center'}).html(productsInCart[i].qty * productsInCart[i].price + ' руб.');
      tableTdSum.appendTo(tableTr);

      let tableTdBtn = $('<button/>', {class: 'productCartButton', 'data-id': productsInCart[i].id});
      tableTdBtn.click((event) => {
        this.refreshCart(event)
      });
      tableTdBtn.html('Del').appendTo(tableTr);
    }
  },

  refreshCart(event) {
    cart.deleteFromCart(event);
    this.createCart();
  }
};