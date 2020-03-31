const { UserApiKey } = require('../../types/User')
const { RecaptchaAuthentication } = require('../../types/Login')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: RecaptchaAuthentication,
  response: {
    200: Base200WithData('apiKey', UserApiKey)
  }
}
