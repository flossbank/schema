const S = require('fluent-schema')

const PayoutInfo = S.object()
  .prop(
    'ilpPointer',
    S.string().maxLength(256).description('Ilp pointer')
  )

const PayoutInfoUpdate = S.object()
  .prop('payoutInfo', S.string().maxLength(256)).required()

module.exports = { PayoutInfo, PayoutInfoUpdate }
