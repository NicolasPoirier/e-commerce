'use strict';

const UnauthorizedUserError = require('../../error/UnauthorizedUserError');
const UserLoginInformation = require('./UserLoginInformation');

module.exports = class {

  #loginGateway;
  #comparePasswordHash;

  constructor(loginGateway, comparePasswordHash) {
    this.#loginGateway = loginGateway;
    this.#comparePasswordHash = comparePasswordHash;
  }

  async execute(username, password) {
    const userPassword = await this.#loginGateway.getUserPassword(username);

    if(userPassword && await this.#comparePasswordHash(password, userPassword)) {
      const roles = await this.#loginGateway.getUserRoles(username);
      return new UserLoginInformation(username, roles);
    } else {
      throw new UnauthorizedUserError("Cannot login");
    }
  }
};
