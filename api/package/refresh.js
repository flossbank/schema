const S = require('fluent-schema')
const { PackageRegistry } = require('../../types/Package')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: S.object().prop('packageRegistry', PackageRegistry).required(),
  response: {
    200: Base200Response
  }
}
