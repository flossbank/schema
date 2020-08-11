const { CodeHostAccessTokenAuthentication } = require('../../types/Login')
const { DonorPublic } = require('../../types/Donor')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: CodeHostAccessTokenAuthentication,
  response: {
    200: Base200WithData('donor', DonorPublic)
  }
}
