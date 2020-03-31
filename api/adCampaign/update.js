const S = require('fluent-schema')
const { AdCampaignUpdate } = require('../../types/AdCampaign')
const { AdShortId } = require('../../types/Ad')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: S.object()
    .prop('adCampaign', AdCampaignUpdate).required()
    .prop('adDrafts', S.array().items(AdShortId))
    .prop('keepDrafts', S.boolean()),
  response: {
    200: Base200Response
  }
}
