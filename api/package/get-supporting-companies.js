const S = require('fluent-schema')
const { CompaniesSupportingPackage, PackageId } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('id', PackageId).required(),
  response: {
    200: Base200WithData('companies', CompaniesSupportingPackage)
  }
}
