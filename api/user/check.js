const { UserKeyPair } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserKeyPair,
  response: {
    200: Base200Response
  }
}
