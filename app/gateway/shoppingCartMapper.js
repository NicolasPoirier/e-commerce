'use strict';

const ShoppingCart = require('../domain/ShoppingCart');
const ShoppingCartItem = require('../domain/ShoppingCartItem');
const InMemoryShoppingCart = require('../data_source/in_memory/InMemoryShoppingCart');
const InMemoryShoppingCartItem = require('../data_source/in_memory/InMemoryShoppingCartItem');

const toInMemory = async (userId, shoppingCart) => {
  const inMemoryShoppingCartItems = shoppingCart.items
    .map(item => new InMemoryShoppingCartItem(item.product.id, item.quantity));    
  return new InMemoryShoppingCart(userId, inMemoryShoppingCartItems);
}

const toDomain = async (inMemoryShoppingCart, dataSource) => {
  const items = await Promise.all(inMemoryShoppingCart.items
    .map(async item => {
      const product = await dataSource.getProductById(item.productId);
      return new ShoppingCartItem(product, item.quantity);
    }));
  return new ShoppingCart(items);
}

module.exports = {
  toInMemory,
  toDomain
};
