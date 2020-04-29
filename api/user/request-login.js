const { MagicLinkRequest, MagicLinkResponse } = require('../../types/Login')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: MagicLinkRequest,
  response: {
    200: Base200WithData('code', MagicLinkResponse)
  }
}
