const { AdvertiserPublic } = require('../../types/Advertiser')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('advertiser', AdvertiserPublic)
  }
}
