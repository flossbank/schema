const S = require('fluent-schema')

const BillingInfo = S.object()
  .description('Public properties of the Billing Info object')
  .prop(
    'last4',
    S.string().maxLength(4).description('Last 4 digits of the credit card on file (if present)')
  )

const BillingInfoWithCustomerId = S.object()
  .extend(BillingInfo)
  .prop(
    'customerId',
    S.string().maxLength(128).description('The stripe customer id')
  )

const BillingInfoUpdate = S.object()
  .prop(
    'billingToken',
    S.string().maxLength(128).required()
  )
  .prop(
    'last4',
    S.string().maxLength(4).required()
  )

const DonationInfoPublic = S.object()
  .extend(BillingInfo)
  .prop(
    'amount',
    S.number().description('Amount of current donation')
  )
  .prop(
    'renewal',
    S.number().description('Next charge date in milliseconds timestamp')
  )

module.exports = { BillingInfo, BillingInfoUpdate, BillingInfoWithCustomerId, DonationInfoPublic }
