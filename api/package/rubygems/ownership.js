const { RubyGemsOwnershipRequest } = require('../../../types/Package')
const { Base200Response } = require('../../../common/reply')

module.exports = {
  body: RubyGemsOwnershipRequest,
  response: {
    200: Base200Response
  }
}
