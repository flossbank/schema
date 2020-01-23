import Registry from '../types/registry'

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
    registry: {
      description: 'The package registry used during this session',
      type: 'string',
      enum: Registry
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
