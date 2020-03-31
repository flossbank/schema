const { UserRegistration } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserRegistration,
  response: {
    200: Base200Response
  }
}
