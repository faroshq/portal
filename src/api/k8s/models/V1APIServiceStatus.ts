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

import { V1APIServiceCondition } from '../models/V1APIServiceCondition';
import { HttpFile } from '../http/http';

/**
* APIServiceStatus contains derived information about an API server
*/
export class V1APIServiceStatus {
    /**
    * Current service state of apiService.
    */
    'conditions'?: Array<V1APIServiceCondition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1APIServiceCondition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1APIServiceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
