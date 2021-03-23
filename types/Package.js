const S = require('fluent-schema')
const { InstallPrivate } = require('./Install')
const { UserId } = require('./User')

const PackageMaintainer = S.object()
  .prop(
    'username',
    S.string()
  )
  .prop(
    'userId',
    UserId
  )
  .prop(
    'source',
    S.string().enum(['registry', 'invite'])
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
const PackageLanguage = S.string().enum(['javascript', 'ruby'])

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
    PackageLanguage
  )
  .prop(
    'registry',
    PackageRegistry
  )
  .prop(
    'avatarUrl',
    S.string().description('The avatar url of a github org')
  )
  .prop(
    'donationRevenue',
    S.number().description('Total amount donated to this package')
  )
  .prop(
    'adRevenue',
    S.number().description('Total amount raised through ads for this package')
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

CompaniesSupportingPackage = S.array()
  .description('List of companies that are supporting a package')
  .items(
    S.object()
      .prop(
        'organizationId',
        S.string().maxLength(128)
      )
      .prop(
        'contributionAmount',
        S.number()
      )
      .prop(
        'name',
        S.string()
      )
      .prop(
        'avatarUrl',
        S.string()
      )
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

const NpmOwnershipRequest = S.object()
  .prop(
    'readOnlyToken',
    S.string()
  ).required()

const RubyGemsOwnershipRequest = S.object()
  .prop(
    'readOnlyToken',
    S.string()
  ).required()
  .prop(
    'username',
    S.string()
  ).required()

module.exports = {
  PackageId,
  CompaniesSupportingPackage,
  PackageRegistry,
  PackageLanguage,
  PackagePublic,
  PackageMaintainer,
  PackageMaintainerProps,
  PackageUserProps,
  PackagePrivate,
  PackageUpdate,
  NpmOwnershipRequest,
  RubyGemsOwnershipRequest
}
