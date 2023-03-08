import { V1alpha1Workspace, V1alpha1WorkspaceList } from "@/api/faros";
import * as types from "./types";


export type WorkspaceStateType = {
  workspaces: types.OrganizationV1alpha1WorkspaceList;
  error: string;
  loading: boolean;
};

const state: WorkspaceStateType = {
  workspaces: new Map<string, V1alpha1WorkspaceList>([]),
  error: "",
  loading: false,
};

export default state;
