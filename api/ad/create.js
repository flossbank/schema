const { AdCreateRequest } = require('../../types/Ad')
const { Creation200Response } = require('../../common/reply')

module.exports = {
  body: AdCreateRequest,
  response: {
    200: Creation200Response
  }
}
