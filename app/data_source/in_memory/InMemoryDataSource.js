'use strict';

const Product = require('../../../app/domain/Product');
const Role = require('../../../app/domain/Role');
const InMemoryUser = require('./InMemoryUser');

module.exports = class {

  #shoppingCarts = [];
  #products = [new Product(1, "Produit 1", 25, 10)];
  #users = [
    new InMemoryUser("customer", "$2b$10$sCTzxUCZ3ou.pH6WY1KVYut6gfgD0InQVpc0i0esTkPSbcGKH0LT.", [Role.CUSTOMER]),
    new InMemoryUser("dealer", "$2b$10$FbAc9HrjVHcxjbS8iAGR5.cshBm.cbMbX1vVjmgJwa3V/nXdxFEAG", [Role.DEALER])];

  async getUserPasswordByUserId(id) {
    return this.#users.find(user => user.id === id).password;
  }

  async getUserRolesByUserId(id) {
    return this.#users.find(user => user.id === id).roles;
  }

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
