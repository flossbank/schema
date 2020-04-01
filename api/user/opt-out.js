const { UserOptOutRequest } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserOptOutRequest,
  response: {
    200: Base200Response
  }
}
