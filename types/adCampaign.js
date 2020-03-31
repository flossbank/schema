const S = require('fluent-schema')
const { AdCreateRequest, AdPublicAdvertiser } = require('./Ad')

const AdCampaignId = S.string().maxLength(128)

const AdCampaignBase = S.object()
  .description('Base properties of an Ad Campaign (as may be required to create one)')
  .prop(
    'name',
    S.string().maxLength(128).required()
  )
  .prop(
    'cpm',
    S.number().minimum(500000).description('Cost per thousand impressions in microcents').required()
  )
  .prop(
    'maxSpend',
    S.number().minimum(500000).description('Maximum spend in microcents').required()
  )
  .prop(
    'ads',
    S.array().items(AdCreateRequest)
  )

const AdCampaignUpdate = S.object()
  .description('Properties of an Ad Campaign needed to complete an update operation')
  .extend(AdCampaignBase)
  .prop('id', AdCampaignId)

const AdCampaignPublic = S.object()
  .description('Properties of an Ad Campaign visible to advertisers')
  .extend(AdCampaignBase)
  .prop('id', AdCampaignId)
  .prop(
    'ads',
    S.array().items(AdPublicAdvertiser)
  )
  .prop(
    'createDate',
    S.number().description('Timestamp of campaign creation')
  )
  .prop(
    'startDate',
    S.number().description('Timestamp of campaign launch')
  )
  .prop(
    'endDate',
    S.number().description('Timestamp of campaign close')
  )
  .prop(
    'approved',
    S.boolean().description('Denotes whether or not the campaign was approved by Flossbank staff')
  )
  .prop(
    'active',
    S.boolean().description('Denotes whether or not the campaign\'s ads will be shown to users')
  )

module.exports = { AdCampaignId, AdCampaignPublic, AdCampaignBase, AdCampaignUpdate }
