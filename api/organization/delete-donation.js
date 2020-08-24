const S = require('fluent-schema')
const { OrganizationId } = require('../../types/BillingInfo')
const { Base200Response } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('organizationId', OrganizationId).required(),
  response: {
    200: Base200Response
  }
}
