const { UrlCreateRequest, UrlAlias } = require('../../types/Url')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: UrlCreateRequest,
  response: {
    200: Base200WithData('url', UrlAlias)
  }
}
