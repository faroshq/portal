/**
* Describes the state of the generic condition at a certain point.
*/
export class Condition {
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * A human readable message indicating details about the transition.
    */
    'message'?: string;
    /**
    * The reason for the condition's last transition.
    */
    'reason': string;
    /**
    * Status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * Type of the condition.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Condition.attributeTypeMap;
    }
}

export class Conditions {
    conditions?: Array<Condition>;
}
