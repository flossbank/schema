const { UpdateIlpPointer } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UpdateIlpPointer,
  response: {
    200: Base200Response
  }
}
