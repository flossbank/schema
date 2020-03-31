const S = require('fluent-schema')
const { AdCampaignId } = require('../../types/AdCampaign')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: S.object().prop('adCampaignId', AdCampaignId).required(),
  response: {
    200: Base200Response
  }
}
