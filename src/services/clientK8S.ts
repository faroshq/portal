import idsrvAuth from '../oauthclient/idsrvAuth';
import * as k8s from "@/api/k8s/";
import { KubernetesObject } from "./types";

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
       }

      const configuration = k8s.createConfiguration({
        baseServer: server,
        authMethods: authConfigK8S,
      });

      const client = new k8s.CustomObjectsApi(configuration);
      this.client = client;
    }

    public list(group: string, version: string, plural: string, ){
      return this.client.listClusterCustomObject(group, version, plural)
    }

    public create(group: string, version: string, plural: string, spec: KubernetesObject){
      return this.client.createClusterCustomObject(group, version, plural, spec)
    }

    public delete(group: string, version: string, plural: string, spec: KubernetesObject){
      return this.client.deleteClusterCustomObject(group, version, plural, spec.metadata?.name as string)
    }

    public listNamespaced(group: string, version: string, plural: string, namespace: string, selector?: string){
      return this.client.listNamespacedCustomObject(group, version, namespace, plural, "",false, "", selector)
    }
}


export class CoreV1Api {
  private client: k8s.CoreV1Api;

  constructor(serverURL: string) {
    const server = new k8s.ServerConfiguration<{  }>(serverURL, {  })

    const authConfigK8S: k8s.AuthMethodsConfiguration = {
      default: {
          applySecurityAuthentication: (context: k8s.RequestContext) => {
              context.setHeaderParam("Authorization", "Bearer " + idsrvAuth.accessToken);
          },
          getName: () => "default",
        },
     }

    const configuration = k8s.createConfiguration({
      baseServer: server,
      authMethods: authConfigK8S,
    });

    const client = new k8s.CoreV1Api(configuration);
    this.client = client;
  }

  public listNamespacedConfigMap(namespace: string, selector?: string){
    return this.client.listNamespacedConfigMap(namespace, "", false, "", "", selector)
  }
}
