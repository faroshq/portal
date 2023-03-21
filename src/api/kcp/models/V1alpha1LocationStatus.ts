/**
 * Faros
 * Resource for managing KCP Locations
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

export class V1alpha1LocationStatus {
    'instances'?: number;
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
        return V1alpha1LocationStatus.attributeTypeMap;
    }
}

