const S = require('fluent-schema')
const { PayoutInfo } = require('./PayoutInfo')

const MaintainerId = S.string().maxLength(128)

const MaintainerBase = S.object()
  .description('Base properties of a Maintainer (as may be required to create one)')
  .prop(
    'firstName',
    S.string().maxLength(128).required()
  )
  .prop(
    'lastName',
    S.string().maxLength(128).required()
  )
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'payoutInfo',
    PayoutInfo
  )

const MaintainerBaseWithPassword = S.object()
  .extend(MaintainerBase)
  .prop(
    'password',
    // eslint-disable-next-line no-useless-escape
    S.string().maxLength(128).pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})').required()
  )

const MaintainerPublic = S.object()
  .description('All properties of a Maintainer (as it may be returned to requesters)')
  .extend(MaintainerBase)
  .prop('id', MaintainerId)
  .prop('active', S.boolean().description('Denotes whether or not the account can be used'))
  .prop('verified', S.boolean().description('Denotes whether or not the account owner has been verified as human'))

const MaintainerRevenue = S.number().description('The total dividends awarded to the maintainer')

module.exports = { MaintainerId, MaintainerBase, MaintainerBaseWithPassword, MaintainerPublic, MaintainerRevenue }
