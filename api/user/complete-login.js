const { MagicLinkAuthentication } = require('../../types/Login')
const { UserPublic } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: MagicLinkAuthentication,
  response: {
    200: Base200WithData('user', UserPublic)
  }
}
