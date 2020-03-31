const { BasicLoginData } = require('../../types/Login')
const { Base200WithData } = require('../../common/reply')
const { AdvertiserPublic } = require('../../types/Advertiser')

module.exports = {
  body: BasicLoginData,
  response: {
    200: Base200WithData('advertiser', AdvertiserPublic)
  }
}
