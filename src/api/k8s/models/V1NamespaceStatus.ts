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

import { V1NamespaceCondition } from '../models/V1NamespaceCondition';
import { HttpFile } from '../http/http';

/**
* NamespaceStatus is information about the current status of a Namespace.
*/
export class V1NamespaceStatus {
    /**
    * Represents the latest available observations of a namespace's current state.
    */
    'conditions'?: Array<V1NamespaceCondition>;
    /**
    * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/  
    */
    'phase'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1NamespaceCondition>",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NamespaceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

