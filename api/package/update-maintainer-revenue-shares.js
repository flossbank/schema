const { PackageUpdateMaintainerRevenueShares } = require('../../types/Package')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: PackageUpdateMaintainerRevenueShares,
  response: {
    200: Base200Response
  }
}
