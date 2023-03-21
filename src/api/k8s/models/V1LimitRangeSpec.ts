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

import { V1LimitRangeItem } from '../models/V1LimitRangeItem';
import { HttpFile } from '../http/http';

/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
*/
export class V1LimitRangeSpec {
    /**
    * Limits is the list of LimitRangeItem objects that are enforced.
    */
    'limits': Array<V1LimitRangeItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<V1LimitRangeItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LimitRangeSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
