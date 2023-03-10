/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.24.3+kcp
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from '../models/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';
import { HttpFile } from '../http/http';

/**
* CustomResourceConversion describes how to convert different versions of a CR.
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion {
    /**
    * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
    */
    'strategy': string;
    'webhook'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.attributeTypeMap;
    }

    public constructor() {
    }
}

