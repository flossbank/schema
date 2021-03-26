const S = require('fluent-schema')
const { Base200WithData } = require('../../common/reply')
const { OrganizationId } = require('../../types/Organization')

module.exports = {
  query: S.object().prop('orgId', OrganizationId).required(),
  response: {
    200: Base200WithData('isOrgAdmin', S.boolean())
  }
}
