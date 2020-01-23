import Impression from './impression'

export const Ad = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string',
      maxLength: 128
    },
    title: {
      type: 'string',
      maxLength: 128
    },
    body: {
      type: 'string',
      maxLength: 256
    },
    url: {
      type: 'string',
      maxLength: 128
    },
    impressions: {
      type: 'array',
      items: Impression
    },
    approved: {
      description: 'Denotes whether or not the ad was approved by Flossbank staff',
      type: 'boolean'
    }
  }
}
