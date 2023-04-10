import Config from "../config.json"
import { VuexOidcClientSettings } from "vuex-oidc";

export function getFarosSettings() {
    const farosAPI: string = Config.FAROS_API
    const settings: any = {
        farosAPI: farosAPI,
    }
    return settings
}

export function getOIDCSettings() {
    const maxAge: any = Config.MAX_AGE
    const authority: string = Config.AUTHORITY
    const clientId: string = Config.CLIENT_ID
    const clientSecret: string = Config.CLIENT_SECRET
    const redirectUri: string = Config.REDIRECT_URI
    const popupRedirectUri: string = Config.POPUP_REDIRECT_URI
    const responseType: string = Config.RESPONSE_TYPE
    const scope: string = Config.SCOPE
    const silentRedirectUri: string = Config.SILENT_REDIRECT_URI
    const automaticSilentRenew: any = Config.AUTOMATIC_SILENCE_RENEW
    const automaticSilentSignin: any = Config.AUTOMATIC_SILENCE_SIGNIN

    const settings: VuexOidcClientSettings = {
        authority: authority,
        client_id: clientId,
        clientId: clientId,
        client_secret: clientSecret,
        clientSecret: clientSecret,
        redirect_uri: redirectUri,
        redirectUri: redirectUri,
        responseType: responseType,
        scope: scope,
        popupRedirectUri: popupRedirectUri,
        silentRedirectUri: silentRedirectUri,
        automaticSilentRenew: automaticSilentRenew,
        automaticSilentSignin: automaticSilentSignin,
        max_age: maxAge,
    }

    return settings
}
