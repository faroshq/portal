/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.26.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1DaemonSetSpec } from '../models/V1DaemonSetSpec';
import { V1DaemonSetStatus } from '../models/V1DaemonSetStatus';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { HttpFile } from '../http/http';

/**
* DaemonSet represents the configuration of a daemon set.
*/
export class V1DaemonSet {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1DaemonSetSpec;
    'status'?: V1DaemonSetStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1DaemonSetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1DaemonSetStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonSet.attributeTypeMap;
    }

    public constructor() {
    }
}

