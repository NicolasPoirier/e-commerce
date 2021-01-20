'use strict';

const IllegalArgumentError = require('../error/IllegalArgumentError');

module.exports = class {

  product;
  quantity;
  totalPrice;

  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = product.price * quantity;
  }

  plus(quantity) {
    if (quantity <= 0) {
      throw new IllegalArgumentError("Quantity argument must be > 0");
    }
    this.quantity += quantity;
    this.totalPrice += quantity * this.product.price;
  }

  minus(quantity) {
    if (quantity <= 0) {
      throw new IllegalArgumentError("Quantity argument must be > 0");
    }
    if (quantity <= this.quantity) {
      this.quantity -= quantity;
      this.totalPrice -= quantity * this.product.price;
    } else {
      throw new IllegalArgumentError("Not enough quantity to remove");
    }
  }
};
