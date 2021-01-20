'use strict';

module.exports = class extends Error {

  constructor(message) {
    super(message);
    this.name = "IllegalArgumentError";
  }
};
