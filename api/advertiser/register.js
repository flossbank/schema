const S = require('fluent-schema')
const { AdvertiserBaseWithPassword } = require('../../types/Advertiser')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: S.object().prop('advertiser', AdvertiserBaseWithPassword).required(),
  response: {
    200: Base200Response
  }
}
