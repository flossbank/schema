const { UnsubscribeRequest } = require('../../types/Subscription')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UnsubscribeRequest,
  response: {
    200: Base200Response
  }
}
