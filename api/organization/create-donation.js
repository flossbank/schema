const S = require('fluent-schema')
const { OrganizationCreateDonation } = require('../../types/User')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: OrganizationCreateDonation,
  response: {
    200: Base200Response
  }
}
