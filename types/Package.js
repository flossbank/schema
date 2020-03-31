const S = require('fluent-schema')
const { InstallPrivate } = require('./Install')
const { MaintainerId } = require('./Maintainer')

const PackageMaintainer = S.object()
  .prop(
    'maintainerId',
    MaintainerId
  )
  .prop(
    'revenuePercent',
    S.number()
      .default(0)
      .minimum(0)
      .maximum(100)
      .description('Denotes what percentage of the package revenue belongs to this maintainer. Stored as n*100.')
  )

const PackageRegistry = S.string().enum(['npm'])

const PackageId = S.string().maxLength(128)

const PackagePublic = S.object()
  .description('Package properties visible to authorized requesters')
  .prop('id', PackageId)
  .prop(
    'name',
    S.string().maxLength(128)
  )
  .prop(
    'maintainers',
    S.array().items(PackageMaintainer)
  )
  .prop(
    'owner',
    MaintainerId
  )
  .prop(
    'language',
    S.string()
  )
  .prop(
    'registry',
    PackageRegistry
  )
  .prop(
    'dividend',
    S.number().description('Dividend collected for this package (in microcents) in the current collection period')
  )
  .prop(
    'lastPayout',
    S.number().description('Timestamp of the last payout')
  )
  .prop(
    'totalRevenue',
    S.number().description('Sum of dividends (in microcents) across all collection periods')
  )

const PackagePrivate = S.object()
  .description('Package properties visible to Flossbank')
  .extend(PackagePublic)
  .prop(
    'installs',
    S.array().items(InstallPrivate)
  )

const PackageUpdate = S.object()
  .prop(
    'packageId',
    PackageId
  )
  .prop(
    'maintainers',
    S.array().items(PackageMaintainer)
  ).required()
  .prop(
    'owner',
    MaintainerId
  ).required()

module.exports = { PackageId, PackageRegistry, PackagePublic, PackagePrivate, PackageUpdate }
