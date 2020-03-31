const S = require('fluent-schema')

const Base200Response = S.object()
  .prop(
    'success',
    S.boolean()
  )
  .prop(
    'message',
    S.string()
  )

// success + the new id
const Creation200Response = S.object()
  .prop(
    'id',
    S.string()
  )
  .extend(Base200Response)

const Base200WithData = (...args) => {
  let output = S.object().extend(Base200Response)

  const props = args.reduce((props, arg) => {
    if (typeof arg === 'string') {
      props.push([arg])
    } else {
      props[props.length - 1].push(arg)
    }
    return props
  }, [])

  props.forEach(([propName, prop]) => { output = output.prop(propName, prop) })

  return output
}

module.exports = { Base200Response, Base200WithData, Creation200Response }
