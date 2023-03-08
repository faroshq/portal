import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateOrganizationRequest {
    /**
     * 
     * @type V1alpha1Organization
     * @memberof DefaultApicreateOrganization
     */
    body: V1alpha1Organization
}

export interface DefaultApiCreateWorkspaceRequest {
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApicreateWorkspace
     */
    organization: string
    /**
     * 
     * @type V1alpha1Workspace
     * @memberof DefaultApicreateWorkspace
     */
    body: V1alpha1Workspace
}

export interface DefaultApiDeleteOrganizationRequest {
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApideleteOrganization
     */
    organization: string
}

export interface DefaultApiDeleteWorkspaceRequest {
    /**
     * Name of an workspace
     * @type string
     * @memberof DefaultApideleteWorkspace
     */
    workspace: string
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApideleteWorkspace
     */
    organization: string
}

export interface DefaultApiGetCallbackRequest {
}

export interface DefaultApiGetOrganizationRequest {
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApigetOrganization
     */
    organization: string
}

export interface DefaultApiGetWorkspaceRequest {
    /**
     * Name of an workspace
     * @type string
     * @memberof DefaultApigetWorkspace
     */
    workspace: string
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApigetWorkspace
     */
    organization: string
}

export interface DefaultApiListOrganizationsRequest {
}

export interface DefaultApiListWorkspacesRequest {
    /**
     * Name of an organization
     * @type string
     * @memberof DefaultApilistWorkspaces
     */
    organization: string
}

export interface DefaultApiLoginRequest {
}

export interface DefaultApiPostCallbackRequest {
}

export interface DefaultApiRegisterRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create organization
     * @param param the request object
     */
    public createOrganization(param: DefaultApiCreateOrganizationRequest, options?: Configuration): Promise<V1alpha1Organization> {
        return this.api.createOrganization(param.body,  options).toPromise();
    }

    /**
     * Create workspace
     * @param param the request object
     */
    public createWorkspace(param: DefaultApiCreateWorkspaceRequest, options?: Configuration): Promise<V1alpha1Organization> {
        return this.api.createWorkspace(param.organization, param.body,  options).toPromise();
    }

    /**
     * Delete organization
     * @param param the request object
     */
    public deleteOrganization(param: DefaultApiDeleteOrganizationRequest, options?: Configuration): Promise<V1Status> {
        return this.api.deleteOrganization(param.organization,  options).toPromise();
    }

    /**
     * Delete workspace
     * @param param the request object
     */
    public deleteWorkspace(param: DefaultApiDeleteWorkspaceRequest, options?: Configuration): Promise<V1Status> {
        return this.api.deleteWorkspace(param.workspace, param.organization,  options).toPromise();
    }

    /**
     * Callback from OIDC provider for login flow
     * @param param the request object
     */
    public getCallback(param: DefaultApiGetCallbackRequest = {}, options?: Configuration): Promise<ModelsLoginResponse> {
        return this.api.getCallback( options).toPromise();
    }

    /**
     * Get organization
     * @param param the request object
     */
    public getOrganization(param: DefaultApiGetOrganizationRequest, options?: Configuration): Promise<V1alpha1Organization> {
        return this.api.getOrganization(param.organization,  options).toPromise();
    }

    /**
     * Get workspace
     * @param param the request object
     */
    public getWorkspace(param: DefaultApiGetWorkspaceRequest, options?: Configuration): Promise<V1alpha1Workspace> {
        return this.api.getWorkspace(param.workspace, param.organization,  options).toPromise();
    }

    /**
     * List organizations
     * @param param the request object
     */
    public listOrganizations(param: DefaultApiListOrganizationsRequest = {}, options?: Configuration): Promise<V1alpha1OrganizationList> {
        return this.api.listOrganizations( options).toPromise();
    }

    /**
     * List workspaces
     * @param param the request object
     */
    public listWorkspaces(param: DefaultApiListWorkspacesRequest, options?: Configuration): Promise<V1alpha1WorkspaceList> {
        return this.api.listWorkspaces(param.organization,  options).toPromise();
    }

    /**
     * Login into Faros
     * @param param the request object
     */
    public login(param: DefaultApiLoginRequest = {}, options?: Configuration): Promise<V1Status> {
        return this.api.login( options).toPromise();
    }

    /**
     * Callback from OIDC provider for token refresh
     * @param param the request object
     */
    public postCallback(param: DefaultApiPostCallbackRequest = {}, options?: Configuration): Promise<V1Status> {
        return this.api.postCallback( options).toPromise();
    }

    /**
     * Register into Faros
     * @param param the request object
     */
    public register(param: DefaultApiRegisterRequest = {}, options?: Configuration): Promise<V1alpha1User> {
        return this.api.register( options).toPromise();
    }

}
