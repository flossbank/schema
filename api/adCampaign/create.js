const S = require('fluent-schema')
const { AdCampaignBase } = require('../../types/AdCampaign')
const { AdShortId } = require('../../types/Ad')
const { Creation200Response } = require('../../common/reply')

module.exports = {
  body: S.object()
    .prop('adCampaign', AdCampaignBase).required()
    .prop('adDrafts', S.array().items(AdShortId))
    .prop('keepDrafts', S.boolean()),
  response: {
    200: Creation200Response
  }
}
