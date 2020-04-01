
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
    authenticate: require('./api/user/authenticate'),
    check: require('./api/user/check'),
    login: require('./api/user/login'),
    logout: require('./api/user/logout'),
    optOut: require('./api/user/opt-out'),
    register: require('./api/user/register'),
    validateCaptcha: require('./api/user/validate-captcha'),
    verify: require('./api/user/verify')
  }
}
