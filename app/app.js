"use strict";

const dependencyContainer = require("./di/dependencyContainer");
const Server = require("./webservice/Server");
const config = require('./config/config');

new Server(config.port, config.host, dependencyContainer).start();

process.on("unhandledRejection", e => {
  console.log(`Uncaught Rejection: ${e.message}`);
  process.exit(1);
});

process.on('uncaughtException', e => {
  console.log(`Uncaught Exception: ${e.message}`);
  process.exit(1);
});
