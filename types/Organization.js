const S = require('fluent-schema')
const { CodeHostEnum } = require('./CodeHosts')
const { BillingInfo, BillingInfoUpdate } = require('./BillingInfo')

const OrganizationId = S.string().maxLength(128)

// Organization users
const OrganizationUser = S.object()
  .prop(
    'userId',
    S.string().description('The user ids that have a role within an org').required()
  )
  .prop(
    'role',
    S.string().enum(['write', 'read'])
  )

const OrgIdentifyingFields = S.object()
  .prop(
    'name',
    S.string().description('The name of organizations').required()
  )
  .prop(
    'host',
    CodeHostEnum.required()
  )
  .prop(
    'avatarUrl',
    S.string().description('The avatar url of a github org')
  )
  .prop(
    'id',
    S.string()
  )

const GitHubOrganizationInstall = S.object()
  .prop(
    'installationId',
    S.string().description('The installation ID returned from GitHub when a user installs the GH Flossbank App on their org').required()
  )

const OrganizationNames = S.array().items(OrgIdentifyingFields)

const OrganizationCreateDonation = S.object()
  .extend(BillingInfoUpdate)
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents').required()
  )
  .prop(
    'organizationId',
    OrganizationId.required()
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem')
  )

const OrganizationOssDetails = S.object()
  .prop(
    'timestamp',
    S.number().description('Timestamp of the latest snapshot of oss usage')
  )
  .prop(
    'topLevelDependencies',
    S.number().description('Number of top level dependencies in the last snapshot of oss usage')
  )
  .prop(
    'totalDependencies',
    S.number().description('Number of total dependencies in the last snapshot of oss usage')
  )

const OrganizationUpdateDonation = S.object()
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents')
  )
  .prop(
    'organizationId',
    OrganizationId.required()
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem').required()
  )

const OrganizationBillingInfoPrivate = S.object()
  .extend(BillingInfo)
  .prop(
    'lastCharge',
    S.number().description('The Unix timestamp of the last charge of the Organizations\'s monthly donation (if any)')
  )
  .prop(
    'customerId',
    S.string().maxLength(128).description('The Organizations\'s Stripe customer id')
  )

const OrganizationPublic = S.object()
  .prop('id', OrganizationId)
  .prop(
    'name',
    S.string().maxLength(128)
  )
  .prop(
    'host',
    CodeHostEnum
  )
  .prop(
    'email',
    S.string().maxLength(128)
  )
  .prop(
    'avatarUrl',
    S.string().description('The avatar url of a github org')
  )
  .prop(
    'users',
    S.array().items(OrganizationUser)
  )
  .prop(
    'donationAmount',
    S.number().description('The amount (if any) of a monthly donation in cents')
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem').required()
  )
  .prop(
    'billingInfo',
    BillingInfo
  )

const OrganizationUpdate = S.object()
  .prop(
    'organizationId',
    S.string().required()
  )
  .prop(
    'billingEmail',
    S.string().maxLength(128).required()
  )

const OrganizationPrivate = S.object()
  .extend(OrganizationPublic)
  .prop(
    'billingInfo',
    OrganizationBillingInfoPrivate
  )

module.exports = {
  OrganizationUser,
  OrganizationId,
  OrganizationOssDetails,
  OrgIdentifyingFields,
  OrganizationPrivate,
  OrganizationNames,
  OrganizationCreateDonation,
  OrganizationUpdateDonation,
  OrganizationPublic,
  OrganizationUpdate,
  OrganizationBillingInfoPrivate,
  GitHubOrganizationInstall
}
