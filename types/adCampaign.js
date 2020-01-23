import Ad from './ad'

export const AdCampaign = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 128
    },
    ads: {
      type: 'array',
      items: Ad
    },
    maxSpend: {
      description: 'Maximum spend in microcents',
      type: 'number'
    },
    startDate: {
      description: 'Timestamp of campaign launch',
      type: 'number'
    },
    endDate: {
      description: 'Timestamp of campaign close',
      type: 'number'
    },
    cpm: {
      description: 'Cost per thousand impressions in microcents',
      type: 'number'
    },
    spend: {
      description: 'How many microcents have been spent on this campaign',
      type: 'number'
    },
    active: {
      description: 'Denotes whether or not the campaign\'s ads will be shown to users',
      type: 'boolean'
    }
  }
}
