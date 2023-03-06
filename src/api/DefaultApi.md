# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganization**](DefaultApi.md#createOrganization) | **POST** /faros.sh/api/v1alpha1/organizations | Create organization
[**createWorkspace**](DefaultApi.md#createWorkspace) | **POST** /faros.sh/api/v1alpha1/organizations/{organization}/workspaces | Create workspace
[**deleteOrganization**](DefaultApi.md#deleteOrganization) | **DELETE** /faros.sh/api/v1alpha1/organizations/{organization} | Delete organization
[**deleteWorkspace**](DefaultApi.md#deleteWorkspace) | **DELETE** /faros.sh/api/v1alpha1/organizations/{organization}/workspaces/{workspace} | Delete workspace
[**getCallback**](DefaultApi.md#getCallback) | **GET** /faros.sh/api/v1alpha1/oidc/callback | Callback from OIDC provider for login flow
[**getOrganization**](DefaultApi.md#getOrganization) | **GET** /faros.sh/api/v1alpha1/organizations/{organization} | Get organization
[**getWorkspace**](DefaultApi.md#getWorkspace) | **GET** /faros.sh/api/v1alpha1/organizations/{organization}/workspaces/{workspace} | Get workspace
[**listOrganizations**](DefaultApi.md#listOrganizations) | **GET** /faros.sh/api/v1alpha1/organizations | List organizations
[**listWorkspaces**](DefaultApi.md#listWorkspaces) | **GET** /faros.sh/api/v1alpha1/organizations/{organization}/workspaces | List workspaces
[**login**](DefaultApi.md#login) | **GET** /faros.sh/api/v1alpha1/oidc/login | Login into Faros
[**postCallback**](DefaultApi.md#postCallback) | **POST** /faros.sh/api/v1alpha1/oidc/callback | Callback from OIDC provider for token refresh
[**register**](DefaultApi.md#register) | **POST** /faros.sh/api/v1alpha1/oidc/register | Register into Faros


# **createOrganization**
> V1alpha1Organization createOrganization(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateOrganizationRequest = {
  // V1alpha1Organization
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: "creationTimestamp_example",
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: "deletionTimestamp_example",
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: "fieldsV1_example",
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: "time_example",
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      description: "description_example",
      ownersRef: [
        {
          apiVersion: "apiVersion_example",
          email: "email_example",
          kind: "kind_example",
          name: "name_example",
        },
      ],
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          reason: "reason_example",
          severity: "severity_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      workspaceURL: "workspaceURL_example",
    },
  },
};

apiInstance.createOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1alpha1Organization**|  |


### Return type

**V1alpha1Organization**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWorkspace**
> V1alpha1Organization createWorkspace(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateWorkspaceRequest = {
  // string | Name of an organization
  organization: "organization_example",
  // V1alpha1Workspace
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: "creationTimestamp_example",
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: "deletionTimestamp_example",
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: "fieldsV1_example",
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: "time_example",
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      description: "description_example",
      organizationRef: {
        apiVersion: "apiVersion_example",
        fieldPath: "fieldPath_example",
        kind: "kind_example",
        name: "name_example",
        namespace: "namespace_example",
        resourceVersion: "resourceVersion_example",
        uid: "uid_example",
      },
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          reason: "reason_example",
          severity: "severity_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      workspaceURL: "workspaceURL_example",
    },
  },
};

apiInstance.createWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1alpha1Workspace**|  |
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1alpha1Organization**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrganization**
> V1Status deleteOrganization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteOrganizationRequest = {
  // string | Name of an organization
  organization: "organization_example",
};

apiInstance.deleteOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1Status**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWorkspace**
> V1Status deleteWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteWorkspaceRequest = {
  // string | Name of an workspace
  workspace: "workspace_example",
  // string | Name of an organization
  organization: "organization_example",
};

apiInstance.deleteWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] | Name of an workspace | defaults to undefined
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1Status**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallback**
> ModelsLoginResponse getCallback()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getCallback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ModelsLoginResponse**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganization**
> V1alpha1Organization getOrganization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetOrganizationRequest = {
  // string | Name of an organization
  organization: "organization_example",
};

apiInstance.getOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1alpha1Organization**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWorkspace**
> V1alpha1Workspace getWorkspace()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWorkspaceRequest = {
  // string | Name of an workspace
  workspace: "workspace_example",
  // string | Name of an organization
  organization: "organization_example",
};

apiInstance.getWorkspace(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] | Name of an workspace | defaults to undefined
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1alpha1Workspace**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizations**
> V1alpha1OrganizationList listOrganizations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.listOrganizations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1alpha1OrganizationList**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWorkspaces**
> V1alpha1WorkspaceList listWorkspaces()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiListWorkspacesRequest = {
  // string | Name of an organization
  organization: "organization_example",
};

apiInstance.listWorkspaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**string**] | Name of an organization | defaults to undefined


### Return type

**V1alpha1WorkspaceList**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> V1Status login()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1Status**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCallback**
> V1Status postCallback()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.postCallback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1Status**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **register**
> V1alpha1User register()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.register(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1alpha1User**

### Authorization

[OAuth2](README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**301** | Moved Permanently |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |
**502** | Bad gateway |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


