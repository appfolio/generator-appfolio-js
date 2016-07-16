'use strict';
const utils = require('../../utils/yeoman');

module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'Application name',
    default: utils.getAppName()
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author name',
    default: 'AppFolio Inc.'
  }
];
