import { V1alpha1Workspace, V1alpha1WorkspaceList } from "@/api/faros";
import { V1alpha1LocationList, V1alpha1Location } from "@/api/kcp";


// OrganizationV1alpha1WorkspaceList is a map of organization names to workspace lists
export type OrganizationV1alpha1WorkspaceList = Map<string, V1alpha1WorkspaceList>;
// WorkspaceV1alpha1LocationList is a map of workspace names to location lists
export type WorkspaceV1alpha1LocationList = Map<string, V1alpha1LocationList>;

// WorkspacedLocation is internal type used for state management
export type WorkspacedLocation = {
    workspace: V1alpha1Workspace;
    location: V1alpha1Location;
}

// WorkspacedLocationList is internal type used for state management
export type WorkspacedLocationList  = {
    workspace: V1alpha1Workspace;
    locations: V1alpha1LocationList;
}


export const LOADING_WORKSPACE= "LOADING_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const ADD_WORKSPACE = "ADD_WORKSPACE";
export const UPDATE_WORKSPACE = "UPDATE_WORKSPACE";
export const ERROR_WORKSPACE = "ERROR_WORKSPACE";
export const SET_WORKSPACES = "SET_WORKSPACES";
export const SET_DEFAULT_WORKSPACE = "SET_DEFAULT_WORKSPACE";

export const ADD_WORKSPACED_LOCATION = "ADD_WORKSPACED_LOCATION";
export const ADD_WORKSPACED_LOCATIONS = "ADD_WORKSPACED_LOCATIONS";
