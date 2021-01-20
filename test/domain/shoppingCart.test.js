'use strict';

const Product = require('../../app/domain/Product');
const ShoppingCart = require('../../app/domain/ShoppingCart');

test('Empty shopping cart', async () => {
  const shoppingCart = new ShoppingCart();
  expect(shoppingCart).toEqual({ items: [], totalPrice: 0 });
});

test('Add products', async () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product(1, "Name", 12, 5);
  const product2 = new Product(2, "Name", 35, 1);
  shoppingCart.addProduct(product1, 2);
  shoppingCart.addProduct(product2, 1);
  expect(shoppingCart).toEqual({
    items: [
      { product: product1, quantity: 2, totalPrice: 24 },
      { product: product2, quantity: 1, totalPrice: 35 }
    ],
    totalPrice: 59
  });
});

test('Add existing product', async () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product(1, "Name", 12, 5);
  const product2 = new Product(2, "Name", 35, 1);
  shoppingCart.addProduct(product1, 2);
  shoppingCart.addProduct(product2, 1);
  shoppingCart.addProduct(product1, 3);
  expect(shoppingCart).toEqual({
    items: [
      { product: product1, quantity: 5, totalPrice: 60 },
      { product: product2, quantity: 1, totalPrice: 35 }
    ],
    totalPrice: 95
  });
});

test('Remove product all quantity', async () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product(1, "Name", 12, 5);
  const product2 = new Product(2, "Name", 35, 1);
  shoppingCart.addProduct(product1, 2);
  shoppingCart.addProduct(product2, 1);
  shoppingCart.removeProduct(1, 2);
  expect(shoppingCart).toEqual({ items: [{ product: product2, quantity: 1, totalPrice: 35 }], totalPrice: 35 });
});

test('Remove product partial quantity', async () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product(1, "Name", 12, 5);
  const product2 = new Product(2, "Name", 35, 1);
  shoppingCart.addProduct(product1, 2);
  shoppingCart.addProduct(product2, 1);
  shoppingCart.removeProduct(1, 1);
  expect(shoppingCart).toEqual({
    items: [
      { product: product1, quantity: 1, totalPrice: 12 },
      { product: product2, quantity: 1, totalPrice: 35 }
    ],
    totalPrice: 47
  });
});
