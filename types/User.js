const S = require('fluent-schema')
const { BillingInfo, BillingInfoUpdate } = require('./BillingInfo')

const UserId = S.string().maxLength(128)
const UserInstallToken = S.string().maxLength(128)
const UserApiKey = S.string().maxLength(128)
const Username = S.string().minLength(3).maxLength(64).pattern('^\\w+$')
const IlpPointer = S.string().minLength(3).maxLength(128)

const UserInstallComplete = S.object()
  .prop(
    'token',
    UserInstallToken
  ).required()

// Orgs of a user
const UserOrganization = S.object()
  .prop(
    'organizationId',
    S.string().description('The organization id in the organization - user relationship')
  )
  .prop(
    'role',
    S.string().enum(['write', 'read'])
  )

const UserBillingInfoPublic = S.object()
  .extend(BillingInfo)
  .prop(
    'monthlyDonation',
    S.boolean().description('Whether the user has a donation associated to their account')
  )

const UserCreateDonation = S.object()
  .extend(BillingInfoUpdate)
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents').required()
  )
  .prop(
    'seeAds',
    S.boolean().description('Whether a user wants to see ads AND donate')
  )

const UserUpdateDonation = S.object()
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents')
  )
  .prop(
    'seeAds',
    S.boolean().description('Whether a user wants to see ads AND donate')
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
    'username',
    Username
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email')
  )
  .prop(
    'billingInfo',
    UserBillingInfoPublic
  )
  .prop(
    'organizations',
    S.array().items(UserOrganization)
  )
  .prop(
    'optOutOfAds',
    S.boolean().description('Whether or not the user has opted out of seeing ads (by donating).')
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
  .prop(
    'referralCode',
    S.string().maxLength(8)
  )

const UpdateUsername = S.object()
  .prop(
    'username',
    Username.required()
  )

const UpdateIlpPointer = S.object()
  .prop(
    'ilpPointer',
    IlpPointer.required()
  )

const UserOptOutRequest = S.object()
  .description('Properties required from clients to opt out of ads for a user')
  .prop(
    'optOutOfAds',
    S.boolean().required()
  )

const UserSessionDataPublic = S.object()
  .description('Properties regarding user session activity')
  .prop(
    'sessionCount',
    S.number().description('Number of sessions started by user')
  )

module.exports = {
  UserPrivate,
  UpdateIlpPointer,
  UserKeyPair,
  UpdateUsername,
  UserApiKey,
  UserInstallToken,
  UserInstallComplete,
  UserCreateDonation,
  UserUpdateDonation,
  UserPublic,
  UserRegistration,
  UserOptOutRequest,
  UserBillingInfoPublic,
  UserSessionDataPublic
}
