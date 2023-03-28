import { V1alpha1Location } from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";

export const LOADING_LOCATIONS= "LOADING_LOCATIONS";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const ERROR_LOCATION = "ERROR_LOCATION";
export const SET_LOCATIONS = "SET_LOCATIONS";
export const SET_STARTED_LOCATIONS = "SET_STARTED_LOCATIONS";

export type WorkspacedLocation = {
    workspace: V1alpha1Workspace;
    location: V1alpha1Location;
}
