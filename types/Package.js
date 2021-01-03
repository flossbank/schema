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

const PackageRegistry = S.string().enum(['npm', 'rubygems'])

const PackageId = S.string().maxLength(128)

const PackagePublic = S.object()
  .description('Package properties visible to the public')
  .prop('id', PackageId)
  .prop(
    'name',
    S.string().maxLength(128)
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
    'avatarUrl',
    S.string().description('The avatar url of a github org')
  )

const PackagePrivate = S.object()
  .description('Package properties visible to Flossbank')
  .extend(PackagePublic)
  .prop(
    'installs',
    S.array().items(InstallPrivate)
  )
  .prop(
    'lastPayout',
    S.number().description('Timestamp of the last payout')
  )

const PackageMaintainerProps = S.object()
  .description('Package properties visible to maintainers')
  .extend(PackagePublic)
  .prop(
    'maintainers',
    S.array().items(PackageMaintainer)
  )
  .prop(
    'owner',
    MaintainerId
  )

const PackageUserProps = S.object()
  .description('Package properties visible to users')
  .extend(PackagePublic)
  .prop(
    'installCount',
    S.number().description('Number of installations by a particular user')
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

module.exports = {
  PackageId,
  PackageRegistry,
  PackagePublic,
  PackageMaintainer,
  PackageMaintainerProps,
  PackageUserProps,
  PackagePrivate,
  PackageUpdate
}
