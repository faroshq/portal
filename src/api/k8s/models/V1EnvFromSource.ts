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

import { V1ConfigMapEnvSource } from '../models/V1ConfigMapEnvSource';
import { V1SecretEnvSource } from '../models/V1SecretEnvSource';
import { HttpFile } from '../http/http';

/**
* EnvFromSource represents the source of a set of ConfigMaps
*/
export class V1EnvFromSource {
    'configMapRef'?: V1ConfigMapEnvSource;
    /**
    * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
    */
    'prefix'?: string;
    'secretRef'?: V1SecretEnvSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMapRef",
            "baseName": "configMapRef",
            "type": "V1ConfigMapEnvSource",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1SecretEnvSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvFromSource.attributeTypeMap;
    }

    public constructor() {
    }
}

