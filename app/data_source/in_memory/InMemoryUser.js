'use strict';

module.exports = class {

  id;
  password;
  roles;

  constructor(id, password, roles) {
    this.id = id;
    this.password = password;
    this.roles = roles;
  }
};
