const S = require('fluent-schema')

const PayoutInfo = S.string()
  .maxLength(256)
  .description('TBD; probably an email address for payout')

const PayoutInfoUpdate = S.object()
  .prop('payoutInfo', PayoutInfo).required()

module.exports = { PayoutInfo, PayoutInfoUpdate }
