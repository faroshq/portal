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

import { OidcIDToken } from '../models/OidcIDToken';
import { HttpFile } from '../http/http';

export class ModelsLoginResponse {
    'accessToken': string;
    'certificateAuthorityData': string;
    'email': string;
    'expiresAt': number;
    'idToken': OidcIDToken;
    'refreshToken': string;
    'serverBaseUrl': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificateAuthorityData",
            "baseName": "certificateAuthorityData",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "idToken",
            "baseName": "idToken",
            "type": "OidcIDToken",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverBaseUrl",
            "baseName": "serverBaseUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelsLoginResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

