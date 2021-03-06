const S = require('fluent-schema')
const { OrgDonationLedger, OrganizationId } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  querystring: S.object()
    .prop('organizationId', OrganizationId).required()
    .prop('sizeRequest', S.boolean())
    .prop('offset', S.integer().minimum(0))
    .prop('limit', S.integer().minimum(1)),
  response: {
    200: Base200WithData(
      'ledger', OrgDonationLedger,
      'ledgerSize', S.number())
  }
}
