import * as types from "./types";
import { WorkspaceStateType } from "@/store/workspaces/state";
import { V1alpha1WorkspaceList, V1alpha1Workspace } from "@/api/faros";
import { V1alpha1LocationList } from "@/api/kcp";

// Workspaces mutators are reliant on the organization name in the reference
// fields of the workspace. We should always operate native objects, not
// manually constructed objects.

const mutations = {
  [types.LOADING_WORKSPACE](state: WorkspaceStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_WORKSPACE](state: WorkspaceStateType, workspace: V1alpha1Workspace) {
    console.log("REMOVE_WORKSPACE", workspace)
    state.workspaces.items = state.workspaces.items.filter((h) => h.metadata?.name !== workspace.metadata?.name);
  },

  [types.ADD_WORKSPACE](state: WorkspaceStateType, createdWorkspace: V1alpha1Workspace) {
    state.workspaces.items.push(createdWorkspace);
  },

  [types.UPDATE_WORKSPACE](state: WorkspaceStateType, updatedWorkspace: V1alpha1Workspace) {
    const index = state.workspaces.items.findIndex((h) => h.metadata?.name === updatedWorkspace.metadata?.name);
    state.workspaces.items[index] = updatedWorkspace;
  },

  [types.ERROR_WORKSPACE](state: WorkspaceStateType, error: string) {
    state.error = error;
  },

  [types.SET_WORKSPACES](state: WorkspaceStateType, workspaces: V1alpha1WorkspaceList) {
    state.workspaces = workspaces;
  },

  [types.SET_DEFAULT_WORKSPACE](state: WorkspaceStateType, workspace: V1alpha1Workspace) {
    state.defaultWorkspace = workspace;
  },

};

export default mutations;
