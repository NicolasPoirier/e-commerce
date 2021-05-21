import { addProductInUserShoppingCart } from '../../../di/dependencyContainer';

async function addProductInUserShoppingCartCommand({ args }) {
  // TODO parse args and execute usecase
  await addProductInUserShoppingCart({});
}

export default addProductInUserShoppingCartCommand;
