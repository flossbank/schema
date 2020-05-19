const { UserApiKey, UserInstallComplete } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: UserInstallComplete,
  response: {
    200: Base200WithData('apiKey', UserApiKey)
  }
}
