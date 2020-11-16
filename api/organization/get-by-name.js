const S = require('fluent-schema')
const { OrganizationPublic } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object()
    .prop('name', S.string().maxLength(128)).prop('host', S.string().maxLength(128)).required(),
  response: {
    200: Base200WithData('organization', OrganizationPublic)
  }
}
