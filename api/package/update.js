const { PackageUpdate } = require('../../types/Package')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: PackageUpdate,
  response: {
    200: Base200Response
  }
}
