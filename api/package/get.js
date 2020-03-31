const S = require('fluent-schema')
const { PackagePublic } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('packages', S.array().items(PackagePublic))
  }
}
