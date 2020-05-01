const { BillingInfoUpdate } = require('../../types/BillingInfo')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: BillingInfoUpdate,
  response: {
    200: Base200Response
  }
}
