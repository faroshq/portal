/**
 * Faros
 * Resource for managing KCP SyncTargets
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

import { V1alpha1APIExportReference } from '@/api/kcp/models/V1alpha1WorkspaceType';

export class V1alpha1SyncTargetSpec {
    'unschedulable'?: boolean;
    'evictAfter'?: Date;
    'supportedAPIExports'?: Array<V1alpha1APIExportReference>;
    'cells'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "unschedulable",
            "baseName": "unschedulable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "evictAfter",
            "baseName": "evictAfter",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "supportedAPIExports",
            "baseName": "supportedAPIExports",
            "type": "Array<V1alpha1APIExportReference>",
            "format": ""
        },
        {
            "name": "cells",
            "baseName": "cells",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1SyncTargetSpec.attributeTypeMap;
    }
}

/**
* V1alpha1GroupVersionResource unambiguously identifies a resource.
*/
export class V1alpha1GroupVersionResource {
    /**
    * groupVersion specifies the API group and version in the form \"group/version\"
    */
    'groupVersion': string;
    /**
    * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
    */
    'version': string;
    /**
     * Resource is the name of the resource.  This is required to correctly build the REST URL.  For example, the REST URL for the calls to get a particular pod is /api/v1/pods/<pod-name>.  The name of the resource for this is \"pods\".
     */
    'resource': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupVersion",
            "baseName": "groupVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        } ];

    static getAttributeTypeMap() {
        return V1alpha1GroupVersionResource.attributeTypeMap;
    }
}

/**
* V1alpha1AvailableSelectorLabel is a list of labels that can be used to select an
// instance at this location in a placement object.
*/
export class V1alpha1AvailableSelectorLabel {
    /**
    * The label key that the selector applies to.
    */
    'key': string;
    /**
    * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
    */
    'values': Array<string>;
    /**
     * Description of the label
    */
    'description'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1AvailableSelectorLabel.attributeTypeMap;
    }
}
