const { NpmOwnershipRequest } = require('../../../types/Package')
const { Base200Response } = require('../../../common/reply')

module.exports = {
  body: NpmOwnershipRequest,
  response: {
    200: Base200Response
  }
}
