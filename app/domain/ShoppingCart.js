'use strict';

const ShoppingCartItem = require('./ShoppingCartItem');
const IllegalArgumentError = require('../error/IllegalArgumentError');

module.exports = class {

  items;
  totalPrice;

  constructor(items = []) {
    this.items = items;
    this.refreshTotalPrice();
  }

  addProduct(product, quantity) {
    const itemExist = this.items
      .find(item => item.product.id === product.id);
    
    if (itemExist && product.stock >= itemExist.quantity + quantity) {
      itemExist.plus(quantity);
    }
    else if(product.stock >= quantity) {
      const item = new ShoppingCartItem(product, quantity);
      this.items.push(item);
    } else {
      throw new IllegalArgumentError("Cannot add product to shopping cart: insufficient stock");
    }

    this.refreshTotalPrice();
  }

  removeProduct(productId, quantityToRemove) {
    const itemToRemove = this.items
      .find(item => item.product.id === productId);
    
    if (itemToRemove) {
        itemToRemove.minus(quantityToRemove);

        if(itemToRemove.quantity == 0) {
          this.items = this.items
            .filter(item => item.product.id != productId);
        }

        this.refreshTotalPrice();
    } else {
      throw new IllegalArgumentError("Cannot remove product from shopping cart: not in shopping cart");
    }
  }

  refreshTotalPrice() {
    this.totalPrice = this.items.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0);
  }
};
