'use strict';

const ShoppingCart = require('../../domain/ShoppingCart');
const canGetShoppingCartAuthorization = require('../../domain/authorization/canGetShoppingCartAuthorization');
const UnauthorizedUserError = require('../../error/UnauthorizedUserError');

module.exports = class {

  #getUserShoppingCartGateway;

  constructor(getUserShoppingCartGateway) {
    this.#getUserShoppingCartGateway = getUserShoppingCartGateway;
  }

  async execute(authenticatedUserId, shoppingCartUserId) {
    const shoppingCart = await this.#getUserShoppingCartGateway.getUserShoppingCart(shoppingCartUserId) 
      || new ShoppingCart(shoppingCartUserId);
    
    const userRoles = await this.#getUserShoppingCartGateway.getUserRoles(authenticatedUserId);

    if(canGetShoppingCartAuthorization({id: authenticatedUserId, roles: userRoles}, shoppingCart)) {
      return shoppingCart;
    } else {
      throw new UnauthorizedUserError("Cannot get shopping cart");
    }
  }
};
