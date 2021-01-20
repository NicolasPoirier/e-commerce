'use strict';

module.exports = class {

  productId;
  quantity;

  constructor(productId, quantity) {
    this.productId = productId;
    this.quantity = quantity;
  }
};
