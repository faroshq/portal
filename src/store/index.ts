import { createStore, createLogger } from "vuex";

import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from '../config/oidc'

import organizationModule from "./organizations";
import notificationModule from "./notifications";
import workspaceModule from "./workspaces";
import locationModule from "./locations";
import synctargetModule from "./synctargets";

export const store = createStore({
  modules: {
    organizationModule,
    notificationModule,
    workspaceModule,
    locationModule,
    synctargetModule,
    // oidc integration
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
      {
        namespaced: true,
        dispatchEventsOnWindow: true
      },
      // Optional OIDC event listeners
      {
        userLoaded: (user) => {
          console.log('OIDC user is loaded:', user)
        },
        userUnloaded: () => {
          console.log('OIDC user is unloaded')
        },
        accessTokenExpiring: () => console.log('Access token will expire'),
        accessTokenExpired: () => console.log('Access token did expire'),
        silentRenewError: () => console.log('OIDC user is unloaded'),
        userSignedOut: () => console.log('OIDC user is signed out'),
        oidcError: (payload) => console.log('OIDC error', payload),
        automaticSilentRenewError: (payload) => console.log('OIDC automaticSilentRenewError', payload)
      }
    )
  },
  plugins: [createLogger()],
});
