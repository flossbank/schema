const { CodeHostAuthentication } = require('../../types/Login')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: CodeHostAuthentication,
  response: {
    200: Base200Response
  }
}
