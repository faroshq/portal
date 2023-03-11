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

import { V1ExecAction } from '../models/V1ExecAction';
import { V1GRPCAction } from '../models/V1GRPCAction';
import { V1HTTPGetAction } from '../models/V1HTTPGetAction';
import { V1TCPSocketAction } from '../models/V1TCPSocketAction';
import { HttpFile } from '../http/http';

/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
*/
export class V1Probe {
    'exec'?: V1ExecAction;
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    */
    'failureThreshold'?: number;
    'grpc'?: V1GRPCAction;
    'httpGet'?: V1HTTPGetAction;
    /**
    * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'initialDelaySeconds'?: number;
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    */
    'periodSeconds'?: number;
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
    */
    'successThreshold'?: number;
    'tcpSocket'?: V1TCPSocketAction;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
    */
    'terminationGracePeriodSeconds'?: number;
    /**
    * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'timeoutSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1ExecAction",
            "format": ""
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "grpc",
            "baseName": "grpc",
            "type": "V1GRPCAction",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1HTTPGetAction",
            "format": ""
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1TCPSocketAction",
            "format": ""
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1Probe.attributeTypeMap;
    }

    public constructor() {
    }
}

