const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({ secret: 'YOUR_FAUNADB_SECRET' })

// availableAds: [Ad!]!
client.query(q.Collection('ad'))
  .then((ret) => console.log(ret))

// packagesByMaintainer: [Package!]!
client.query(
  q.CreateIndex(
    { name: "all_maintainer_email",
      source: q.Collection("maintainer"),
      values: [{ field: ["data", "email"] }] }))
.then((ret) => console.log(ret))

client.query(q.Collection('maintainer'))
// allAdsByAdvertiser: [Ad!]!
// allAdsByCampaign: [Ad!]!
// dividendByPackage: Int!
// revenueByMaintainer: Int!
// impressionsByCampaign: [Impression!]!
// impressionByAd: [Impression!]!
// spendPerAd: Int!
// spendPerCampaign: Int!
// revenueByPartner: Int!