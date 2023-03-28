/**
 * Faros
 * Resource for managing KCP SyncTarget
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

import { V1APIResourceList } from '@/api/k8s/models/V1APIResourceList';
import { Conditions } from '@/api/kcp/models/Conditions';

export class V1alpha1SyncTargetStatus {
    'allocatable'?: V1APIResourceList;
    'capacity'?: V1APIResourceList;
    'conditions': Conditions;
    'availableInstances'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "instances",
            "baseName": "instances",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "availableInstances",
            "baseName": "availableInstances",
            "type": "number",
            "format": "int32"
        },
        ];

    static getAttributeTypeMap() {
        return V1alpha1SyncTargetStatus.attributeTypeMap;
    }
}

