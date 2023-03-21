import { V1alpha1WorkspaceList, V1alpha1Workspace } from "@/api/faros";
import { V1alpha1LocationList } from "@/api/kcp";
import * as types from "./types";


export type WorkspaceStateType = {
  workspaces: types.OrganizationV1alpha1WorkspaceList;
  // defaultWorkspace is the workspace that is currently selected
  defaultWorkspace: V1alpha1Workspace;
  locations: types.WorkspaceV1alpha1LocationList;
  error: string;
  loading: boolean;
};

const state: WorkspaceStateType = {
  workspaces: new Map<string, V1alpha1WorkspaceList>([]),
  defaultWorkspace: {},
  locations: new Map<string, V1alpha1LocationList>([]),
  error: "",
  loading: false,
};

export default state;
