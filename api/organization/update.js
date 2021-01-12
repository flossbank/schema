const { OrganizationUpdate } = require('../../types/Organization')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: OrganizationUpdate,
  response: {
    200: Base200Response
  }
}
