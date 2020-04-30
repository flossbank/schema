const { UserRegistration, UserRegistrationPollingToken } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: UserRegistration,
  response: {
    200: Base200WithData('pollingToken', UserRegistrationPollingToken)
  }
}
