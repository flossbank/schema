const S = require('fluent-schema')
const { PackagePublic } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object()
    .prop(
      'name',
      S.string()
        .pattern("^[a-zA-Z0-9-]+$") // only alphanumeric + hyphens allowed
        .maxLength(128)
    ).required(),
  response: {
    200: Base200WithData('packages', S.array().items(PackagePublic))
  }
}
