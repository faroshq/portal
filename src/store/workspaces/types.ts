import { V1alpha1WorkspaceList } from "@/api/faros";


// OrganizationV1alpha1WorkspaceList is a map of organization names to workspace lists
export type OrganizationV1alpha1WorkspaceList = Map<string, V1alpha1WorkspaceList>;

export const LOADING_WORKSPACE= "LOADING_WORKSPACE";
export const REMOVE_WORKSPACE = "REMOVE_WORKSPACE";
export const ADD_WORKSPACE = "ADD_WORKSPACE";
export const UPDATE_WORKSPACE = "UPDATE_WORKSPACE";
export const ERROR_WORKSPACE = "ERROR_WORKSPACE";
export const SET_WORKSPACES = "SET_WORKSPACES";
export const SET_DEFAULT_WORKSPACE = "SET_DEFAULT_WORKSPACE";
