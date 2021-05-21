import test from 'tape';
import getUserShoppingCartPriceUsecase from '../../../shoppingCart/getUserShoppingCartPrice/getUserShoppingCartPrice.usecase';

test('Calculate user shopping cart price', async (t) => {
  const getUserShoppingCartPrice = getUserShoppingCartPriceUsecase({
    gateway: {
      getUserRoles: () => ['customer'],
      getProductQuantitiesInUserShoppingCart: () => [{ id: 1, quantity: 3 }],
      getProductPrice: () => ({ id: 1, price: 10 }),
    },
  });

  t.equal(await getUserShoppingCartPrice({ userId: 4, shoppingBagUserId: 4 }), 30);
});
