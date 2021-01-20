const dotenv = require('dotenv');

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOST || '0.0.0.0',
  
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInSecond: process.env.JWT_EXPIRATION_IN_SECOND
};
