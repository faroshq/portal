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

import { ApiextensionsV1WebhookClientConfig } from '../models/ApiextensionsV1WebhookClientConfig';
import { HttpFile } from '../http/http';

/**
* WebhookConversion describes how to call a conversion webhook
*/
export class V1WebhookConversion {
    'clientConfig'?: ApiextensionsV1WebhookClientConfig;
    /**
    * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
    */
    'conversionReviewVersions': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientConfig",
            "baseName": "clientConfig",
            "type": "ApiextensionsV1WebhookClientConfig",
            "format": ""
        },
        {
            "name": "conversionReviewVersions",
            "baseName": "conversionReviewVersions",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1WebhookConversion.attributeTypeMap;
    }

    public constructor() {
    }
}

