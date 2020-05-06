const S = require('fluent-schema')
const { BillingInfoUpdate } = require('./BillingInfo')

const UserId = S.string().maxLength(128)
const UserApiKey = S.string().maxLength(128)
const UserRegistrationPollingToken = S.string().maxLength(128)

const UserBillingInfoPublic = S.object()
  .extend(BillingInfoUpdate)
  .prop(
    'monthlyDonation',
    S.number().description('The amount (if any) of a monthly donation in cents')
  )

const UserBillingInfoPrivate = S.object()
  .extend(UserBillingInfoPublic)
  .prop(
    'lastCharge',
    S.number().description('The Unix timestamp of the last charge of the user\'s monthly donation (if any)')
  )
  .prop(
    'customerId',
    S.string().maxLength(128).description('The user\'s Stripe customer id')
  )

const UserPublic = S.object()
  .prop('id', UserId)
  .prop(
    'name',
    S.string().maxLength(128)
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email')
  )
  .prop(
    'billingInfo',
    UserBillingInfoPublic
  )

const UserPrivate = S.object()
  .extend(UserPublic)
  .prop(
    'apiKey',
    UserApiKey
  )
  .prop(
    'billingInfo',
    UserBillingInfoPrivate
  )
  .prop(
    'active',
    S.boolean()
  )

const UserKeyPair = S.object()
  .prop('email', S.string().maxLength(128).format('email')).required()
  .prop('apiKey', UserApiKey).required()

const UserRegistration = S.object()
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )

const UserOptOutRequest = S.object()
  .description('Properties required from clients to opt out of ads for a user')
  .prop(
    'optOutOfAds',
    S.boolean().required()
  )

module.exports = { UserPrivate, UserKeyPair, UserApiKey, UserPublic, UserRegistration, UserRegistrationPollingToken, UserOptOutRequest, UserBillingInfoPublic }
