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

import { V1ServerAddressByClientCIDR } from '../models/V1ServerAddressByClientCIDR';
import { HttpFile } from '../http/http';

/**
* APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
*/
export class V1APIVersions {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
    */
    'serverAddressByClientCIDRs': Array<V1ServerAddressByClientCIDR>;
    /**
    * versions are the api versions that are available.
    */
    'versions': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverAddressByClientCIDRs",
            "baseName": "serverAddressByClientCIDRs",
            "type": "Array<V1ServerAddressByClientCIDR>",
            "format": ""
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1APIVersions.attributeTypeMap;
    }

    public constructor() {
    }
}
