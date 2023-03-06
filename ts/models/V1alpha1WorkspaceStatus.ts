/**
 * Faros
 * Resource for managing Faros workspaces
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha1Condition } from '../models/V1alpha1Condition';
import { HttpFile } from '../http/http';

export class V1alpha1WorkspaceStatus {
    'conditions'?: Array<V1alpha1Condition>;
    'workspaceURL'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1Condition>",
            "format": ""
        },
        {
            "name": "workspaceURL",
            "baseName": "workspaceURL",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1WorkspaceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

