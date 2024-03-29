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

import { V1ContainerState } from '../models/V1ContainerState';
import { HttpFile } from '../http/http';

/**
* ContainerStatus contains details for the current status of this container.
*/
export class V1ContainerStatus {
    /**
    * Container's ID in the format '<type>://<container_id>'.
    */
    'containerID'?: string;
    /**
    * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images.
    */
    'image': string;
    /**
    * ImageID of the container's image.
    */
    'imageID': string;
    'lastState'?: V1ContainerState;
    /**
    * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    */
    'name': string;
    /**
    * Specifies whether the container has passed its readiness probe.
    */
    'ready': boolean;
    /**
    * The number of times the container has been restarted.
    */
    'restartCount': number;
    /**
    * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
    */
    'started'?: boolean;
    'state'?: V1ContainerState;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerID",
            "baseName": "containerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageID",
            "baseName": "imageID",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastState",
            "baseName": "lastState",
            "type": "V1ContainerState",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "restartCount",
            "baseName": "restartCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "started",
            "baseName": "started",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "V1ContainerState",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

