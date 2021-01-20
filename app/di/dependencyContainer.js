'use strict';

const comparePasswordHash = require('../security/comparePasswordHash');

const InMemoryDataSource = require('../data_source/in_memory/InMemoryDataSource');

const LoginGateway = require('../gateway/LoginGateway');
const LoginUseCase = require('../use_case/login/LoginUseCase');

const AddProductToShoppingCartUseCase = require('../use_case/add_product_to_shopping_cart/AddProductToShoppingCartUseCase');
const AddProductToShoppingCartGateway = require('../gateway/AddProductToShoppingCartGateway');

const GetUserShoppingCartUseCase = require('../use_case/get_user_shopping_cart/GetUserShoppingCartUseCase');
const GetUserShoppingCartGateway = require('../gateway/GetUserShoppingCartGateway');

const inMemoryDataSource = new InMemoryDataSource();

const loginGateway = new LoginGateway(inMemoryDataSource);
const loginUseCase = new LoginUseCase(loginGateway, comparePasswordHash);

const addProductToShoppingCartGateway = new AddProductToShoppingCartGateway(inMemoryDataSource);
const addProductToShoppingCartUseCase = new AddProductToShoppingCartUseCase(addProductToShoppingCartGateway);

const getUserShoppingCartGateway = new GetUserShoppingCartGateway(inMemoryDataSource);
const getUserShoppingCartUseCase = new GetUserShoppingCartUseCase(getUserShoppingCartGateway);

module.exports = {
  loginUseCase,
  addProductToShoppingCartUseCase,
  getUserShoppingCartUseCase
};
