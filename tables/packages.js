import Registry from '../types/registry'

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
    registry: {
      type: 'string',
      enum: Registry
    },
    dividend: {
      description: 'Dividend collected for this package in the current collection period',
      type: 'number'
    },
    dividendAge: {
      description: 'Age of `dividend` in days',
      type: 'number'
    },
    totalRevenue: {
      description: 'Sum of dividends across all collection periods',
      type: 'number'
    }
  }
}
