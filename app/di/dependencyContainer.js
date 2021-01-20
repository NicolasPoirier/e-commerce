'use strict';

const InMemoryDataSource = require('../data_source/in_memory/InMemoryDataSource');
const AddProductInShoppingCartUseCase = require('../use_case/add_product_to_shopping_cart/AddProductToShoppingCartUseCase');
const AddProductInShoppingCartGateway = require('../gateway/AddProductToShoppingCartGateway');
const GetUserShoppingCartUseCase = require('../use_case/get_user_shopping_cart/GetUserShoppingCartUseCase');
const GetUserShoppingCartGateway = require('../gateway/GetUserShoppingCartGateway');


const inMemoryDataSource = new InMemoryDataSource();

const addProductInShoppingCartGateway = new AddProductInShoppingCartGateway(inMemoryDataSource);
const addProductInShoppingCartUseCase = new AddProductInShoppingCartUseCase(addProductInShoppingCartGateway);

const getUserShoppingCartGateway = new GetUserShoppingCartGateway(inMemoryDataSource);
const getUserShoppingCartUseCase = new GetUserShoppingCartUseCase(getUserShoppingCartGateway);

module.exports = {
  addProductInShoppingCartUseCase,
  getUserShoppingCartUseCase
};
