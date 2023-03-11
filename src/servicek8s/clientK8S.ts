import idsrvAuth from '../oauthclient/idsrvAuth';
import * as http from 'http';
import * as k8s from "@/api/k8s/";

import { KubernetesListObject, KubernetesObject } from "./types";

/** Kubernetes API verbs. */
type KubernetesApiAction = 'create' | 'delete' | 'patch' | 'read' | 'list' | 'replace';


export class KubernetesObjectApi extends k8s.ApisApi {
    private serverURL: string

    public static makeApiClient(serverURL: string): KubernetesObjectApi {
      const server = new k8s.ServerConfiguration<{  }>(serverURL, {  })

      const authConfigK8S: k8s.AuthMethodsConfiguration = {
        default: {
            applySecurityAuthentication: (context: k8s.RequestContext) => {
                context.setHeaderParam("Authorization", "Bearer " + idsrvAuth.accessToken);
            },
            getName: () => "default",
          }
       }

      const configuration = k8s.createConfiguration({
        baseServer: server,
        authMethods: authConfigK8S,
      });

      const client = new k8s.ApisApi(configuration) as any;

      return client;
    }

    /** Cache resource API response. */
    protected apiVersionResourceCache: Record<string, k8s.V1APIResourceList> = {};



  public async create<T extends KubernetesObject | KubernetesObject>(
    spec: T,
    pretty?: string,
    dryRun?: string,
    fieldManager?: string,
    options: { headers: { [name: string]: string } } = { headers: {} },
  ): Promise<{ body: T; response: http.IncomingMessage }> {
      // verify required parameter 'spec' is not null or undefined
      if (spec === null || spec === undefined) {
          throw new Error('Required parameter spec was null or undefined when calling create.');
      }

      const localVarPath = await this.specUriPath(spec, 'create');
      const localVarQueryParameters: any = {};
      const localVarHeaderParams = this.generateHeaders(options.headers);

      if (pretty !== undefined) {
          localVarQueryParameters.pretty = ObjectSerializer.serialize(pretty, 'string');
      }

      if (dryRun !== undefined) {
          localVarQueryParameters.dryRun = ObjectSerializer.serialize(dryRun, 'string');
      }

      if (fieldManager !== undefined) {
          localVarQueryParameters.fieldManager = ObjectSerializer.serialize(fieldManager, 'string');
      }

      const localVarRequestOptions: request.Options = {
          method: 'POST',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
          body: ObjectSerializer.serialize(spec, 'KubernetesObject'),
      };

      return this.requestPromise(localVarRequestOptions);
  }

   /**
     * Use spec information to construct resource URI path.  If any required information in not provided, an Error is
     * thrown.  If an `apiVersion` is not provided, 'v1' is used.  If a `metadata.namespace` is not provided for a
     * request that requires one, the context default is used, if available, if not, 'default' is used.
     *
     * @param spec Kubernetes resource spec which must define kind and apiVersion properties.
     * @param action API action, see [[K8sApiAction]].
     * @return tail of resource-specific URIDeploym
     */
    protected async specUriPath(spec: KubernetesObject, action: KubernetesApiAction): Promise<string> {
      if (!spec.kind) {
          throw new Error('Required spec property kind is not set');
      }
      if (!spec.apiVersion) {
          spec.apiVersion = 'v1';
      }
      if (!spec.metadata) {
          spec.metadata = {};
      }
      const resource = await this.resource(spec.apiVersion, spec.kind);
      if (!resource) {
          throw new Error(`Unrecognized API version and kind: ${spec.apiVersion} ${spec.kind}`);
      }
      if (resource.namespaced && !spec.metadata.namespace && action !== 'list') {
          spec.metadata.namespace = this.defaultNamespace;
      }
      const parts = [this.apiVersionPath(spec.apiVersion)];
      if (resource.namespaced && spec.metadata.namespace) {
          parts.push('namespaces', encodeURIComponent(String(spec.metadata.namespace)));
      }
      parts.push(resource.name);
      if (action !== 'create' && action !== 'list') {
          if (!spec.metadata.name) {
              throw new Error('Required spec property name is not set');
          }
          parts.push(encodeURIComponent(String(spec.metadata.name)));
      }
      return parts.join('/').toLowerCase();
    }

    /**
     * Get metadata from Kubernetes API for resources described by `kind` and `apiVersion`.  If it is unable to find the
     * resource `kind` under the provided `apiVersion`, `undefined` is returned.
     *
     * This method caches responses from the Kubernetes API to use for future requests.  If the cache for apiVersion
     * exists but the kind is not found the request is attempted again.
     *
     * @param apiVersion Kubernetes API version, e.g., 'v1' or 'apps/v1'.
     * @param kind Kubernetes resource kind, e.g., 'Pod' or 'Namespace'.
     * @return Promise of the resource metadata or `undefined` if the resource is not found.
     */
    protected async resource(apiVersion: string, kind: string): Promise<k8s.V1APIResource | undefined> {
      // verify required parameter 'apiVersion' is not null or undefined
      if (apiVersion === null || apiVersion === undefined) {
          throw new Error('Required parameter apiVersion was null or undefined when calling resource');
      }
      // verify required parameter 'kind' is not null or undefined
      if (kind === null || kind === undefined) {
          throw new Error('Required parameter kind was null or undefined when calling resource');
      }

      if (this.apiVersionResourceCache[apiVersion]) {
          const resource = this.apiVersionResourceCache[apiVersion].resources.find((r) => r.kind === kind);
          if (resource) {
              return resource;
          }
      }

      const localVarPath = this.apiVersionPath(apiVersion);
      const localVarQueryParameters: any = {};
      const localVarHeaderParams = this.generateHeaders({});

      const localVarRequestOptions: request.Options = {
          method: 'GET',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
      };

      try {
          const getApiResponse = await this.requestPromise<V1APIResourceList>(
              localVarRequestOptions,
              'V1APIResourceList',
          );
          this.apiVersionResourceCache[apiVersion] = getApiResponse.body;
          return this.apiVersionResourceCache[apiVersion].resources.find((r) => r.kind === kind);
      } catch (e) {
          if (e instanceof Error) {
              e.message = `Failed to fetch resource metadata for ${apiVersion}/${kind}: ${e.message}`;
          }
          throw e;
      }
    }

   /** Return root of API path up to API version. */
   protected apiVersionPath(apiVersion: string): string {
    const api = apiVersion.includes('/') ? 'apis' : 'api';
    return [this.basePath, api, apiVersion].join('/');
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
    protected generateHeaders(
        optionsHeaders: { [name: string]: string },
        action: string = 'GET',
    ): { [name: string]: string } {
        const headers: { [name: string]: string } = Object.assign({}, this._defaultHeaders);
        headers.accept = 'application/json';
        if (action === 'PATCH') {
            headers['content-type'] = KubernetesPatchStrategies.StrategicMergePatch;
        }
        Object.assign(headers, optionsHeaders);
        return headers;
    }

}
