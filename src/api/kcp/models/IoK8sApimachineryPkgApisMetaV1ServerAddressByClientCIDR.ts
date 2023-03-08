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

import { HttpFile } from '../http/http';

/**
* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
*/
export class IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {
    /**
    * The CIDR with which clients can match their IP to figure out the server address that they should use.
    */
    'clientCIDR': string;
    /**
    * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
    */
    'serverAddress': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientCIDR",
            "baseName": "clientCIDR",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverAddress",
            "baseName": "serverAddress",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.attributeTypeMap;
    }

    public constructor() {
    }
}

