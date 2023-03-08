import idsrvAuth from '../oauthclient/idsrvAuth';
import * as faros from "@/api/faros";

const authConfigFaros: faros.AuthMethodsConfiguration = {
    default: {
      applySecurityAuthentication: (context: faros.RequestContext) => {
        context.setHeaderParam("Authorization", "Bearer " + idsrvAuth.accessToken);
      },
      getName: () => "default"
    },
}

// eslint-disable-next-line no-console
const serverFaros = new faros.ServerConfiguration<{  }>("https://faros.dev.faros.sh", {  })

const configurationParametersFaros = {
    baseServer: serverFaros,
    authMethods: authConfigFaros,
}


// Convert to actual configuration
const config = faros.createConfiguration(configurationParametersFaros);
const client = new faros.DefaultApi(config)


export default client
