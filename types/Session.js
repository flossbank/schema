const S = require('fluent-schema')
const { AdLongId } = require('./Ad')

const TopLevelPackage = S.string().maxLength(128)

const SessionStartId = S.string().maxLength(128)

const SessionId = S.string().maxLength(128)

const SessionMetadata = S.object()
  .prop('packageManagerVersion', S.string().maxLength(128))
  .prop('flossbankVersion', S.string().maxLength(128))

const SessionBase = S.object()
  .description('Base properties of a session')
  .prop(
    'packages',
    S.array().items(TopLevelPackage).description('A list of top-level packages installed during this session')
  )
  .prop(
    'language',
    S.string().description('Language of the packages installed, e.g. JavaScript or Rust')
  )
  .prop(
    'registry',
    S.string().description('The raw package registry used during this session')
  )
  .prop(
    'metadata',
    SessionMetadata
  )
const SessionStartRequest = S.object()
  .description('Properties of a session that may be sent up when starting')
  .prop(
    'sessionId',
    SessionStartId
  )

const SessionCompleteRequest = S.object()
  .description('Properties of a session required to complete it')
  .extend(SessionBase)
  .prop(
    'seen',
    S.array().items(AdLongId)
  ).required()
  .prop(
    'sessionId',
    SessionStartId
  ).required()

const SessionPrivate = S.object()
  .description('Properties of a session visible to Flossbank')
  .extend(SessionBase)
  .prop(
    'id',
    SessionId
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'started',
    S.number().description('Timestamp of session start')
  )
  .prop(
    'ended',
    S.number().description('Timestamp of session complete')
  )

module.exports = { SessionCompleteRequest, SessionStartRequest, SessionPrivate, SessionId, SessionStartId }
