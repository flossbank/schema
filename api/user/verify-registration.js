const { RecaptchaAuthentication } = require('../../types/Login')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: RecaptchaAuthentication,
  response: {
    200: Base200Response
  }
}
