const S = require('fluent-schema')
const { DonationInfoPublic } = require('../../types/BillingInfo')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('organizationId', S.string().maxLength(128)).required(),
  response: {
    200: Base200WithData('donationInfo', DonationInfoPublic)
  }
}
