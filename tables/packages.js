import Install from '../types/install'

export const Package = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 128
    },
    maintainers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            description: 'Corresponds to maintainer._id in the maintainer table',
            type: 'string'
          },
          revenuePercent: {
            description: 'Denotes what percentage of the package revenue belongs to this maintainer. Stored as n*100.',
            type: 'number'
          }
        }
      }
    },
    owner: {
      type: 'string',
      description: 'Corresponds to maintainer._id in the maintainer table'
    },
    language: {
      type: 'string'
    },
    registry: {
      type: 'string'
    },
    installs: {
      type: 'array',
      items: Install
    },
    dividend: {
      description: 'Dividend collected for this package (in microcents) in the current collection period',
      type: 'number'
    },
    lastPayout: {
      description: 'Timestamp of last payout',
      type: 'number'
    },
    totalRevenue: {
      description: 'Sum of dividends (in microcents) across all collection periods',
      type: 'number'
    }
  }
}
