/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
//https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb
'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
exports.createPages = require('./gatsby-node/index').createPages //ts entry point