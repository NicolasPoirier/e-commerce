"use strict";

module.exports = async function (fastify, options) {

  const addProductInShoppingCartUseCase = options.dependencyContainer.addProductInShoppingCartUseCase;
  const getUserShoppingCartUseCase = options.dependencyContainer.getUserShoppingCartUseCase;

  fastify.post(
    '/shopping-carts/:userId/items',
    async (request, reply) => {
      const userId = request.params.userId;
      const item = JSON.parse(request.body);
      await addProductInShoppingCartUseCase.execute(userId, item.productId, item.quantity);
      reply.send();
    }
  );

  fastify.get(
    '/shopping-carts/:userId',
    async (request) => {
      const userId = request.params.userId;
      return await getUserShoppingCartUseCase.execute(userId);
    }
  );
};
