import * as types from "./types";
import { Commit } from 'vuex';
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaces,
} from "@/services/workspacesService";

import { V1alpha1OrganizationList, V1alpha1Workspace } from "../../api";

export function addWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;

  return createWorkspace(orgName, workspace)
    .then((value) => commit(types.ADD_WORKSPACE, value))
    .catch((e) =>  commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function deleteWorkspaceAction({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_WORKSPACE, true);
  const orgName = workspace.spec?.organizationRef?.name as string;

  return deleteWorkspace(orgName, workspace)
    .then(() => commit(types.REMOVE_WORKSPACE, workspace))
    .catch((e) =>  commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function getWorkspacesAction({ commit }: { commit: Commit}, orgName: string) {
  commit(types.LOADING_WORKSPACE, true);

  return getWorkspaces(orgName)
    .then((value) => commit(types.SET_WORKSPACES, value))
    .catch((e) =>  commit(types.ERROR_WORKSPACE, e.body))
    .finally(() => commit(types.LOADING_WORKSPACE, false));
}

export function getOrganizationListWorkspaces({ commit }: { commit: Commit}, organizations: V1alpha1OrganizationList) {
  commit(types.LOADING_WORKSPACE, true);

  for (const org of organizations.items) {
    getWorkspaces(org.metadata?.name as string).
    then((value) => commit(types.SET_WORKSPACES, value)).
    catch((e) =>  commit(types.ERROR_WORKSPACE, e.body))
  }
  commit(types.LOADING_WORKSPACE, false)
}

//export function useOrganizationActions({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
//  commit(types.SET_ORGANIZATION, organization);
//}

//export function getDefaultOrgWorkspacesAction({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
//  commit(types.LOADING_ORGANIZATION, true);
//
//  return getWorkspaces(organization.metadata?.name as string).
//    then((value) => commit(types.SET_WORKSPACES, value))
//    .catch((e) =>  commit(types.ERROR_ORGANIZATION, e.body))
//    .finally(() => commit(types.LOADING_ORGANIZATION, false));
//}
