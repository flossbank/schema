const S = require('fluent-schema')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('payout', S.number())
  }
}
