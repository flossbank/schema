const { BasicLoginData } = require('../../types/Login')
const { Base200WithData } = require('../../common/reply')
const { MaintainerPublic } = require('../../types/Maintainer')

module.exports = {
  body: BasicLoginData,
  response: {
    200: Base200WithData('maintainer', MaintainerPublic)
  }
}
