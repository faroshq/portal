export * from '../models/ModelsLoginResponse';
export * from '../models/OidcClaimSource';
export * from '../models/OidcIDToken';
export * from '../models/V1ListMeta';
export * from '../models/V1ManagedFieldsEntry';
export * from '../models/V1ObjectMeta';
export * from '../models/V1ObjectReference';
export * from '../models/V1OwnerReference';
export * from '../models/V1Status';
export * from '../models/V1StatusCause';
export * from '../models/V1StatusDetails';
export * from '../models/V1TypeMeta';
export * from '../models/V1alpha1Condition';
export * from '../models/V1alpha1ObjectReference';
export * from '../models/V1alpha1Organization';
export * from '../models/V1alpha1OrganizationList';
export * from '../models/V1alpha1OrganizationSpec';
export * from '../models/V1alpha1OrganizationStatus';
export * from '../models/V1alpha1Workspace';
export * from '../models/V1alpha1WorkspaceList';
export * from '../models/V1alpha1WorkspaceSpec';
export * from '../models/V1alpha1WorkspaceStatus';

import { ModelsLoginResponse } from '../models/ModelsLoginResponse';
import { OidcClaimSource } from '../models/OidcClaimSource';
import { OidcIDToken } from '../models/OidcIDToken';
import { V1ListMeta } from '../models/V1ListMeta';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1ObjectReference } from '../models/V1ObjectReference';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1Status } from '../models/V1Status';
import { V1StatusCause } from '../models/V1StatusCause';
import { V1StatusDetails } from '../models/V1StatusDetails';
import { V1TypeMeta } from '../models/V1TypeMeta';
import { V1alpha1Condition } from '../models/V1alpha1Condition';
import { V1alpha1ObjectReference } from '../models/V1alpha1ObjectReference';
import { V1alpha1Organization } from '../models/V1alpha1Organization';
import { V1alpha1OrganizationList } from '../models/V1alpha1OrganizationList';
import { V1alpha1OrganizationSpec } from '../models/V1alpha1OrganizationSpec';
import { V1alpha1OrganizationStatus } from '../models/V1alpha1OrganizationStatus';
import { V1alpha1Workspace } from '../models/V1alpha1Workspace';
import { V1alpha1WorkspaceList } from '../models/V1alpha1WorkspaceList';
import { V1alpha1WorkspaceSpec } from '../models/V1alpha1WorkspaceSpec';
import { V1alpha1WorkspaceStatus } from '../models/V1alpha1WorkspaceStatus';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "ModelsLoginResponse": ModelsLoginResponse,
    "OidcClaimSource": OidcClaimSource,
    "OidcIDToken": OidcIDToken,
    "V1ListMeta": V1ListMeta,
    "V1ManagedFieldsEntry": V1ManagedFieldsEntry,
    "V1ObjectMeta": V1ObjectMeta,
    "V1ObjectReference": V1ObjectReference,
    "V1OwnerReference": V1OwnerReference,
    "V1Status": V1Status,
    "V1StatusCause": V1StatusCause,
    "V1StatusDetails": V1StatusDetails,
    "V1TypeMeta": V1TypeMeta,
    "V1alpha1Condition": V1alpha1Condition,
    "V1alpha1ObjectReference": V1alpha1ObjectReference,
    "V1alpha1Organization": V1alpha1Organization,
    "V1alpha1OrganizationList": V1alpha1OrganizationList,
    "V1alpha1OrganizationSpec": V1alpha1OrganizationSpec,
    "V1alpha1OrganizationStatus": V1alpha1OrganizationStatus,
    "V1alpha1Workspace": V1alpha1Workspace,
    "V1alpha1WorkspaceList": V1alpha1WorkspaceList,
    "V1alpha1WorkspaceSpec": V1alpha1WorkspaceSpec,
    "V1alpha1WorkspaceStatus": V1alpha1WorkspaceStatus,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
