const S = require('fluent-schema')
const { PackageUserProps } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('installedPackages', S.array().items(PackageUserProps))
  }
}
