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

import { V2MetricTarget } from '../models/V2MetricTarget';
import { HttpFile } from '../http/http';

/**
* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.
*/
export class V2ContainerResourceMetricSource {
    /**
    * container is the name of the container in the pods of the scaling target
    */
    'container': string;
    /**
    * name is the name of the resource in question.
    */
    'name': string;
    'target': V2MetricTarget;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "V2MetricTarget",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2ContainerResourceMetricSource.attributeTypeMap;
    }

    public constructor() {
    }
}

