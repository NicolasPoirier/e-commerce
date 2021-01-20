"use strict";

module.exports = async function (fastify, options) {

  const addProductToShoppingCartUseCase = options.dependencyContainer.addProductToShoppingCartUseCase;
  const getUserShoppingCartUseCase = options.dependencyContainer.getUserShoppingCartUseCase;

  fastify.post(
    '/shopping-carts/:userId/items',
    {
      preValidation: [fastify.authenticate]
    },
    async (request, reply) => {
      const shoppingCartUserId = request.params.userId;
      const authenticatedUserId = request.user.username;
      const item = JSON.parse(request.body);
      await addProductToShoppingCartUseCase.execute(authenticatedUserId, shoppingCartUserId, item.productId, item.quantity);
      reply.send();
    }
  );

  fastify.get(
    '/shopping-carts/:userId',
    {
      preValidation: [fastify.authenticate]
    },
    async (request) => {
      const shoppingCartUserId = request.params.userId;
      const authenticatedUserId = request.user.username;
      return await getUserShoppingCartUseCase.execute(authenticatedUserId, shoppingCartUserId);
    }
  );
};
