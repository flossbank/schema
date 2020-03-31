const S = require('fluent-schema')
const { AdCampaignId, AdCampaignPublic } = require('../../types/AdCampaign')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('adCampaignId', AdCampaignId).required(),
  response: {
    200: Base200WithData('adCampaign', AdCampaignPublic)
  }
}
