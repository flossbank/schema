const S = require('fluent-schema')

const CodeHostEnum = S.string()
  .enum(['GitHub'])
  .description('The code host of the list of organizations')

module.exports = {
  CodeHostEnum
}