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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create organization
     * @param body 
     */
    public createOrganization(body: V1alpha1Organization, _options?: Configuration): Promise<V1alpha1Organization> {
        const result = this.api.createOrganization(body, _options);
        return result.toPromise();
    }

    /**
     * Create workspace
     * @param organization Name of an organization
     * @param body 
     */
    public createWorkspace(organization: string, body: V1alpha1Workspace, _options?: Configuration): Promise<V1alpha1Organization> {
        const result = this.api.createWorkspace(organization, body, _options);
        return result.toPromise();
    }

    /**
     * Delete organization
     * @param organization Name of an organization
     */
    public deleteOrganization(organization: string, _options?: Configuration): Promise<V1Status> {
        const result = this.api.deleteOrganization(organization, _options);
        return result.toPromise();
    }

    /**
     * Delete workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public deleteWorkspace(workspace: string, organization: string, _options?: Configuration): Promise<V1Status> {
        const result = this.api.deleteWorkspace(workspace, organization, _options);
        return result.toPromise();
    }

    /**
     * Callback from OIDC provider for login flow
     */
    public getCallback(_options?: Configuration): Promise<ModelsLoginResponse> {
        const result = this.api.getCallback(_options);
        return result.toPromise();
    }

    /**
     * Get organization
     * @param organization Name of an organization
     */
    public getOrganization(organization: string, _options?: Configuration): Promise<V1alpha1Organization> {
        const result = this.api.getOrganization(organization, _options);
        return result.toPromise();
    }

    /**
     * Get workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public getWorkspace(workspace: string, organization: string, _options?: Configuration): Promise<V1alpha1Workspace> {
        const result = this.api.getWorkspace(workspace, organization, _options);
        return result.toPromise();
    }

    /**
     * List organizations
     */
    public listOrganizations(_options?: Configuration): Promise<V1alpha1OrganizationList> {
        const result = this.api.listOrganizations(_options);
        return result.toPromise();
    }

    /**
     * List workspaces
     * @param organization Name of an organization
     */
    public listWorkspaces(organization: string, _options?: Configuration): Promise<V1alpha1WorkspaceList> {
        const result = this.api.listWorkspaces(organization, _options);
        return result.toPromise();
    }

    /**
     * Login into Faros
     */
    public login(_options?: Configuration): Promise<V1Status> {
        const result = this.api.login(_options);
        return result.toPromise();
    }

    /**
     * Callback from OIDC provider for token refresh
     */
    public postCallback(_options?: Configuration): Promise<V1Status> {
        const result = this.api.postCallback(_options);
        return result.toPromise();
    }

    /**
     * Register into Faros
     */
    public register(_options?: Configuration): Promise<V1alpha1User> {
        const result = this.api.register(_options);
        return result.toPromise();
    }


}



