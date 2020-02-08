export const Install = {
  type: 'object',
  properties: {
    timestamp: {
      type: 'number'
    },
    sessionId: {
      description: 'Corresponds to session._id in the session table',
      type: 'string'
    },
    count: {
      description: 'The number of times this package was installed during the session',
      type: 'number'
    }
  }
}
