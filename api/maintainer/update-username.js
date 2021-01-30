const { UpdateUsername } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UpdateUsername,
  response: {
    200: Base200Response
  }
}
