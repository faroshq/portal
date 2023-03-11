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

import { V1beta2GroupSubject } from '../models/V1beta2GroupSubject';
import { V1beta2ServiceAccountSubject } from '../models/V1beta2ServiceAccountSubject';
import { V1beta2UserSubject } from '../models/V1beta2UserSubject';
import { HttpFile } from '../http/http';

/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
export class V1beta2Subject {
    'group'?: V1beta2GroupSubject;
    /**
    * `kind` indicates which one of the other fields is non-empty. Required
    */
    'kind': string;
    'serviceAccount'?: V1beta2ServiceAccountSubject;
    'user'?: V1beta2UserSubject;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "V1beta2GroupSubject",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "V1beta2ServiceAccountSubject",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "V1beta2UserSubject",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta2Subject.attributeTypeMap;
    }

    public constructor() {
    }
}

