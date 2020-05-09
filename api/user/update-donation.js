const { UserUpdateDonation } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserUpdateDonation,
  response: {
    200: Base200Response
  }
}
