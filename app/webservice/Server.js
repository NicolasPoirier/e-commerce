"use strict";

const IllegalArgumentError = require('../error/IllegalArgumentError');

module.exports = class Server {
  
  #fastify;
  #port;
  #host;

  constructor(port, host, dependencyContainer) {
    this.#port = port;
    this.#host = host;

    this.#fastify = require('fastify')({
      logger: true
    });

    this.#fastify.setErrorHandler(function (error, _request, reply) {
      this.log.error(error)
      if (error instanceof IllegalArgumentError) {
        reply.code(400).send(); 
      } else {
        reply.code(500).send();
      }
    });

    this.#fastify.register(require('./routes/shoppingCartRoutes'), {
      dependencyContainer: dependencyContainer
    });
  }

  async start() {
    try {
      await this.#fastify.listen(this.#port, this.#host);
    } catch (err) {
      this.#fastify.log.error(err);
      process.exit(1);
    }
  }
};
