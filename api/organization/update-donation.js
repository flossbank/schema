const { OrganizationUpdateDonation } = require('../../types/Organization')
const { Base200Response } = require('../../common/reply')

module.exports = {
  body: OrganizationUpdateDonation,
  response: {
    200: Base200Response
  }
}
