export const Maintainer = {
  title: 'Maintainer',
  description: 'An open source maintainer',
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
    payoutEmail: {
      type: 'string',
      maxLength: 128,
      format: 'email'
    },
    password: {
      description: 'Hash of password',
      type: 'string',
      maxLength: 128
    },
    tokens: {
      description: 'Tokens used to verify ownership/maintainership of packages on package registries',
      type: 'object',
      patternProperties: {
        '.+': {
          description: 'Tokens are stored in the form <package registry>:<token>',
          type: 'string'
        }
      }
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
