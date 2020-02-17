export const Session = {
  title: 'Session',
  description: 'Contains ad viewing session information',
  type: 'object',
  properties: {
    email: {
      type: 'string',
      maxLength: 128,
      format: 'email'
    },
    packages: {
      description: 'A list of top-level packages installed during this session',
      type: 'array',
      items: {
        type: 'string',
        maxLength: 128
      }
    },
    language: {
      description: 'Language of the packages installed, e.g. JavaScript or Rust',
      type: 'string'
    },
    registry: {
      description: 'The package registry used during this session',
      type: 'string'
    },
    metadata: {
      description: 'Session metadata such as version of package manager and CLI',
      type: 'object',
      properties: {
        packageManagerVersion: { type: 'string' },
        flossbankVersion: { type: 'string' }
      }
    },
    started: {
      description: 'Timestamp of session start',
      type: 'number'
    },
    ended: {
      description: 'Timestamp of session complete',
      type: 'number'
    }
  }
}
