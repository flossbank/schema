const S = require('fluent-schema')

const UrlCreateRequest = S.object()
  .prop(
    'url',
    S.string()
  ).required()

const UrlAlias = S.string()

module.exports = { UrlCreateRequest, UrlAlias }
