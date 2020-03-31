const S = require('fluent-schema')
const { SessionId } = require('./Session')

const InstallPublic = S.object()
  .description('Install properties visible to authorized requesters')
  .prop(
    'timestamp',
    S.number()
  )
  .prop(
    'count',
    S.number().description('The number of times this package was installed during the session')
  )

const InstallPrivate = S.object()
  .description('Install properties visible to Flossbank')
  .extend(InstallPublic)
  .prop('sessionId', SessionId)

module.exports = { InstallPrivate, InstallPublic }
