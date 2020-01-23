export const Activity = {
  title: 'Activity',
  description: 'Contains history of impressions for an email',
  type: 'object',
  properties: {
    email: {
      type: 'string',
      maxLength: 128,
      format: 'email'
    },
    impressionHistory: {
      description: 'A map of <date>:<impressionCount>',
      type: 'object',
      patternProperties: {
        '\\d+': {
          type: 'number'
        }
      }
    }
  }
}
