import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';
import { IoK8sApimachineryPkgApisMetaV1APIGroup } from '../models/IoK8sApimachineryPkgApisMetaV1APIGroup';
import { IoK8sApimachineryPkgApisMetaV1APIResource } from '../models/IoK8sApimachineryPkgApisMetaV1APIResource';
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from '../models/IoK8sApimachineryPkgApisMetaV1APIResourceList';
import { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from '../models/IoK8sApimachineryPkgApisMetaV1DeleteOptions';
import { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from '../models/IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from '../models/IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { IoK8sApimachineryPkgApisMetaV1OwnerReference } from '../models/IoK8sApimachineryPkgApisMetaV1OwnerReference';
import { IoK8sApimachineryPkgApisMetaV1Preconditions } from '../models/IoK8sApimachineryPkgApisMetaV1Preconditions';
import { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from '../models/IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import { IoK8sApimachineryPkgApisMetaV1Status } from '../models/IoK8sApimachineryPkgApisMetaV1Status';
import { IoK8sApimachineryPkgApisMetaV1StatusCause } from '../models/IoK8sApimachineryPkgApisMetaV1StatusCause';
import { IoK8sApimachineryPkgApisMetaV1StatusDetails } from '../models/IoK8sApimachineryPkgApisMetaV1StatusDetails';
import { IoK8sApimachineryPkgApisMetaV1WatchEvent } from '../models/IoK8sApimachineryPkgApisMetaV1WatchEvent';
import { IoK8sApimachineryPkgVersionInfo } from '../models/IoK8sApimachineryPkgVersionInfo';

import { ObservableApiextensionsApi } from "./ObservableAPI";
import { ApiextensionsApiRequestFactory, ApiextensionsApiResponseProcessor} from "../apis/ApiextensionsApi";

export interface ApiextensionsApiGetApiextensionsAPIGroupRequest {
}

export class ObjectApiextensionsApi {
    private api: ObservableApiextensionsApi

    public constructor(configuration: Configuration, requestFactory?: ApiextensionsApiRequestFactory, responseProcessor?: ApiextensionsApiResponseProcessor) {
        this.api = new ObservableApiextensionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get information of a group
     * @param param the request object
     */
    public getApiextensionsAPIGroup(param: ApiextensionsApiGetApiextensionsAPIGroupRequest = {}, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
        return this.api.getApiextensionsAPIGroup( options).toPromise();
    }

}

import { ObservableApiextensionsV1Api } from "./ObservableAPI";
import { ApiextensionsV1ApiRequestFactory, ApiextensionsV1ApiResponseProcessor} from "../apis/ApiextensionsV1Api";

export interface ApiextensionsV1ApiCreateApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * 
     * @type IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
     * @memberof ApiextensionsV1ApicreateApiextensionsV1CustomResourceDefinition
     */
    body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApicreateApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApicreateApiextensionsV1CustomResourceDefinition
     */
    dryRun?: string
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @type string
     * @memberof ApiextensionsV1ApicreateApiextensionsV1CustomResourceDefinition
     */
    fieldManager?: string
}

export interface ApiextensionsV1ApiDeleteApiextensionsV1CollectionCustomResourceDefinitionRequest {
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    pretty?: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    _continue?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    dryRun?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    fieldSelector?: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    gracePeriodSeconds?: number
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    limit?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    propagationPolicy?: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    resourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    resourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @type number
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    timeoutSeconds?: number
    /**
     * 
     * @type IoK8sApimachineryPkgApisMetaV1DeleteOptions
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CollectionCustomResourceDefinition
     */
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions
}

export interface ApiextensionsV1ApiDeleteApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    name: string
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    dryRun?: string
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    propagationPolicy?: string
    /**
     * 
     * @type IoK8sApimachineryPkgApisMetaV1DeleteOptions
     * @memberof ApiextensionsV1ApideleteApiextensionsV1CustomResourceDefinition
     */
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions
}

export interface ApiextensionsV1ApiGetApiextensionsV1APIResourcesRequest {
}

export interface ApiextensionsV1ApiListApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @type boolean
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    allowWatchBookmarks?: boolean
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    fieldSelector?: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    limit?: number
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    resourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    resourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @type number
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof ApiextensionsV1ApilistApiextensionsV1CustomResourceDefinition
     */
    watch?: boolean
}

export interface ApiextensionsV1ApiPatchApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    name: string
    /**
     * 
     * @type any
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    body: any
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    dryRun?: string
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    fieldManager?: string
    /**
     * Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     * @type boolean
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinition
     */
    force?: boolean
}

