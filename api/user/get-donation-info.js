const { DonationInfoPublic } = require('../../types/BillingInfo')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('donationInfo', DonationInfoPublic)
  }
}
