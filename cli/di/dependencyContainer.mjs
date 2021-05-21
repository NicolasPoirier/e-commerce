import addProductUserInShoppingCartGateway from 'gateway/shoppingCart/addProductToUserShoppingCart/addProductToUserShoppingCartMonolith.gateway';
import addProductToUserShoppingCartUsecase from 'usecase/shoppingCart/addProductToUserShoppingCart/addProductToUserShoppingCart.usecase';

export const addProductToUserShoppingCart = addProductToUserShoppingCartUsecase({
  gateway: addProductUserInShoppingCartGateway,
});

export const removeProductFromUserShoppingCart = () => {};

// TODO add all needed use cases
