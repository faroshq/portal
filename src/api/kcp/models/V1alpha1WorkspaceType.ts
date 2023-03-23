/**
 * Faros
 * Resource for managing KCP APIExportReference
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mangirdas@judeikis.LT
 *
 * NOTE: This is manually typed for now until we can get the generator to work with the kcp apis
 */

export class V1alpha1APIExportReference {
    /**
    * path is the fully-qualified path to the workspace containing the APIExport. If it is empty, the current workspace is assumed.
    */
    'path': string;
    /**
    * export is the name of the APIExport.
    */
    'export': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "export",
            "baseName": "export",
            "type": "string",
            "format": ""
        },
        ];

    static getAttributeTypeMap() {
        return V1alpha1APIExportReference.attributeTypeMap;
    }
}

