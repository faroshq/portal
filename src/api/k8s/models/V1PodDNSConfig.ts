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

import { V1PodDNSConfigOption } from '../models/V1PodDNSConfigOption';
import { HttpFile } from '../http/http';

/**
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
*/
export class V1PodDNSConfig {
    /**
    * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
    */
    'nameservers'?: Array<string>;
    /**
    * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
    */
    'options'?: Array<V1PodDNSConfigOption>;
    /**
    * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
    */
    'searches'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nameservers",
            "baseName": "nameservers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<V1PodDNSConfigOption>",
            "format": ""
        },
        {
            "name": "searches",
            "baseName": "searches",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodDNSConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

