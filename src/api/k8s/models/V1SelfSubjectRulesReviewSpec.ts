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
* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
*/
export class V1SelfSubjectRulesReviewSpec {
    /**
    * Namespace to evaluate rules for. Required.
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SelfSubjectRulesReviewSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

