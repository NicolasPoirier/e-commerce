import isProductQuantityInStock from 'domain-model/isProductQuantityInStock';
import canRemoveProductQuantityFromStock from './canRemoveProductQuantityFromStock';

export default function removeProductQuantityFromStock({ gateway }) {
  return async function execute({ userId, productId, quantity }) {
    const userRoles = await gateway.getUserRoles({ userId });

    if (!canRemoveProductQuantityFromStock({ userRoles })) {
      // TODO handle error
    }

    const stock = await gateway.getProductStock({ productId });

    if (!isProductQuantityInStock({ quantity, stock })) {
      // TODO handle error
    }

    await gateway.removeProductQuantityFromStock({ productId, quantity });
  };
}
