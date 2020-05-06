const S = require('fluent-schema')
const { ImpressionPublic } = require('./Impression')

const AdLongId = S.string().maxLength(128)
  .description('The Ad identifier used for viewers of ads (e.g. advertiserId_campaignId_adId)')

const AdShortId = S.string().maxLength(128)

const AdBase = S.object()
  .description('Base properties of an Ad')
  .prop(
    'title',
    S.string().maxLength(128).required()
  )
  .prop(
    'body',
    S.string().maxLength(256).required()
  )
  .prop(
    'url',
    S.string().maxLength(128).required()
  )

const AdCreateRequest = S.object()
  .description('Ad properties required to create a new ad')
  .extend(AdBase)
  .prop(
    'name',
    S.string().maxLength(128).required()
  )

const AdPublicUser = S.object()
  .description('Ad properties visible to users (e.g. of the CLI)')
  .extend(AdBase)
  .prop('id', AdLongId)

const AdPublicAdvertiser = S.object()
  .description('Ad properties visible to advertisers')
  .prop('id', AdShortId)
  .prop(
    'impressions',
    S.array().items(ImpressionPublic)
  )
  .extend(AdCreateRequest)

const AdDraftPublicAdvertiser = S.object()
  .description('All properties of an Ad Draft (as it may be returned to requesters)')
  .prop('id', AdShortId)
  .extend(AdBase)

module.exports = { AdPublicAdvertiser, AdPublicUser, AdDraftPublicAdvertiser, AdCreateRequest, AdShortId, AdLongId }
