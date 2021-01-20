'use strict';

const ShoppingCart = require('../../domain/ShoppingCart');
const canAddProductToShoppingCartAuthorization = require('../../domain/authorization/canAddProductToShoppingCartAuthorization');
const UnauthorizedUserError = require('../../error/UnauthorizedUserError');

module.exports = class {

  #addProductToShoppingCartGateway;

  constructor(addProductToShoppingCartGateway) {
    this.#addProductToShoppingCartGateway = addProductToShoppingCartGateway;
  }

  async execute(authenticatedUserId, shoppingCartUserId, productId, quantity) {
    const shoppingCart = 
      await this.#addProductToShoppingCartGateway.getUserShoppingCart(shoppingCartUserId) 
      || new ShoppingCart(shoppingCartUserId);

    const userRoles = await this.#addProductToShoppingCartGateway.getUserRoles(authenticatedUserId);

    if(canAddProductToShoppingCartAuthorization({id: authenticatedUserId, roles: userRoles}, shoppingCart)) {
      const product = await this.#addProductToShoppingCartGateway.getProduct(productId);

      shoppingCart.addProduct(product, quantity);
  
      await this.#addProductToShoppingCartGateway.saveUserShoppingCart(shoppingCart);
    } else {
      throw new UnauthorizedUserError("Cannot add product to shopping cart");
    }
  }
};
