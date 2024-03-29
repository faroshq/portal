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

import { V1JobCondition } from '../models/V1JobCondition';
import { V1UncountedTerminatedPods } from '../models/V1UncountedTerminatedPods';
import { HttpFile } from '../http/http';

/**
* JobStatus represents the current state of a Job.
*/
export class V1JobStatus {
    /**
    * The number of pending and running pods.
    */
    'active'?: number;
    /**
    * CompletedIndexes holds the completed indexes when .spec.completionMode = \"Indexed\" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\".
    */
    'completedIndexes'?: string;
    /**
    * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is only set when the job finishes successfully.
    */
    'completionTime'?: Date;
    /**
    * The latest available observations of an object's current state. When a Job fails, one of the conditions will have type \"Failed\" and status true. When a Job is suspended, one of the conditions will have type \"Suspended\" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type \"Complete\" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'conditions'?: Array<V1JobCondition>;
    /**
    * The number of pods which reached phase Failed.
    */
    'failed'?: number;
    /**
    * The number of pods which have a Ready condition.  This field is beta-level. The job controller populates the field when the feature gate JobReadyPods is enabled (enabled by default).
    */
    'ready'?: number;
    /**
    * Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.
    */
    'startTime'?: Date;
    /**
    * The number of pods which reached phase Succeeded.
    */
    'succeeded'?: number;
    'uncountedTerminatedPods'?: V1UncountedTerminatedPods;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "completedIndexes",
            "baseName": "completedIndexes",
            "type": "string",
            "format": ""
        },
        {
            "name": "completionTime",
            "baseName": "completionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1JobCondition>",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "uncountedTerminatedPods",
            "baseName": "uncountedTerminatedPods",
            "type": "V1UncountedTerminatedPods",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1JobStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

