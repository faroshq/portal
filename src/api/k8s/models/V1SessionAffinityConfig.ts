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

import { V1ClientIPConfig } from '../models/V1ClientIPConfig';
import { HttpFile } from '../http/http';

/**
* SessionAffinityConfig represents the configurations of session affinity.
*/
export class V1SessionAffinityConfig {
    'clientIP'?: V1ClientIPConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientIP",
            "baseName": "clientIP",
            "type": "V1ClientIPConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SessionAffinityConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

