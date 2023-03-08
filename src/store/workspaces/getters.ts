import { WorkspaceStateType } from "@/store/workspaces/state";

const getters = {
  workspaces: (state: WorkspaceStateType) => {
    return state.workspaces;
  },
  loading: (state: WorkspaceStateType) => state.loading,
  error: (state: WorkspaceStateType) => state.error,
};
export default getters;
