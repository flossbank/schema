import AdCampaign from '../types/adCampaign'
import AdDraft from '../types/adDraft'

export const Advertiser = {
  title: 'Advertiser',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 128
    },
    email: {
      type: 'string',
      maxLength: 128,
      format: 'email'
    },
    organization: {
      type: 'string',
      maxLength: 128
    },
    password: {
      description: 'Hash of password',
      type: 'string',
      maxLength: 128
    },
    billingInfo: {
      description: 'Stripe customer token',
      type: 'string',
      maxLength: 128
    },
    adCampaigns: {
      type: 'array',
      items: AdCampaign
    },
    adDrafts: {
      description: 'A list of ads that are not associated with campaigns',
      type: 'array',
      items: AdDraft
    },
    active: {
      description: 'Denotes whether or not the account can be used',
      type: 'boolean'
    },
    verified: {
      description: 'Denotes whether or not the account owner has been verified as human',
      type: 'boolean'
    }
  }
}
