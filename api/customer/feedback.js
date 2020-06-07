const { CustomerFeedback } = require('../../types/Support')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: CustomerFeedback,
  response: {
    200: Base200Response
  }
}
