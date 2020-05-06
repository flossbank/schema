const S = require('fluent-schema')
// const { SessionId } = require('./Session')

const ImpressionPublic = S.object()
  .prop(
    'timestamp',
    S.number()
  )

const ImpressionPrivate = S.object()
  .extend(ImpressionPublic)
  .prop('sessionId', S.string())
  // .prop('sessionId', SessionId)

module.exports = { ImpressionPublic, ImpressionPrivate }
