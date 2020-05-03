const { UserBillingInfoPublic } = require('../../types/user')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: UserBillingInfoPublic,
  response: {
    200: Base200Response
  }
}
