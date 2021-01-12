const { OrganizationCreateDonation } = require('../../types/Organization')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: OrganizationCreateDonation,
  response: {
    200: Base200Response
  }
}
