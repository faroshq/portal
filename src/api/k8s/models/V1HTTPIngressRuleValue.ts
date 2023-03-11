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

import { V1HTTPIngressPath } from '../models/V1HTTPIngressPath';
import { HttpFile } from '../http/http';

/**
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
*/
export class V1HTTPIngressRuleValue {
    /**
    * A collection of paths that map requests to backends.
    */
    'paths': Array<V1HTTPIngressPath>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<V1HTTPIngressPath>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1HTTPIngressRuleValue.attributeTypeMap;
    }

    public constructor() {
    }
}

