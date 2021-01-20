'use strict';

const toDomainShoppingCart = require('./shoppingCartMapper').toDomain;

module.exports = class {

  #dataSource;

  constructor(dataSource) {
    this.#dataSource = dataSource;
  }

  async getUserRoles(userId) {
    return await this.#dataSource.getUserRolesByUserId(userId);
  }

  async getUserShoppingCart(userId) {
    const inMemoryShoppingCart = await this.#dataSource.getShoppingCartByUserId(userId);
    if (inMemoryShoppingCart) {
      return await toDomainShoppingCart(inMemoryShoppingCart, this.#dataSource);
    } else {
      return;
    }
  }
};
