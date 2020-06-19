const S = require('fluent-schema')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('amount', S.number(), 'last4', S.string().maxLength(4), 'renewal', S.number())
  }
}
