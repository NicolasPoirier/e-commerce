import fastify from 'fastify';
import addProductInUserShoppingCartRoute from './route/shoppingCart/addProductInUserShoppingCart.route';

const server = fastify();

server.route(addProductInUserShoppingCartRoute);

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
