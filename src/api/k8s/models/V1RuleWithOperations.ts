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

import { HttpFile } from '../http/http';

/**
* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
*/
export class V1RuleWithOperations {
    /**
    * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
    */
    'apiGroups'?: Array<string>;
    /**
    * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
    */
    'apiVersions'?: Array<string>;
    /**
    * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
    */
    'operations'?: Array<string>;
    /**
    * 
    */
    'resources'?: Array<string>;
    /**
    * scope specifies the scope of this rule. Valid values are \"Cluster\", \"Namespaced\", and \"*\" \"Cluster\" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \"Namespaced\" means that only namespaced resources will match this rule. \"*\" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \"*\".
    */
    'scope'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "apiVersions",
            "baseName": "apiVersions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1RuleWithOperations.attributeTypeMap;
    }

    public constructor() {
    }
}
