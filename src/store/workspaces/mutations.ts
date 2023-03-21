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
    } else {
      const newWorkspaces = new V1alpha1WorkspaceList();
      newWorkspaces.items = [];
      newWorkspaces.items.push(createdWorkspace);
      state.workspaces.set(orgName, newWorkspaces);
    }
  },

  [types.UPDATE_WORKSPACE](state: WorkspaceStateType, updatedWorkspace: V1alpha1Workspace) {
    const orgName = updatedWorkspace.spec?.organizationRef?.name as string;
    const workspaces = state.workspaces.get(orgName);
    if (workspaces) {
      const index = workspaces.items.findIndex((h) => h.metadata?.name === updatedWorkspace.metadata?.name);
      workspaces.items[index] = updatedWorkspace;
      state.workspaces.set(orgName, workspaces);
    } else {
      const newWorkspaces = new V1alpha1WorkspaceList();
      newWorkspaces.items = [];
      newWorkspaces.items.push(updatedWorkspace);
      state.workspaces.set(orgName, newWorkspaces);
    }
  },

  [types.ERROR_WORKSPACE](state: WorkspaceStateType, error: string) {
    state.error = error;
  },

  [types.SET_WORKSPACES](state: WorkspaceStateType, workspaces: V1alpha1WorkspaceList) {
    if (workspaces.items.length === 0) {
      return;
    }
    const orgName = workspaces.items[0].spec?.organizationRef?.name as string;
    state.workspaces.set(orgName, workspaces);
  },

  [types.SET_DEFAULT_WORKSPACE](state: WorkspaceStateType, workspace: V1alpha1Workspace) {
    state.defaultWorkspace = workspace;
  },

  // Object setters - Locations
  [types.ADD_WORKSPACED_LOCATION](state: WorkspaceStateType, wl: types.WorkspacedLocation) {
    const locations = state.locations.get(wl.workspace.metadata?.name as string);
    if (locations) {
      locations.items.push(wl.location);
      state.locations.set(wl.workspace.metadata?.name as string, locations);
    } else {
      const newLocations = new V1alpha1LocationList();
      newLocations.items = [];
      newLocations.items.push(wl.location);
      state.locations.set(wl.workspace.metadata?.name as string, newLocations);
    }
  },

  [types.ADD_WORKSPACED_LOCATIONS](state: WorkspaceStateType, wl: types.WorkspacedLocationList) {
      state.locations.set(wl.workspace.metadata?.name as string, wl.locations);
  },

};

export default mutations;
