# .ApiextensionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiextensionsAPIGroup**](ApiextensionsApi.md#getApiextensionsAPIGroup) | **GET** /apis/apiextensions.k8s.io/ | 


# **getApiextensionsAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getApiextensionsAPIGroup()

get information of a group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiextensionsApi(configuration);

let body:any = {};

apiInstance.getApiextensionsAPIGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**IoK8sApimachineryPkgApisMetaV1APIGroup**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


