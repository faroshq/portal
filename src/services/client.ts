import idsrvAuth from '../oauthclient/idsrvAuth';
import * as faros from "../api";

const authConfig: faros.AuthMethodsConfiguration = {
    default: {
      applySecurityAuthentication: (context: faros.RequestContext) => {
        context.setHeaderParam("Authorization", "Bearer " + idsrvAuth.accessToken);
      },
      getName: () => "default"
    },
  }

// eslint-disable-next-line no-console
const server = new faros.ServerConfiguration<{  }>("https://faros.dev.faros.sh", {  })

const configurationParameters = {
    baseServer: server,
    authMethods: authConfig,
}

// Convert to actual configuration
const config = faros.createConfiguration(configurationParameters);
const client = new faros.DefaultApi(config)

export default client
