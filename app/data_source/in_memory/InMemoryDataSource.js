'use strict';

const Product = require('../../../app/domain/Product');

module.exports = class {

  #shoppingCarts = [];
  #products = [new Product(1, "Produit 1", 25, 10)];

  async getProductById(productId) {
    return this.#products.find(product => product.id === productId);
  }

  async getShoppingCartByUserId(userId) {
    return this.#shoppingCarts.find(shoppingCart => shoppingCart.userId === userId);
  }

  async saveShoppingCart(shoppingCart) {
    const existingShoppingCart = this.#shoppingCarts
      .find(shoppingCart => shoppingCart.userId === shoppingCart.userId);

    if(existingShoppingCart) {
      const existingShoppingCartIndex = this.#shoppingCarts
        .findIndex(shoppingCart => shoppingCart.userId === shoppingCart.userId);
      this.#shoppingCarts.splice(existingShoppingCartIndex, 1, shoppingCart);
    } else {
      this.#shoppingCarts.push(shoppingCart);
    }
  }
};
