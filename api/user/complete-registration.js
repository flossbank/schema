const { UserApiKey } = require('../../types/User')
const { PollRegistrationRequest } = require('../../types/Login')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: PollRegistrationRequest,
  response: {
    200: Base200WithData('apiKey', UserApiKey)
  }
}
