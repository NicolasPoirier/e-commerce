'use strict';

module.exports = class {

  id;
  roles;

  constructor(id, roles = []) {
    this.id = id;
    this.roles = roles;
  }
};
