require('dotenv').config();

/* eslint-disable no-undef */
const { PORT, SECRET } = process.env;

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
/* eslint-enable no-undef */

module.exports = {
  PORT,
  SECRET,
  MONGODB_URI,
};
