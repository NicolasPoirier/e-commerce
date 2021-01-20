'use strict';

module.exports = class {

  #dataSource;

  constructor(dataSource) {
    this.#dataSource = dataSource;
  }

  async getUserPassword(userId) {
    return await this.#dataSource.getUserPasswordByUserId(userId);
  }

  async getUserRoles(userId) {
    return await this.#dataSource.getUserRolesByUserId(userId);
  }
};
