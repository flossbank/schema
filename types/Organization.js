const S = require('fluent-schema')
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

const OrganizationCreateDonation = S.object()
  .extend(BillingInfoUpdate)
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents').required()
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem').required()
  )

const OrganizationUpdateDonation = S.object()
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents')
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
    'email',
    S.string().maxLength(128)
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

const OrganizationPrivate = S.object()
  .extend(OrganizationPublic)
  .prop(
    'billingInfo',
    OrganizationBillingInfoPrivate
  )

const OrganizationMakeDonationGlobalRequest = S.object()
  .description('Properties required from orgs to make their donation global or specific to a codeHost')
  .prop(
    'globalDonation',
    S.boolean().required()
  )

// Orgs of a user
const UserOrganization = S.object()
  .prop(
    'organizationId',
    S.string().description('The organization id in the organization - user relationship').required()
  )
  .prop(
    'role',
    S.string().enum(['write', 'read'])
  )

module.exports = {
  UserOrganization,
  OrganizationUser,
  OrganizationPrivate,
  OrganizationMakeDonationGlobalRequest,
  OrganizationCreateDonation,
  OrganizationUpdateDonation,
  OrganizationPublic,
  OrganizationBillingInfoPrivate
}
