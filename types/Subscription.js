const S = require('fluent-schema')

const SubscribeRequest = S.object()
  .prop(
    'email',
    S.string().maxLength(128).format('email')
  ).required()

const UnsubscribeRequest = S.object()
  .prop(
    'token',
    S.string().minLength(64).maxLength(64)
  ).required()

module.exports = { SubscribeRequest, UnsubscribeRequest }
