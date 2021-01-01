const S = require('fluent-schema')
const { OrganizationPublic } = require('../../types/Organization')
const { CodeHostEnum } = require('../../types/CodeHosts')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object()
    .prop(
      'name',
      S.string()
        .pattern("^[a-zA-Z0-9-]+$") // only alphanumeric + hyphens allowed
        .maxLength(128)
    ).required()
    .prop('host', CodeHostEnum).required(),
  response: {
    200: Base200WithData('organizations', S.array().items(OrganizationPublic))
  }
}
