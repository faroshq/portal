/**
 * Faros
 * Resource for managing KCP V1alpha1PlacementStatus
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

import { Conditions } from '@/api/kcp/models/Conditions';

export class PlacementPhase {
    static readonly Pending: PlacementPhase = 'Pending';
    static readonly Running: PlacementPhase = 'Running';
    static readonly Succeeded: PlacementPhase = 'Succeeded';
    static readonly Failed: PlacementPhase = 'Failed';
}

export class V1alpha1PlacementStatus {
    'phase': PlacementPhase
    'selectedLocation'?: LocationReference;
    'conditions': Conditions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "phase",
            "baseName": "phase",
            "type": "PlacementPhase",
            "format": ""
        },
        {
            "name": "selectedLocation",
            "baseName": "selectedLocation",
            "type": "LocationReference",
            "format": ""
        },
        ];

    static getAttributeTypeMap() {
        return V1alpha1PlacementStatus.attributeTypeMap;
    }
}


/**
* LocationReference unambiguously identifies a resource.
*/
export class LocationReference {
    /**
    * path is an absolute reference to a workspace, e.g. root:org:ws. The workspace must
	* be some ancestor or a child of some ancestor.
    */
    'path': string;
    /**
    * locationName is the name of the location within the workspace.
    */
    'locationName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationName",
            "baseName": "locationName",
            "type": "string",
            "format": ""
        },
       ];

    static getAttributeTypeMap() {
        return LocationReference.attributeTypeMap;
    }
}
