const { CodeHostAuthentication } = require('../../types/Login')
const { UserPublic } = require('../../types/User')
const { OrganizationNames } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: CodeHostAuthentication,
  response: {
    200: Base200WithData('user', UserPublic)
  }
}
