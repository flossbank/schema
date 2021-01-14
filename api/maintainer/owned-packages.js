const S = require('fluent-schema')
const { PackagePublic, PackageRegistry, PackageLanguage } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  query: S.object()
    .prop('registry', PackageRegistry)
    .prop('language', PackageLanguage),
  response: {
    200: Base200WithData('packages', S.array().items(PackagePublic))
  }
}
