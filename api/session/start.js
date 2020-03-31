const S = require('fluent-schema')
const { SessionStartRequest, SessionStartId } = require('../../types/Session')
const { AdPublicUser } = require('../../types/Ad')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: SessionStartRequest,
  response: {
    200: Base200WithData(
      'ads', S.array().items(AdPublicUser),
      'sessionId', SessionStartId
    )
  }
}
