const S = require('fluent-schema')
const { UserCreateDonation } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: UserCreateDonation,
  response: {
    200: Base200WithData('optOutOfAds', S.boolean())
  }
}
