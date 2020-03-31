const { VerifyData } = require('../../types/Login')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: VerifyData,
  response: {
    200: Base200Response
  }
}
