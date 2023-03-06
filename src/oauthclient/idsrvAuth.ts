import { User } from 'oidc-client'
import { createOidcAuth, SignInType, LogLevel } from '../vue-oidc-client'

import { registerUser } from '@/services/userService'

const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}${process.env.BASE_URL}`

const idsrvAuth = createOidcAuth(
  'main',
  SignInType.Window,
  appRootUrl,
  {
    authority: 'https://dex.dev.faros.sh/',
    client_id: 'faros', // 'implicit.shortlived',
    client_secret: 'ZXhhbXBsZS1hcHAtc2VjcmV0',
    response_type: 'code',
    scope: 'openid profile email offline_access',
    // test use
    prompt: 'login'
  },
  console,
  LogLevel.Debug
)

// handle events
idsrvAuth.events.addAccessTokenExpiring(function() {
  // eslint-disable-next-line no-console
  console.log('access token expiring')
})

idsrvAuth.events.addAccessTokenExpired(function() {
  // eslint-disable-next-line no-console
  console.log('access token expired')
})

idsrvAuth.events.addSilentRenewError(function(err: Error) {
  // eslint-disable-next-line no-console
  console.error('silent renew error', err)
})

idsrvAuth.events.addUserLoaded(function(user: User) {
   // eslint-disable-next-line no-console
   console.log('user loaded', user)
   registerUser().then(() => {
     // eslint-disable-next-line no-console
     console.log('User registered')
   }).catch((err) => {
     // eslint-disable-next-line no-console
     console.error('User registration failed', err)
   })
})

idsrvAuth.events.addUserUnloaded(function() {
  // eslint-disable-next-line no-console
  console.log('user unloaded')
})

idsrvAuth.events.addUserSignedOut(function() {
  // eslint-disable-next-line no-console
  console.log('user signed out')
})

idsrvAuth.events.addUserSessionChanged(function() {
  // eslint-disable-next-line no-console
  console.log('user session changed')
})

export default idsrvAuth
