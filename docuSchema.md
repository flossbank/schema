Collection Ads {
  id: ID
  impressions: [impression_id]
  content: {
    title: String
    body: String
    url: String
  }
  max_impressions: Int
  advertiser_id: advertiser_id
  cpm_value: Int
  ad_campaign_id: ad_campaign_id
}

Collection Impression {
  id: String
  ad: ad_id
  timestamp: Int
  session: session_id
}

Collection AdCampaign {
  id: String
  ads: [ad_id]
  max_spend: Int
  advertiser_id: advertiser_id
  disabled: Boolean
}

Collection Advertiser {
  id: String
  name: String
  email: String
  password: String
  ad_campaigns: [ad_campaign_id]
  billing_info: String
  active: Boolean
}

Collection Partner {
  id: String
  name: String
}

Collection Session {
  id: String
  user: user_id
  package_snapshot: [String]
  package_manager: String
  partner_id: partner_id
  started: Int
  ended: Int
}

Collection User {
  id: String
  email: String
  auth_token: String
}

Collection Package {
  id: String
  dividend: Int
  dividend_age: Int
  maintainers: [maintainer_id]
  owner: maintainer_id
}

Collection Maintainer {
  id: String
  name: String
  email: String
  password: String
  payout_email: String
  packagesMaintained: [package_id]
  packagesOwned: [package_id]
  active: Boolean
}

Collection MaintainerPackageRel {
  id: String
  maintainer_id: maintainer_id
  package_id: package_id
  revenue_percent: Int
}

Queries {
  availableAds: [Ad]
  packagesByMaintainer: [Package]
  allAdsByAdvertiser: [Ad]
  allAdsByCampaign: [Ad]
  dividendByPackage: Int
  revenueByMaintainer: Int
  impressionsByCampaign: [Impression]
  impressionByAd: [Impression]
  spendPerAd: Int
  spendPerCampaign: Int
  revenueByPartner: Int
}
