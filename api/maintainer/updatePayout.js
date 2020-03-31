const { PayoutInfoUpdate } = require('../../types/PayoutInfo')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: PayoutInfoUpdate,
  response: {
    200: Base200Response
  }
}
