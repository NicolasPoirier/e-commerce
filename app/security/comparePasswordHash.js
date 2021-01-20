'use strict';

const bcrypt = require('bcrypt');

module.exports = async function (password, hash) {
  return bcrypt.compare(password, hash);
};
