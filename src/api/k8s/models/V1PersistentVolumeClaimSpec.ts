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

import { V1LabelSelector } from '../models/V1LabelSelector';
import { V1ResourceRequirements } from '../models/V1ResourceRequirements';
import { V1TypedLocalObjectReference } from '../models/V1TypedLocalObjectReference';
import { V1TypedObjectReference } from '../models/V1TypedObjectReference';
import { HttpFile } from '../http/http';

/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
export class V1PersistentVolumeClaimSpec {
    /**
    * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    'dataSource'?: V1TypedLocalObjectReference;
    'dataSourceRef'?: V1TypedObjectReference;
    'resources'?: V1ResourceRequirements;
    'selector'?: V1LabelSelector;
    /**
    * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
    */
    'storageClassName'?: string;
    /**
    * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
    */
    'volumeMode'?: string;
    /**
    * volumeName is the binding reference to the PersistentVolume backing this claim.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "V1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "dataSourceRef",
            "baseName": "dataSourceRef",
            "type": "V1TypedObjectReference",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ResourceRequirements",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

