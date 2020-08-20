const { OrgIdentifyingFields, OrganizationPublic } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: OrgIdentifyingFields,
  response: {
    200: Base200WithData('organization', OrganizationPublic)
  }
}
