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
* A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
*/
export class V1TopologySelectorLabelRequirement {
    /**
    * The label key that the selector applies to.
    */
    'key': string;
    /**
    * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
    */
    'values': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1TopologySelectorLabelRequirement.attributeTypeMap;
    }

    public constructor() {
    }
}

