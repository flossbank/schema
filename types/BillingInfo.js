const S = require('fluent-schema')

const BillingInfo = S.object()
  .description('Public properties of the Billing Info object')
  .prop(
    'cardOnFile',
    S.boolean().description('Whether we have a card on file')
  )
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

module.exports = { BillingInfo, BillingInfoUpdate, BillingInfoWithCustomerId }
