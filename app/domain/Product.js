'use strict';

module.exports = class {

  id;
  name;
  price;
  stock;

  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
};
