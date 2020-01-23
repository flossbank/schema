export const Impression = {
  type: 'object',
  properties: {
    timestamp: {
      type: 'number'
    },
    sessionId: {
      description: 'Corresponds to session._id in the session table',
      type: 'string'
    }
  }
}
