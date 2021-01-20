'use strict';

const ShoppingCart = require('../../domain/ShoppingCart');

module.exports = class {

  #addProductInShoppingCartGateway;

  constructor(addProductInShoppingCartGateway) {
    this.#addProductInShoppingCartGateway = addProductInShoppingCartGateway;
  }

  async execute(userId, productId, quantity) {
    const shoppingCart = 
      await this.#addProductInShoppingCartGateway.getUserShoppingCart(userId) 
      || new ShoppingCart();
    const product = await this.#addProductInShoppingCartGateway.getProductById(productId);

    shoppingCart.addProduct(product, quantity);

    await this.#addProductInShoppingCartGateway.saveUserShoppingCart(userId, shoppingCart);
  }
};
