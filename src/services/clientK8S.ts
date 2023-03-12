import idsrvAuth from '../oauthclient/idsrvAuth';
import * as http from 'http';
import * as k8s from "@/api/k8s/";

import { KubernetesListObject, KubernetesObject } from "./types";

export class KubernetesObjectApi {
    private client: k8s.CustomObjectsApi;

    constructor(serverURL: string) {
      const server = new k8s.ServerConfiguration<{  }>(serverURL, {  })

      const authConfigK8S: k8s.AuthMethodsConfiguration = {
        default: {
            applySecurityAuthentication: (context: k8s.RequestContext) => {
                context.setHeaderParam("Authorization", "Bearer " + idsrvAuth.accessToken);
            },
            getName: () => "default",
          },
         // BearerToken: idsrvAuth.accessToken,
       }

      const configuration = k8s.createConfiguration({
        baseServer: server,
        authMethods: authConfigK8S,
      });

      const client = new k8s.CustomObjectsApi(configuration);
      this.client = client;
    }


    /**
     * Merge default headers and provided headers, setting the 'Accept' header to 'application/json' and, if the
     * `action` is 'PATCH', the 'Content-Type' header to [[KubernetesPatchStrategies.StrategicMergePatch]].  Both of
     * these defaults can be overriden by values provided in `optionsHeaders`.
     *
     * @param optionHeaders Headers from method's options argument.
     * @param action HTTP action headers are being generated for.
     * @return Headers to use in request.
     */
    public get(spec: KubernetesObject){
      console.log("get", spec)
      return this.client.listClusterCustomObject("scheduling.kcp.io", "v1alpha1", "locations")
    }

}
