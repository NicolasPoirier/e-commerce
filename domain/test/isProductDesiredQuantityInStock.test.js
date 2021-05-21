import test from 'tape';
import isProductQuantityInStock from '../isProductQuantityInStock';

test('Check that product quantity is in stock', (t) => {
  t.equal(isProductQuantityInStock({ quantity: 1, stock: 1 }), true);
  t.equal(isProductQuantityInStock({ quantity: 1, stock: 0 }), false);
  t.end();
});
