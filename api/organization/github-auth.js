const S = require('fluent-schema')
const { CodeHostAuthentication } = require('../../types/Login')
const { OrganizationNames } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: CodeHostAuthentication,
  response: {
    200: Base200WithData('organizations', OrganizationNames, 'created', S.boolean())
  }
}
