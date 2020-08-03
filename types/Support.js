const S = require('fluent-schema')

const CustomerFeedback = S.object()
  .description('')
  .prop(
    'topic',
    S.string().maxLength(128).required()
  )
  .prop(
    'body',
    S.string().maxLength(1028).required()
  )
  .prop(
    'name',
    S.string().maxLength(128).required()
  )
  .prop(
    'email',
    S.string().maxLength(128).required()
  )

module.exports = {
  CustomerFeedback,
}
