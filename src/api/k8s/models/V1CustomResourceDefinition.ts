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

import { V1CustomResourceDefinitionSpec } from '../models/V1CustomResourceDefinitionSpec';
import { V1CustomResourceDefinitionStatus } from '../models/V1CustomResourceDefinitionStatus';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { HttpFile } from '../http/http';

/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
*/
export class V1CustomResourceDefinition {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec': V1CustomResourceDefinitionSpec;
    'status'?: V1CustomResourceDefinitionStatus;

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
            "type": "V1CustomResourceDefinitionSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1CustomResourceDefinitionStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CustomResourceDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

