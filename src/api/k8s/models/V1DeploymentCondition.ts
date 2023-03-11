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
* DeploymentCondition describes the state of a deployment at a certain point.
*/
export class V1DeploymentCondition {
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * The last time this condition was updated.
    */
    'lastUpdateTime'?: Date;
    /**
    * A human readable message indicating details about the transition.
    */
    'message'?: string;
    /**
    * The reason for the condition's last transition.
    */
    'reason'?: string;
    /**
    * Status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * Type of deployment condition.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastUpdateTime",
            "baseName": "lastUpdateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DeploymentCondition.attributeTypeMap;
    }

    public constructor() {
    }
}

