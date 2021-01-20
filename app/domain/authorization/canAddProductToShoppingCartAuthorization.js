'use strict';

const Role = require('../Role');

module.exports = function (user, shoppingCart) {
  return user.roles.includes(Role.CUSTOMER) && user.id === shoppingCart.userId;
};
