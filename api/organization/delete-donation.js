const S = require('fluent-schema')
const { Base200Response } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('organizationId', S.string().maxLength(128)).required(),
  response: {
    200: Base200Response
  }
}
