const S = require('fluent-schema')

const BasicLoginData = S.object()
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'password',
    S.string().maxLength(128).required()
  )

const VerifyData = S.object()
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'token',
    S.string().maxLength(128).required()
  )

const PollRegistrationRequest = S.object()
  .prop(
    'email',
    S.string().maxLength(128).format('email').required()
  )
  .prop(
    'pollingToken',
    S.string().maxLength(128).required()
  )

const CodeHostAuthentication = S.object()
    .prop(
      'code',
      S.string().maxLength(128).description('A code which is used to retrieve an access code meaning we are authed').required()
    )
    .prop(
      'state',
      S.string().maxLength(128).description('A state is given to a code host, and they return it back to ensure no cross site requests are made on false behalf').required()
    )

const MagicLinkRequest = S.object().prop('email', S.string().maxLength(128).format('email').required())
const MagicLinkResponse = S.string() // a verification code

const MagicLinkAuthentication = S.object().extend(VerifyData)

const RecaptchaAuthentication = S.object()
  .extend(VerifyData)
  .prop(
    'recaptchaResponse',
    S.string().maxLength(1024)
  ).required()

module.exports = {
  BasicLoginData,
  MagicLinkRequest,
  MagicLinkResponse,
  MagicLinkAuthentication,
  RecaptchaAuthentication,
  VerifyData,
  PollRegistrationRequest,
  CodeHostAuthentication
}
