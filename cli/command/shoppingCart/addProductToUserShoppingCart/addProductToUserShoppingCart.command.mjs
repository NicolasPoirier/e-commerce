import { addProductToUserShoppingCart } from '../../../di/dependencyContainer';

async function addProductToUserShoppingCartCommand({ args }) {
  // TODO parse args and execute usecase
  await addProductToUserShoppingCart({});
}

export default addProductToUserShoppingCartCommand;
