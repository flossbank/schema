const S = require('fluent-schema')
const { OrgDonationInfoPublic, OrganizationId } = require('../../types/BillingInfo')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('organizationId', OrganizationId).required(),
  response: {
    200: Base200WithData('donationInfo', OrgDonationInfoPublic)
  }
}
