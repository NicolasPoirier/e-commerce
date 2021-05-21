import canGetProductPrice from './canGetProductPrice';

export default function addProductUserInShoppingCartUsecase({ gateway }) {
  return async function execute({ userId, productId }) {
    const userRoles = await gateway.getUSerRoles({ userId });

    if (!canGetProductPrice({ userRoles })) {
      // TODO gérer l'erreur
    }

    return gateway.getProductPrice({ productId });
  };
}
