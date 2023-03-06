// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ModelsLoginResponse } from '../models/ModelsLoginResponse';
import { V1Status } from '../models/V1Status';
import { V1alpha1Organization } from '../models/V1alpha1Organization';
import { V1alpha1OrganizationList } from '../models/V1alpha1OrganizationList';
import { V1alpha1Workspace } from '../models/V1alpha1Workspace';
import { V1alpha1WorkspaceList } from '../models/V1alpha1WorkspaceList';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create organization
     * @param body 
     */
    public async createOrganization(body: V1alpha1Organization, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "createOrganization", "body");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1alpha1Organization", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create workspace
     * @param organization Name of an organization
     * @param body 
     */
    public async createWorkspace(organization: string, body: V1alpha1Workspace, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "createWorkspace", "organization");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("DefaultApi", "createWorkspace", "body");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}/workspaces'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "V1alpha1Workspace", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete organization
     * @param organization Name of an organization
     */
    public async deleteOrganization(organization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "deleteOrganization", "organization");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public async deleteWorkspace(workspace: string, organization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("DefaultApi", "deleteWorkspace", "workspace");
        }


        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "deleteWorkspace", "organization");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}/workspaces/{workspace}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Callback from OIDC provider for login flow
     */
    public async getCallback(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/oidc/callback';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get organization
     * @param organization Name of an organization
     */
    public async getOrganization(organization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "getOrganization", "organization");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get workspace
     * @param workspace Name of an workspace
     * @param organization Name of an organization
     */
    public async getWorkspace(workspace: string, organization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("DefaultApi", "getWorkspace", "workspace");
        }


        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "getWorkspace", "organization");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}/workspaces/{workspace}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List organizations
     */
    public async listOrganizations(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List workspaces
     * @param organization Name of an organization
     */
    public async listWorkspaces(organization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new RequiredError("DefaultApi", "listWorkspaces", "organization");
        }


        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/organizations/{organization}/workspaces'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Login into Faros
     */
    public async login(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/oidc/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Callback from OIDC provider for token refresh
     */
    public async postCallback(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/faros.sh/api/v1alpha1/oidc/callback';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOrganization(response: ResponseContext): Promise<V1alpha1Organization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWorkspace(response: ResponseContext): Promise<V1alpha1Organization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteOrganization(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteWorkspace(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCallback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCallback(response: ResponseContext): Promise<ModelsLoginResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelsLoginResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsLoginResponse", ""
            ) as ModelsLoginResponse;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelsLoginResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelsLoginResponse", ""
            ) as ModelsLoginResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganization(response: ResponseContext): Promise<V1alpha1Organization > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Organization", ""
            ) as V1alpha1Organization;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkspace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWorkspace(response: ResponseContext): Promise<V1alpha1Workspace > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1Workspace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Workspace", ""
            ) as V1alpha1Workspace;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1Workspace = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1Workspace", ""
            ) as V1alpha1Workspace;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listOrganizations(response: ResponseContext): Promise<V1alpha1OrganizationList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1OrganizationList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1OrganizationList", ""
            ) as V1alpha1OrganizationList;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1OrganizationList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1OrganizationList", ""
            ) as V1alpha1OrganizationList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listWorkspaces
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listWorkspaces(response: ResponseContext): Promise<V1alpha1WorkspaceList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1alpha1WorkspaceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1WorkspaceList", ""
            ) as V1alpha1WorkspaceList;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1alpha1WorkspaceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1alpha1WorkspaceList", ""
            ) as V1alpha1WorkspaceList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to login
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async login(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCallback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCallback(response: ResponseContext): Promise<V1Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }
        if (isCodeInRange("301", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Moved Permanently", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Internal server error", body, response.headers);
        }
        if (isCodeInRange("502", response.httpStatusCode)) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            throw new ApiException<V1Status>(response.httpStatusCode, "Bad gateway", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Status", ""
            ) as V1Status;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
