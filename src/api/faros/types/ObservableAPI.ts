import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ModelsLoginResponse } from '../models/ModelsLoginResponse';
import { OidcClaimSource } from '../models/OidcClaimSource';
import { OidcIDToken } from '../models/OidcIDToken';
import { V1ListMeta } from '../models/V1ListMeta';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1ObjectReference } from '../models/V1ObjectReference';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1Status } from '../models/V1Status';
import { V1StatusCause } from '../models/V1StatusCause';
import { V1StatusDetails } from '../models/V1StatusDetails';
import { V1TypeMeta } from '../models/V1TypeMeta';
import { V1alpha1Condition } from '../models/V1alpha1Condition';
import { V1alpha1ObjectReference } from '../models/V1alpha1ObjectReference';
import { V1alpha1Organization } from '../models/V1alpha1Organization';
import { V1alpha1OrganizationList } from '../models/V1alpha1OrganizationList';
import { V1alpha1OrganizationSpec } from '../models/V1alpha1OrganizationSpec';
import { V1alpha1OrganizationStatus } from '../models/V1alpha1OrganizationStatus';
import { V1alpha1User } from '../models/V1alpha1User';
import { V1alpha1UserSpec } from '../models/V1alpha1UserSpec';
import { V1alpha1UserStatus } from '../models/V1alpha1UserStatus';
import { V1alpha1Workspace } from '../models/V1alpha1Workspace';
import { V1alpha1WorkspaceList } from '../models/V1alpha1WorkspaceList';
import { V1alpha1WorkspaceSpec } from '../models/V1alpha1WorkspaceSpec';
import { V1alpha1WorkspaceStatus } from '../models/V1alpha1WorkspaceStatus';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create organization
     * @param body 
     */
    public createOrganization(body: V1alpha1Organization, _options?: Configuration): Observable<V1alpha1Organization> {
        const requestContextPromise = this.requestFactory.createOrganization(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrganization(rsp)));
            }));
    }

    /**
     * Create workspace
     * @param organization Name of an organization
     * @param body 
     */
    public createWorkspace(organization: string, body: V1alpha1Workspace, _options?: Configuration): Observable<V1alpha1Organization> {
        const requestContextPromise = this.requestFactory.createWorkspace(organization, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWorkspace(rsp)));
            }));
    }

    /**
     * Delete organization
     * @param organization Name of an organization
     */
    public deleteOrganization(organization: string, _options?: Configuration): Observable<V1Status> {
        const requestContextPromise = this.requestFactory.deleteOrganization(organization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganization(rsp)));
            }));
    }

    /**
     * Delete workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public deleteWorkspace(workspace: string, organization: string, _options?: Configuration): Observable<V1Status> {
        const requestContextPromise = this.requestFactory.deleteWorkspace(workspace, organization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWorkspace(rsp)));
            }));
    }

    /**
     * Callback from OIDC provider for login flow
     */
    public getCallback(_options?: Configuration): Observable<ModelsLoginResponse> {
        const requestContextPromise = this.requestFactory.getCallback(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallback(rsp)));
            }));
    }

    /**
     * Get organization
     * @param organization Name of an organization
     */
    public getOrganization(organization: string, _options?: Configuration): Observable<V1alpha1Organization> {
        const requestContextPromise = this.requestFactory.getOrganization(organization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganization(rsp)));
            }));
    }

    /**
     * Get workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public getWorkspace(workspace: string, organization: string, _options?: Configuration): Observable<V1alpha1Workspace> {
        const requestContextPromise = this.requestFactory.getWorkspace(workspace, organization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkspace(rsp)));
            }));
    }

    /**
     * List organizations
     */
    public listOrganizations(_options?: Configuration): Observable<V1alpha1OrganizationList> {
        const requestContextPromise = this.requestFactory.listOrganizations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizations(rsp)));
            }));
    }

    /**
     * List workspaces
     * @param organization Name of an organization
     */
    public listWorkspaces(organization: string, _options?: Configuration): Observable<V1alpha1WorkspaceList> {
        const requestContextPromise = this.requestFactory.listWorkspaces(organization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWorkspaces(rsp)));
            }));
    }

    /**
     * Login into Faros
     */
    public login(_options?: Configuration): Observable<V1Status> {
        const requestContextPromise = this.requestFactory.login(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

    /**
     * Callback from OIDC provider for token refresh
     */
    public postCallback(_options?: Configuration): Observable<V1Status> {
        const requestContextPromise = this.requestFactory.postCallback(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCallback(rsp)));
            }));
    }

    /**
     * Register into Faros
     */
    public register(_options?: Configuration): Observable<V1alpha1User> {
        const requestContextPromise = this.requestFactory.register(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.register(rsp)));
            }));
    }

}
