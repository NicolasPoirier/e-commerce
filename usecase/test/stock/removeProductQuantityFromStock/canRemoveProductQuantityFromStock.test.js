import test from 'tape';
import canRemoveProductQuantityFromStock from '../../../stock/removeProductQuantityFromStock/canRemoveProductQuantityFromStock';

test('User with the role stock manager can remove product quantity from stock', (t) => {
  t.equal(canRemoveProductQuantityFromStock({ userRoles: ['stock manager'] }), true);
  t.equal(canRemoveProductQuantityFromStock({ userRoles: ['customer'] }), false);
  t.end();
});
