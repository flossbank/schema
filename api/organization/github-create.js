const { OrganizationPublic, GitHubOrganizationInstall } = require('../../types/Organization')
const { Base200WithData } = require('../../common/reply')

module.exports = {
  body: GitHubOrganizationInstall,
  response: {
    200: Base200WithData('organization', OrganizationPublic)
  }
}