export interface ApiextensionsV1ApiPatchApiextensionsV1CustomResourceDefinitionStatusRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    name: string
    /**
     * 
     * @type any
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    body: any
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    dryRun?: string
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @type string
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    fieldManager?: string
    /**
     * Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     * @type boolean
     * @memberof ApiextensionsV1ApipatchApiextensionsV1CustomResourceDefinitionStatus
     */
    force?: boolean
}

export interface ApiextensionsV1ApiReadApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApireadApiextensionsV1CustomResourceDefinition
     */
    name: string
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApireadApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
}

export interface ApiextensionsV1ApiReadApiextensionsV1CustomResourceDefinitionStatusRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApireadApiextensionsV1CustomResourceDefinitionStatus
     */
    name: string
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApireadApiextensionsV1CustomResourceDefinitionStatus
     */
    pretty?: string
}

export interface ApiextensionsV1ApiReplaceApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinition
     */
    name: string
    /**
     * 
     * @type IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinition
     */
    body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinition
     */
    dryRun?: string
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinition
     */
    fieldManager?: string
}

export interface ApiextensionsV1ApiReplaceApiextensionsV1CustomResourceDefinitionStatusRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinitionStatus
     */
    name: string
    /**
     * 
     * @type IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinitionStatus
     */
    body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinitionStatus
     */
    pretty?: string
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinitionStatus
     */
    dryRun?: string
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @type string
     * @memberof ApiextensionsV1ApireplaceApiextensionsV1CustomResourceDefinitionStatus
     */
    fieldManager?: string
}

export interface ApiextensionsV1ApiWatchApiextensionsV1CustomResourceDefinitionRequest {
    /**
     * name of the CustomResourceDefinition
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    name: string
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @type boolean
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    allowWatchBookmarks?: boolean
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    fieldSelector?: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    limit?: number
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    pretty?: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    resourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    resourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @type number
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinition
     */
    watch?: boolean
}

export interface ApiextensionsV1ApiWatchApiextensionsV1CustomResourceDefinitionListRequest {
    /**
     * allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @type boolean
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    allowWatchBookmarks?: boolean
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    fieldSelector?: string
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    limit?: number
    /**
     * If &#39;true&#39;, then the output is pretty printed.
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    pretty?: string
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    resourceVersion?: string
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @type string
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    resourceVersionMatch?: string
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @type number
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof ApiextensionsV1ApiwatchApiextensionsV1CustomResourceDefinitionList
     */
    watch?: boolean
}

export class ObjectApiextensionsV1Api {
    private api: ObservableApiextensionsV1Api

    public constructor(configuration: Configuration, requestFactory?: ApiextensionsV1ApiRequestFactory, responseProcessor?: ApiextensionsV1ApiResponseProcessor) {
        this.api = new ObservableApiextensionsV1Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * create a CustomResourceDefinition
     * @param param the request object
     */
    public createApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiCreateApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.createApiextensionsV1CustomResourceDefinition(param.body, param.pretty, param.dryRun, param.fieldManager,  options).toPromise();
    }

