const { SubscribeRequest } = require('../../types/Subscription')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: SubscribeRequest,
  response: {
    200: Base200Response
  }
}
