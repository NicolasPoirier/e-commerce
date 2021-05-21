import fastify from 'fastify';
import addProductToUserShoppingCartRoute from './route/shoppingCart/addProductToUserShoppingCart.route';

const server = fastify();

server.route(addProductToUserShoppingCartRoute);

// Run the server!
const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