    /**
     * delete collection of CustomResourceDefinition
     * @param param the request object
     */
    public deleteApiextensionsV1CollectionCustomResourceDefinition(param: ApiextensionsV1ApiDeleteApiextensionsV1CollectionCustomResourceDefinitionRequest = {}, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        return this.api.deleteApiextensionsV1CollectionCustomResourceDefinition(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body,  options).toPromise();
    }

    /**
     * delete a CustomResourceDefinition
     * @param param the request object
     */
    public deleteApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiDeleteApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        return this.api.deleteApiextensionsV1CustomResourceDefinition(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body,  options).toPromise();
    }

    /**
     * get available resources
     * @param param the request object
     */
    public getApiextensionsV1APIResources(param: ApiextensionsV1ApiGetApiextensionsV1APIResourcesRequest = {}, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.getApiextensionsV1APIResources( options).toPromise();
    }

    /**
     * list or watch objects of kind CustomResourceDefinition
     * @param param the request object
     */
    public listApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiListApiextensionsV1CustomResourceDefinitionRequest = {}, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList> {
        return this.api.listApiextensionsV1CustomResourceDefinition(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * partially update the specified CustomResourceDefinition
     * @param param the request object
     */
    public patchApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiPatchApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.patchApiextensionsV1CustomResourceDefinition(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force,  options).toPromise();
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     * @param param the request object
     */
    public patchApiextensionsV1CustomResourceDefinitionStatus(param: ApiextensionsV1ApiPatchApiextensionsV1CustomResourceDefinitionStatusRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.patchApiextensionsV1CustomResourceDefinitionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force,  options).toPromise();
    }

    /**
     * read the specified CustomResourceDefinition
     * @param param the request object
     */
    public readApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiReadApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.readApiextensionsV1CustomResourceDefinition(param.name, param.pretty,  options).toPromise();
    }

    /**
     * read status of the specified CustomResourceDefinition
     * @param param the request object
     */
    public readApiextensionsV1CustomResourceDefinitionStatus(param: ApiextensionsV1ApiReadApiextensionsV1CustomResourceDefinitionStatusRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.readApiextensionsV1CustomResourceDefinitionStatus(param.name, param.pretty,  options).toPromise();
    }

    /**
     * replace the specified CustomResourceDefinition
     * @param param the request object
     */
    public replaceApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiReplaceApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.replaceApiextensionsV1CustomResourceDefinition(param.name, param.body, param.pretty, param.dryRun, param.fieldManager,  options).toPromise();
    }

    /**
     * replace status of the specified CustomResourceDefinition
     * @param param the request object
     */
    public replaceApiextensionsV1CustomResourceDefinitionStatus(param: ApiextensionsV1ApiReplaceApiextensionsV1CustomResourceDefinitionStatusRequest, options?: Configuration): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        return this.api.replaceApiextensionsV1CustomResourceDefinitionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager,  options).toPromise();
    }

    /**
     * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param param the request object
     */
    public watchApiextensionsV1CustomResourceDefinition(param: ApiextensionsV1ApiWatchApiextensionsV1CustomResourceDefinitionRequest, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchApiextensionsV1CustomResourceDefinition(param.name, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
     * @param param the request object
     */
    public watchApiextensionsV1CustomResourceDefinitionList(param: ApiextensionsV1ApiWatchApiextensionsV1CustomResourceDefinitionListRequest = {}, options?: Configuration): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchApiextensionsV1CustomResourceDefinitionList(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch,  options).toPromise();
    }

}

import { ObservableVersionApi } from "./ObservableAPI";
import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";

export interface VersionApiGetCodeVersionRequest {
}

export class ObjectVersionApi {
    private api: ObservableVersionApi

    public constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor) {
        this.api = new ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get the code version
     * @param param the request object
     */
    public getCodeVersion(param: VersionApiGetCodeVersionRequest = {}, options?: Configuration): Promise<IoK8sApimachineryPkgVersionInfo> {
        return this.api.getCodeVersion( options).toPromise();
    }

}
