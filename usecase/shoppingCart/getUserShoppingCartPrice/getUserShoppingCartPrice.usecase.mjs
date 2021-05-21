import calculateShoppingCartPrice from 'domain-model/calculateShoppingCartPrice';
import canGetUserShoppingCartPrice from './canGetUserShoppingCartPrice';

export default function getUserShoppingCartPriceUsecase({ gateway }) {
  return async function execute({ userId, shoppingCartUserId }) {
    const userRoles = await gateway.getUserRoles({ userId });

    if (!canGetUserShoppingCartPrice({
      user: { id: userId, roles: userRoles },
      shoppingCartUserId,
    })) {
      // TODO handle error
    }

    const productQuantitiesInUserShoppingCart = await gateway
      .getProductQuantitiesInUserShoppingCart({ shoppingCartUserId });

    const productInShoppingCartPrices = await Promise.all(productQuantitiesInUserShoppingCart
      .map(async (productQuantity) => gateway.getProductPrice({ productId: productQuantity.id })));

    const shoppingCartPrice = calculateShoppingCartPrice({
      productQuantities: productQuantitiesInUserShoppingCart,
      productPrices: productInShoppingCartPrices,
    });

    return shoppingCartPrice;
  };
}
