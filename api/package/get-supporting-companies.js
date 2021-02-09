const S = require('fluent-schema')
const { CompaniesSupportingPackage } = require('../../types/Package')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object().prop('id', S.string()).required(),
  response: {
    200: Base200WithData('companies', CompaniesSupportingPackage)
  }
}
