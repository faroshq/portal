import { WorkspaceStateType } from "@/store/workspaces/state";

const getters = {
  workspaces: (state: WorkspaceStateType) => {
    return state.workspaces;
  },
  defaultWorkspace: (state: WorkspaceStateType) => {
    return state.defaultWorkspace;
  },
  locations: (state: WorkspaceStateType) => {
    return state.locations;
  },
  loading: (state: WorkspaceStateType) => state.loading,
  error: (state: WorkspaceStateType) => state.error,
};
export default getters;
