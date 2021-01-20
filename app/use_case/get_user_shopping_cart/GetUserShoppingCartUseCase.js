'use strict';

const ShoppingCart = require('../../domain/ShoppingCart');

module.exports = class {

  #getUserShoppingCartGateway;

  constructor(getUserShoppingCartGateway) {
    this.#getUserShoppingCartGateway = getUserShoppingCartGateway;
  }

  async execute(userId) {
    return await this.#getUserShoppingCartGateway.getUserShoppingCart(userId) 
      || new ShoppingCart();
  }
};
