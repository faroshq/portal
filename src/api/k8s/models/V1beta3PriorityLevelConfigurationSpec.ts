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

import { V1beta3LimitedPriorityLevelConfiguration } from '../models/V1beta3LimitedPriorityLevelConfiguration';
import { HttpFile } from '../http/http';

/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
*/
export class V1beta3PriorityLevelConfigurationSpec {
    'limited'?: V1beta3LimitedPriorityLevelConfiguration;
    /**
    * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `\"Exempt\"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `\"Limited\"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limited",
            "baseName": "limited",
            "type": "V1beta3LimitedPriorityLevelConfiguration",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta3PriorityLevelConfigurationSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

