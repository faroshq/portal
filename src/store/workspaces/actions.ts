import * as types from "./types";
import { store } from "../index";
import { Commit } from 'vuex';
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaces,
} from "@/services/workspacesService";

import {  V1alpha1Workspace, V1alpha1Organization } from "@/api/faros";

export function addWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;

  return createWorkspace(orgName, workspace)
    .then((value) => commit(types.ADD_WORKSPACE, value))
    .catch((e) => commit(types.ERROR_WORKSPACE, e))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function deleteWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;
  return deleteWorkspace(orgName, workspace)
    .then(() => commit(types.REMOVE_WORKSPACE, workspace))
    .catch((e) => commit(types.ERROR_WORKSPACE, e))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function getWorkspacesAction({ commit }: { commit: Commit}, orgName: string) {
  commit(types.LOADING_WORKSPACE, true);

  return getWorkspaces(orgName)
    .then((value) => commit(types.SET_WORKSPACES, value))
    .catch((e) => commit(types.ERROR_WORKSPACE, e))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function useWorkspaceActions({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.SET_DEFAULT_WORKSPACE, workspace);
  store.dispatch("locationModule/listAllLocations", workspace);
  store.dispatch("synctargetModule/listAllSyncTargets", workspace);
}

// startupWorkspaceLoad is called when the application starts up. It will load all the workspaces for all the organizations
export function loadAllWorkspaces({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
    commit(types.LOADING_WORKSPACE, true);
    return getWorkspacesAction({commit}, organization.metadata?.name)
}
