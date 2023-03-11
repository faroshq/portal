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

import { V1ConfigMapKeySelector } from '../models/V1ConfigMapKeySelector';
import { V1ObjectFieldSelector } from '../models/V1ObjectFieldSelector';
import { V1ResourceFieldSelector } from '../models/V1ResourceFieldSelector';
import { V1SecretKeySelector } from '../models/V1SecretKeySelector';
import { HttpFile } from '../http/http';

/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
export class V1EnvVarSource {
    'configMapKeyRef'?: V1ConfigMapKeySelector;
    'fieldRef'?: V1ObjectFieldSelector;
    'resourceFieldRef'?: V1ResourceFieldSelector;
    'secretKeyRef'?: V1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMapKeyRef",
            "baseName": "configMapKeyRef",
            "type": "V1ConfigMapKeySelector",
            "format": ""
        },
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "V1ObjectFieldSelector",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "V1ResourceFieldSelector",
            "format": ""
        },
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "V1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvVarSource.attributeTypeMap;
    }

    public constructor() {
    }
}

