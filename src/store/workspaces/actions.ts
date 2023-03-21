import * as types from "./types";
import { Commit } from 'vuex';
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaces,
  createLocation,
  listLocations,
} from "@/services/workspacesService";

import { V1alpha1OrganizationList, V1alpha1Workspace, V1alpha1WorkspaceList } from "@/api/faros";
import { V1alpha1Location } from "@/api/kcp";

export function addWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;

  return createWorkspace(orgName, workspace)
    .then((value) => commit(types.ADD_WORKSPACE, value))
    .catch((e) => commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function deleteWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;

  return deleteWorkspace(orgName, workspace)
    .then(() => commit(types.REMOVE_WORKSPACE, workspace))
    .catch((e) => commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function getWorkspacesAction({ commit }: { commit: Commit}, orgName: string) {
  commit(types.LOADING_WORKSPACE, true);

  return getWorkspaces(orgName)
    .then((value) => commit(types.SET_WORKSPACES, value))
    .catch((e) => commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function useWorkspaceActions({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.SET_DEFAULT_WORKSPACE, workspace);
}

export function startupWorkspaceLocationsLoad({ commit }: { commit: Commit}, workspaces: V1alpha1WorkspaceList) {
  commit(types.LOADING_WORKSPACE, true);
  for (const ws of workspaces.items) {
    listWorkspaceLocations({ commit }, ws)
  }
  commit(types.LOADING_WORKSPACE, false)
}

export function createLocationActions({ commit }: { commit: Commit}, wl: types.WorkspacedLocation) {
  commit(types.LOADING_WORKSPACE, true)
  return createLocation(wl.workspace, wl.location).
    then((value: V1alpha1Location) => {
      const payload :types.WorkspacedLocation = {
        workspace: wl.workspace,
        location: value,
      }
      console.log(value)

      commit(types.ADD_WORKSPACED_LOCATION, payload)
    }).
    catch((e: any) => commit(types.ERROR_WORKSPACE, e)).
    finally(() => commit(types.LOADING_WORKSPACE, false));
}

// startupWorkspaceLoad is called when the application starts up. It will load all the workspaces for all the organizations
export function startupWorkspaceLoad({ commit }: { commit: Commit}, organizations: V1alpha1OrganizationList) {
  commit(types.LOADING_WORKSPACE, true);
  for (const org of organizations.items) {
    getWorkspaces(org.metadata?.name as string).
      then((value) =>
      {
        commit(types.SET_WORKSPACES, value);
        startupWorkspaceLocationsLoad({ commit }, value)
      }).
      catch((e) => commit(types.ERROR_WORKSPACE, e.body))
  }
  commit(types.LOADING_WORKSPACE, false)
}

export function listWorkspaceLocations({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  return listLocations(workspace).
    then((value) => {
      const payload :types.WorkspacedLocationList = {
        workspace: workspace,
        locations: value,
      }
      commit(types.ADD_WORKSPACED_LOCATIONS, payload)
    }).
      catch((e) => commit(types.ERROR_WORKSPACE, e)).
      finally(() => commit(types.LOADING_WORKSPACE, false));
}
