export const User = {
  title: 'User',
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
    apiKey: {
      type: 'string',
      maxLength: 128,
    },
    billingInfo: {
      type: 'object',
      properties: {
        monthlyDonation: {
          description: 'The amount (if any) of a monthly donation in microcents',
          type: 'number'
        },
        lastCharge: {
          description: 'The Unix timestamp of the last charge of the user\'s monthly donation (if any)',,
          type: 'number'
        },
        cardOnFile: {
          description: 'A flag denoting whether or not the user has a credit card on file',
          type: 'boolean'
        },
        last4: {
          description: 'The last 4 digits of the credit card on file',
          type: 'string'
        },
        customerId: {
          description: 'The user\'s Stripe customer id',
          type: 'string',
          maxLength: 128
        }
      }
    },
    active: {
      description: 'Denotes whether or not the account can be used',
      type: 'boolean'
    }
  }
}
