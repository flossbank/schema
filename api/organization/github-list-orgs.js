const S = require('fluent-schema')
const { OrganizationNames } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('organizations', OrganizationNames)
  }
}
