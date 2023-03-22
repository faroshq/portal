import { V1alpha1WorkspaceList, V1alpha1Workspace } from "@/api/faros";

// Workspaces state will be reloaded each time the user navigates to the workspaces page
// for particular workspace

export type WorkspaceStateType = {
  workspaces: V1alpha1WorkspaceList;
  // defaultWorkspace is the workspace that is currently selected
  defaultWorkspace: V1alpha1Workspace;
  error: string;
  loading: boolean;
};

const state: WorkspaceStateType = {
  workspaces: { items: [] },
  defaultWorkspace: {},
  error: "",
  loading: false,
};

export default state;
