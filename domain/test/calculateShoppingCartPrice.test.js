import test from 'tape';
import calculateShoppingCartPrice from '../calculateShoppingCartPrice';

test('Calculate shopping cart price: sum(product quantity * product price)', (t) => {
  t.equal(calculateShoppingCartPrice({
    productQuantities: [{ id: 1, quantity: 1 }],
    productPrices: [{ id: 1, price: 1 }],
  }), 1);
  t.equal(calculateShoppingCartPrice({
    productQuantities: [{ id: 1, quantity: 2 }],
    productPrices: [{ id: 1, price: 1 }],
  }), 2);
  t.equal(calculateShoppingCartPrice({
    productQuantities: [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }],
    productPrices: [{ id: 1, price: 4 }, { id: 2, price: 3 }],
  }), 11);
  t.end();
});
