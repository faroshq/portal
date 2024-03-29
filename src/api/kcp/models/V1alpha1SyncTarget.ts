/**
 * Faros
 * Resource for managing KCP SyncTarget
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

import { V1ObjectMeta } from '@/api/k8s/models/V1ObjectMeta';
import { V1alpha1SyncTargetSpec } from './V1alpha1SyncTargetSpec';
import { V1alpha1SyncTargetStatus } from './V1alpha1SyncTargetStatus';

export class V1alpha1SyncTarget {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata': V1ObjectMeta;
    'spec'?: V1alpha1SyncTargetSpec;
    'status'?: V1alpha1SyncTargetStatus;

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
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1SyncTargetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1SyncTargetStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1SyncTarget.attributeTypeMap;
    }
}

