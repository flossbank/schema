const S = require('fluent-schema')
const { Base200WithData } = require('../../common/reply')
const { AdCampaignPublic } = require('../../types/AdCampaign')

module.exports = {
  response: {
    200: Base200WithData('adCampaigns', S.array().items(AdCampaignPublic))
  }
}
