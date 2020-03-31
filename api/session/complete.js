const { SessionCompleteRequest } = require('../../types/Session')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: SessionCompleteRequest,
  response: {
    200: Base200Response
  }
}
