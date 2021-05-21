import canGetProductStock from './canGetProductStock';

export default function getProductStock({ gateway }) {
  return async function execute({ userId, productId }) {
    const userRoles = await gateway.getUserRoles({ userId });

    if (!canGetProductStock({ userRoles })) {
      // TODO handle error
    }

    return gateway.getProductStock({ productId });
  };
}
