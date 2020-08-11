const S = require('fluent-schema')
const { BillingInfo, BillingInfoUpdate } = require('./BillingInfo')

const DonorId = S.string().maxLength(128)

const DonorCreateDonation = S.object()
  .extend(BillingInfoUpdate)
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents').required()
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem').required()
  )

const DonorUpdateDonation = S.object()
  .prop(
    'amount',
    S.number().description('The amount (if any) of a monthly donation in cents')
  )
  .prop(
    'globalDonation',
    S.boolean().description('Whether the donation should be specific to the code host or global to fb ecosystem').required()
  )

const DonorBillingInfoPrivate = S.object()
  .extend(BillingInfo)
  .prop(
    'lastCharge',
    S.number().description('The Unix timestamp of the last charge of the user\'s monthly donation (if any)')
  )
  .prop(
    'customerId',
    S.string().maxLength(128).description('The user\'s Stripe customer id')
  )

const DonorPublic = S.object()
  .prop('id', DonorId)
  .prop(
    'name',
    S.string().maxLength(128)
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
    'organization',
    S.string().maxLength(128)
  )
  .prop(
    'billingInfo',
    BillingInfo
  )

const DonorPrivate = S.object()
  .extend(DonorPublic)
  .prop(
    'billingInfo',
    UserBillingInfoPrivate
  )
  .prop(
    'active',
    S.boolean()
  )

const DonorMakeDonationGlobalRequest = S.object()
  .description('Properties required from donors to make their donation global or specific to a codeHost')
  .prop(
    'globalDonation',
    S.boolean().required()
  )

module.exports = {
  DonorPrivate,
  DonorMakeDonationGlobalRequest,
  DonorCreateDonation,
  DonorUpdateDonation,
  DonorPublic,
  DonorBillingInfoPublic,
  DonorBillingInfoPrivate
}
