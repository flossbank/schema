const { MaintainerPublic } = require('../../types/Maintainer')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  response: {
    200: Base200WithData('maintainer', MaintainerPublic)
  }
}
