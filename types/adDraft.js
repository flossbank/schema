export const AdDraft = {
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
    }
  }
}
