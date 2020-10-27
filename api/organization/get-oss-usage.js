const S = require('fluent-schema')
const { OrganizationOssDetails, OrganizationId } = require('../../types/organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('organizationId', OrganizationId).required(),
  response: {
    200: Base200WithData('details', OrganizationOssDetails)
  }
}
