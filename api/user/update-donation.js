const S = require('fluent-schema')
const { UserUpdateDonation } = require('../../types/User')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: UserUpdateDonation,
  response: {
    200: Base200WithData('optOutOfAds', S.boolean())
  }
}
