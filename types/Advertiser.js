const S = require('fluent-schema')
const { AdCampaignPublic } = require('./adCampaign')
const { BillingInfo } = require('./BillingInfo')
const { AdDraftPublicAdvertiser } = require('./ad')

const AdvertiserId = S.string().maxLength(128)

const AdvertiserBase = S.object()
  .description('Base properties of an Advertiser (as may be required to create one)')
  .prop(
    'firstName',
    S.string().maxLength(128).required()
  )
  .prop(
    'lastName',
    S.string().maxLength(128).required()
  )
  .prop(
    'organization',
    S.string().maxLength(128)
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )

const AdvertiserBaseWithPassword = S.object()
  .extend(AdvertiserBase)
  .prop(
    'password',
    // eslint-disable-next-line no-useless-escape
    S.string().maxLength(128).pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})').required()
  )

const AdvertiserPublic = S.object()
  .description('All properties of an Advertiser (as it may be returned to requesters)')
  .extend(AdvertiserBase)
  .prop('id', AdvertiserId)
  .prop('billingInfo', BillingInfo)
  .prop('adCampaigns', S.array().items(AdCampaignPublic))
  .prop('adDrafts', S.array().items(AdDraftPublicAdvertiser))
  .prop('active', S.boolean().description('Denotes whether or not the account can be used'))
  .prop('verified', S.boolean().description('Denotes whether or not the account owner has been verified as human'))

module.exports = { AdvertiserId, AdvertiserBase, AdvertiserBaseWithPassword, AdvertiserPublic }
