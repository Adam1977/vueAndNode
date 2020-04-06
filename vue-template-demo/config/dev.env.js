'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API1: '"/api1"',
  API2: '"/api2"',
  VUE_APP_BASE_API: '"http://127.0.0.1:3000"'
  // VUE_APP_BASE_API: '"/dev-api"'
})
