import { V1alpha1SyncTarget } from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";

export const LOADING_SYNCTARGETS= "LOADING_SYNCTARGETS";
export const REMOVE_SYNCTARGET = "REMOVE_SYNCTARGET";
export const ADD_SYNCTARGET = "ADD_SYNCTARGET";
export const UPDATE_SYNCTARGET = "UPDATE_SYNCTARGET";
export const ERROR_SYNCTARGET = "ERROR_SYNCTARGET";
export const SET_SYNCTARGETS = "SET_SYNCTARGETS";
export const SET_SYNCTARGETS_BOOTSTRAP_CONFIGS = "SET_SYNCTARGETS_BOOTSTRAP_CONFIGS";

export type WorkspacedSyncTarget = {
    workspace: V1alpha1Workspace;
    synctarget: V1alpha1SyncTarget;
}
