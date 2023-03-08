import * as types from "./types";
import { WorkspaceStateType } from "@/store/workspaces/state";
import { V1alpha1WorkspaceList, V1alpha1Workspace } from "@/api/faros";

// Workspaces mutators are reliant on the organization name in the reference
// fields of the workspace. We should always operate native objects, not
// manually constructed objects.

const mutations = {
  [types.LOADING_WORKSPACE](state: WorkspaceStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_WORKSPACE](state: WorkspaceStateType, workspace: V1alpha1Workspace) {
    const orgName = workspace.spec?.organizationRef?.name as string;
    const workspaces = state.workspaces.get(orgName);
    if (workspaces) {
      workspaces.items = workspaces.items.filter((h) => h.metadata?.name !== workspace.metadata?.name);
      state.workspaces.set(orgName, workspaces);
    }
  },

  [types.ADD_WORKSPACE](state: WorkspaceStateType, createdWorkspace: V1alpha1Workspace) {
    const orgName = createdWorkspace.spec?.organizationRef?.name as string;
    const workspaces = state.workspaces.get(orgName);
    if (workspaces) {
      workspaces.items.push(createdWorkspace);
      state.workspaces.set(orgName, workspaces);
    }
  },

  [types.UPDATE_WORKSPACE](state: WorkspaceStateType, updatedWorkspace: V1alpha1Workspace) {
    const orgName = updatedWorkspace.spec?.organizationRef?.name as string;
    const workspaces = state.workspaces.get(orgName);
    if (workspaces) {
      const index = workspaces.items.findIndex((h) => h.metadata?.name === updatedWorkspace.metadata?.name);
      workspaces.items[index] = updatedWorkspace;
      state.workspaces.set(orgName, workspaces);
    }
  },

  [types.ERROR_WORKSPACE](state: WorkspaceStateType, error: string) {
    state.error = error;
  },

  [types.SET_WORKSPACES](state: WorkspaceStateType, workspaces: V1alpha1WorkspaceList) {
    const orgName = workspaces.items[0].spec?.organizationRef?.name as string;
    state.workspaces.set(orgName, workspaces);
  },

};

export default mutations;
