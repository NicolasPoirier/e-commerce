import addProductUserInShoppingCartGateway from 'gateway/shoppingCart/addProductInUserShoppingCart/addProductInUserShoppingCartMonolith.gateway';
import addProductInUserShoppingCartUsecase from 'usecase/shoppingCart/addProductInUserShoppingCart/addProductInUserShoppingCart.usecase';

export const addProductInUserShoppingCart = addProductInUserShoppingCartUsecase({
  gateway: addProductUserInShoppingCartGateway,
});

export const removeProductFromUserShoppingCart = () => {};

// TODO add all needed use cases
