import { V1alpha1Workspace } from "@/api/faros";
import { V1alpha1Placement } from "@/api/kcp";

export const LOADING_PLACEMENTS= "LOADING_PLACEMENTS";
export const REMOVE_PLACEMENT = "REMOVE_PLACEMENT";
export const ADD_PLACEMENT = "ADD_PLACEMENT";
export const UPDATE_PLACEMENT = "UPDATE_PLACEMENT";
export const ERROR_PLACEMENT = "ERROR_PLACEMENT";
export const SET_PLACEMENTS = "SET_PLACEMENTS";
export const SET_STARTED_PLACEMENTS = "SET_STARTED_PLACEMENTS";

export type WorkspacedPlacement = {
    workspace: V1alpha1Workspace;
    placement: V1alpha1Placement;
}
