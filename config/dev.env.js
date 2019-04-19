'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
//  BASE_API: '"http://192.168.1.170:8080"'
//  BASE_API: '"http://192.168.1.152:8080"'
    BASE_API: '"http://2b3665801a.51mypc.cn:20626"'
//  BASE_API: '"http://192.168.1.119:8080"'
//  BASE_API: '"http://192.168.1.115:8080"'
})