table Ad {
  id: ID
  impressions: [impression_id]
  content: ad_content_id
  max_impressions: Int
  advertiser: advertiser_id
  cpm_value: Int
  ad_campaign: ad_campaign_id
}

table Impression {
  id: String
  ad: ad_id
  timestamp: Int
  session: session_id
}

table AdCampaign {
  id: String
  ads: [ad_id]
  max_spend: Int
  advertiser: advertiser_id
  disabled: Boolean
}

table Advertiser {
  id: String
  name: String
  email: String
  password: String
  ad_campaigns: [ad_campaign_id]
  billing_info: String
  active: Boolean
}

table Partner {
  id: String
  name: String
}

table Session {
  id: String
  user: user_id
  package_snapshot: [String]
  package_manager: String
  partner_id: partner_id
  started: Int
  ended: Int
}

table User {
  id: String
  email: String
  auth_token: String
}

table Package {
  id: String
  dividend: Int
  dividend_age: Int
  maintainers: [maintainer_id]
  owner: maintainer_id
}

table Maintainer {
  id: String
  name: String
  email: String
  password: String
  payout_email: String
  packagesMaintained: [package_id]
  packagesOwned: [package_id]
  active: Boolean
}

table MaintainerPackageRel {
  id: String
  maintainer: maintainer_id
  package: package_id
  revenue_percent: Int
}

table AdContent {
  id: String
  title: String
  body: String
  url: String
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
