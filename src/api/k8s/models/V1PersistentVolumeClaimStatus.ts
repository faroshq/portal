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

import { V1PersistentVolumeClaimCondition } from '../models/V1PersistentVolumeClaimCondition';
import { HttpFile } from '../http/http';

/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
*/
export class V1PersistentVolumeClaimStatus {
    /**
    * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    /**
    * allocatedResources is the storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'allocatedResources'?: { [key: string]: string; };
    /**
    * capacity represents the actual resources of the underlying volume.
    */
    'capacity'?: { [key: string]: string; };
    /**
    * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
    */
    'conditions'?: Array<V1PersistentVolumeClaimCondition>;
    /**
    * phase represents the current phase of PersistentVolumeClaim.  
    */
    'phase'?: string;
    /**
    * resizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'resizeStatus'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "allocatedResources",
            "baseName": "allocatedResources",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1PersistentVolumeClaimCondition>",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "resizeStatus",
            "baseName": "resizeStatus",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

