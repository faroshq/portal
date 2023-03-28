import { WorkspaceStateType } from "@/store/workspaces/state";

const getters = {
  workspaces: (state: WorkspaceStateType) => {
    return state.workspaces;
  },
  defaultWorkspace: (state: WorkspaceStateType) => {
    return state.defaultWorkspace;
  },
  loading: (state: WorkspaceStateType) => state.loading,
  error: (state: WorkspaceStateType) => state.error,
  started: (state: WorkspaceStateType) => state.started,
};
export default getters;
