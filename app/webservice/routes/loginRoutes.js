"use strict";

module.exports = async function (fastify, options) {

  const loginUseCase = options.dependencyContainer.loginUseCase;

  fastify.addSchema({
    $id: 'token',
    type: 'object',
    properties: {
      token: { type: 'string' },
      roles: { 
        type: 'array',
        items: { type: 'string' }
      }
    }
  });

  fastify.post(
    '/token',
    {
      schema: {
        response: {
          200: {
            $ref: 'token'
          }
        }
      }
    },
    async request => {
      const body = JSON.parse(request.body);
      const userLoginInformation = await loginUseCase.execute(body.username, body.password);
      const token = fastify.jwt.sign(
        { username: userLoginInformation.username }
      );
      return { token: token, roles: userLoginInformation.roles };
    }
  );
};
