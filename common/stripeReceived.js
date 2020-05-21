const S = require('fluent-schema')

const Stripe200Response = S.object()
  .prop(
    'received',
    S.boolean()
  )

module.exports = { Stripe200Response }
