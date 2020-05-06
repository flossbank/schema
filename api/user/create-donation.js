const { UserCreateDonation } = require('../../types/user')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserCreateDonation,
  response: {
    200: Base200Response
  }
}
