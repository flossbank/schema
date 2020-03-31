const S = require('fluent-schema')
const { MaintainerBaseWithPassword } = require('../../types/Maintainer')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: S.object().prop('maintainer', MaintainerBaseWithPassword).required(),
  response: {
    200: Base200Response
  }
}
