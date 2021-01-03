
module.exports = {
  ad: {
    create: require('./api/ad/create')
  },
  adCampaign: {
    activate: require('./api/adCampaign/activate'),
    create: require('./api/adCampaign/create'),
    getAll: require('./api/adCampaign/get-all'),
    get: require('./api/adCampaign/get'),
    update: require('./api/adCampaign/update')
  },
  advertiser: {
    get: require('./api/advertiser/get'),
    login: require('./api/advertiser/login'),
    logout: require('./api/advertiser/logout'),
    register: require('./api/advertiser/register'),
    updateBilling: require('./api/advertiser/updateBilling'),
    verify: require('./api/advertiser/verify')
  },
  maintainer: {
    get: require('./api/maintainer/get'),
    login: require('./api/maintainer/login'),
    logout: require('./api/maintainer/logout'),
    register: require('./api/maintainer/register'),
    revenue: require('./api/maintainer/revenue'),
    updatePayout: require('./api/maintainer/updatePayout'),
    verify: require('./api/maintainer/verify')
  },
  package: {
    searchByName: require('./api/package/search-by-name'),
    get: require('./api/package/get'),
    refresh: require('./api/package/refresh'),
    update: require('./api/package/update')
  },
  session: {
    start: require('./api/session/start'),
    complete: require('./api/session/complete')
  },
  subscribe: {
    betaSubscribe: require('./api/subscribe/betaSubscribe'),
    betaUnsubscribe: require('./api/subscribe/betaUnsubscribe')
  },
  url: {
    create: require('./api/url/create')
  },
  user: {
    completeLogin: require('./api/user/complete-login'),
    requestLogin: require('./api/user/request-login'),
    logout: require('./api/user/logout'),
    register: require('./api/user/register'),
    newInstall: require('./api/user/new-install'),
    completeInstall: require('./api/user/complete-install'),
    updateBilling: require('./api/user/update-billing'),
    verifyRegistration: require('./api/user/verify-registration'),
    createDonation: require('./api/user/create-donation'),
    updateDonation: require('./api/user/update-donation'),
    deleteDonation: require('./api/user/delete-donation'),
    getInstalledPackages: require('./api/user/get-installed-packages'),
    getDonationInfo: require('./api/user/get-donation-info'),
    getSessions: require('./api/user/get-sessions'),
    resumeSession: require('./api/user/resume'),
    githubAuth: require('./api/user/github-auth')
  },
  stripe: {
    webhooks: require('./api/stripe/webhook-event')
  },
  support: {
    feedback: require('./api/customer/feedback')
  },
  organization: {
    githubAuth: require('./api/organization/github-auth'),
    githubCreate: require('./api/organization/github-create'),
    chooseOrg: require('./api/organization/choose'),
    createDonation: require('./api/organization/create-donation'),
    updateDonation: require('./api/organization/update-donation'),
    deleteDonation: require('./api/organization/delete-donation'),
    getDonationInfo: require('./api/organization/get-donation-info'),
    getOssUsage: require('./api/organization/get-oss-usage'),
    getByName: require('./api/organization/get-by-name')
  }
}
