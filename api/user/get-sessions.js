const S = require('fluent-schema')
const { UserSessionDataPublic } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('userSessionData', UserSessionDataPublic)
  }
}
