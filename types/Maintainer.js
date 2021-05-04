const S = require('fluent-schema')
const { PayoutInfo } = require('./PayoutInfo')

const MaintainerBase = S.object()
  .description('Base properties of a Maintainer (as may be required to create one)')
  .prop(
    'firstName',
    S.string().maxLength(128).required()
  )
  .prop(
    'lastName',
    S.string().maxLength(128).required()
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'payoutInfo',
    PayoutInfo
  )

module.exports = { MaintainerBase }
