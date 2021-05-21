import { addProductInUserShoppingCart } from '../../di/dependencyContainer';

const addProductInUserShoppingCartRoute = {
  method: 'POST',
  path: '/shopping-carts/:shoppingCartUserId/products',
  async handler(request, reply) {
    const {
      productId, quantity,
    } = request.body;
    const { shoppingCartUserId } = request.params;
    const userId = request.user.id; // From a JWT

    await addProductInUserShoppingCart({
      userId, shoppingCartUserId, productId, quantity,
    });

    return reply.code(201).send();
  },
};

export default addProductInUserShoppingCartRoute;
