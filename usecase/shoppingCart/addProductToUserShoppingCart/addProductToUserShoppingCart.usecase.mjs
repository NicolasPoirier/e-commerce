import isProductQuantityInStock from 'domain-model/isProductQuantityInStock';
import canAddProductToUserShoppingCart from './canAddProductToUserShoppingCart';

export default function addProductToUserShoppingCartUsecase({ gateway }) {
  return async function execute({
    userId, shoppingCartUserId, productId, quantity,
  }) {
    const userRoles = await gateway.getUserRoles({ userId });

    if (!canAddProductToUserShoppingCart({
      user: { id: userId, roles: userRoles },
      shoppingCartUserId,
    })) {
      // TODO gérer l'erreur
    }

    await gateway.startTransaction();

    try {
      const stock = await gateway.getProductStock({ productId });

      if (!isProductQuantityInStock({ quantity, stock })) {
        // TODO gérer l'erreur
      }

      await gateway.removeProductQuantityFromStock({ productId, quantity });
      await gateway.addProductInShoppingCart({ userId, productId, quantity });

      await gateway.commitTransaction();
    } catch (err) {
      await gateway.rollbackTransaction();
    }
  };
}
