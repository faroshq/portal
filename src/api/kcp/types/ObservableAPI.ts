import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApiextensionsApiRequestFactory, ApiextensionsApiResponseProcessor} from "../apis/ApiextensionsApi";
export class ObservableApiextensionsApi {
    private requestFactory: ApiextensionsApiRequestFactory;
    private responseProcessor: ApiextensionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiextensionsApiRequestFactory,
        responseProcessor?: ApiextensionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiextensionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiextensionsApiResponseProcessor();
    }

    /**
     * get information of a group
     */
    public getApiextensionsAPIGroup(_options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1APIGroup> {
        const requestContextPromise = this.requestFactory.getApiextensionsAPIGroup(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiextensionsAPIGroup(rsp)));
            }));
    }

}

import { ApiextensionsV1ApiRequestFactory, ApiextensionsV1ApiResponseProcessor} from "../apis/ApiextensionsV1Api";
export class ObservableApiextensionsV1Api {
    private requestFactory: ApiextensionsV1ApiRequestFactory;
    private responseProcessor: ApiextensionsV1ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiextensionsV1ApiRequestFactory,
        responseProcessor?: ApiextensionsV1ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiextensionsV1ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiextensionsV1ApiResponseProcessor();
    }

    /**
     * create a CustomResourceDefinition
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public createApiextensionsV1CustomResourceDefinition(body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.createApiextensionsV1CustomResourceDefinition(body, pretty, dryRun, fieldManager, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * delete collection of CustomResourceDefinition
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body 
     */
    public deleteApiextensionsV1CollectionCustomResourceDefinition(pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions, _options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1Status> {
        const requestContextPromise = this.requestFactory.deleteApiextensionsV1CollectionCustomResourceDefinition(pretty, _continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiextensionsV1CollectionCustomResourceDefinition(rsp)));
            }));
    }

    /**
     * delete a CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body 
     */
    public deleteApiextensionsV1CustomResourceDefinition(name: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions, _options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1Status> {
        const requestContextPromise = this.requestFactory.deleteApiextensionsV1CustomResourceDefinition(name, pretty, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * get available resources
     */
    public getApiextensionsV1APIResources(_options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const requestContextPromise = this.requestFactory.getApiextensionsV1APIResources(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiextensionsV1APIResources(rsp)));
            }));
    }

    /**
     * list or watch objects of kind CustomResourceDefinition
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listApiextensionsV1CustomResourceDefinition(pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList> {
        const requestContextPromise = this.requestFactory.listApiextensionsV1CustomResourceDefinition(pretty, allowWatchBookmarks, _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * partially update the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public patchApiextensionsV1CustomResourceDefinition(name: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.patchApiextensionsV1CustomResourceDefinition(name, body, pretty, dryRun, fieldManager, force, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    public patchApiextensionsV1CustomResourceDefinitionStatus(name: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.patchApiextensionsV1CustomResourceDefinitionStatus(name, body, pretty, dryRun, fieldManager, force, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiextensionsV1CustomResourceDefinitionStatus(rsp)));
            }));
    }

    /**
     * read the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public readApiextensionsV1CustomResourceDefinition(name: string, pretty?: string, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.readApiextensionsV1CustomResourceDefinition(name, pretty, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * read status of the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     */
    public readApiextensionsV1CustomResourceDefinitionStatus(name: string, pretty?: string, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.readApiextensionsV1CustomResourceDefinitionStatus(name, pretty, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readApiextensionsV1CustomResourceDefinitionStatus(rsp)));
            }));
    }

    /**
     * replace the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public replaceApiextensionsV1CustomResourceDefinition(name: string, body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.replaceApiextensionsV1CustomResourceDefinition(name, body, pretty, dryRun, fieldManager, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * replace status of the specified CustomResourceDefinition
     * @param name name of the CustomResourceDefinition
     * @param body 
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    public replaceApiextensionsV1CustomResourceDefinitionStatus(name: string, body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Observable<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
        const requestContextPromise = this.requestFactory.replaceApiextensionsV1CustomResourceDefinitionStatus(name, body, pretty, dryRun, fieldManager, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceApiextensionsV1CustomResourceDefinitionStatus(rsp)));
            }));
    }

    /**
     * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param name name of the CustomResourceDefinition
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchApiextensionsV1CustomResourceDefinition(name: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const requestContextPromise = this.requestFactory.watchApiextensionsV1CustomResourceDefinition(name, allowWatchBookmarks, _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, timeoutSeconds, watch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.watchApiextensionsV1CustomResourceDefinition(rsp)));
            }));
    }

    /**
     * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If &#39;true&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchApiextensionsV1CustomResourceDefinitionList(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Observable<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const requestContextPromise = this.requestFactory.watchApiextensionsV1CustomResourceDefinitionList(allowWatchBookmarks, _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, timeoutSeconds, watch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.watchApiextensionsV1CustomResourceDefinitionList(rsp)));
            }));
    }

}

import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";
export class ObservableVersionApi {
    private requestFactory: VersionApiRequestFactory;
    private responseProcessor: VersionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionApiRequestFactory,
        responseProcessor?: VersionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionApiResponseProcessor();
    }

    /**
     * get the code version
     */
    public getCodeVersion(_options?: Configuration): Observable<IoK8sApimachineryPkgVersionInfo> {
        const requestContextPromise = this.requestFactory.getCodeVersion(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCodeVersion(rsp)));
            }));
    }

}
