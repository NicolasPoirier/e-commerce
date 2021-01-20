'use strict';

const Product = require('../../../app/domain/Product');
const ShoppingCart = require('../../../app/domain/ShoppingCart');
const AddProductToShoppingCartUseCase = require('../../../app/use_case/add_product_to_shopping_cart/AddProductToShoppingCartUseCase');

test('Add product to empty shopping cart', async () => {
  const userId = 20;
  const productId = 1;
  const shoppingCart = new ShoppingCart();
  const product = new Product(productId, "Name", 10, 100);
  const shoppingCartWithProduct = new ShoppingCart();
  shoppingCartWithProduct.addProduct(product, 5);

  const addProductToShoppingCartGateway = {
    saveUserShoppingCart: jest.fn().mockResolvedValue(),
    getUserShoppingCart: jest.fn().mockResolvedValue(shoppingCart),
    getProductById: jest.fn().mockResolvedValue(product)
  }

  const addProductToShoppingCartUseCase = new AddProductToShoppingCartUseCase(addProductToShoppingCartGateway);

  await expect(addProductToShoppingCartUseCase.execute(userId, productId, 5)).resolves.toEqual(undefined);
  expect(addProductToShoppingCartGateway.saveUserShoppingCart).toHaveBeenCalledWith(userId, shoppingCartWithProduct);
});