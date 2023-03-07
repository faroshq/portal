import * as types from "./types";
import { Commit } from 'vuex';
import {
  createOrganization,
  getOrganizations,
  deleteOrganization,
  getWorkspaces,
} from "@/services/organizationsService";

import { V1alpha1Organization } from "../../api";

export function addOrganizationAction({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
  commit(types.LOADING_ORGANIZATION, true);

  return createOrganization(organization)
    .then((value) => commit(types.ADD_ORGANIZATION, value))
    .catch((e) =>  commit(types.ERROR_ORGANIZATION, e.body))
    .finally(() => commit(types.LOADING_ORGANIZATION, false));
}

export function deleteOrganizationAction({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
  commit(types.LOADING_ORGANIZATION, true);
  const name = organization.metadata?.name as string;

  return deleteOrganization(name)
    .then((value) => commit(types.ADD_ORGANIZATION, value))
    .catch((e) =>  commit(types.ERROR_ORGANIZATION, e.body))
    .finally(() => commit(types.LOADING_ORGANIZATION, false));
}

export function getOrganizationsAction({ commit }: { commit: Commit}) {
  commit(types.LOADING_ORGANIZATION, true);

  return getOrganizations()
    .then((value) => commit(types.GET_ORGANIZATIONS, value))
    .catch((e) =>  commit(types.ERROR_ORGANIZATION, e.body))
    .finally(() => commit(types.LOADING_ORGANIZATION, false));
}

export function useOrganizationActions({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
  commit(types.SET_ORGANIZATION, organization);
}

export function getWorkspacesAction({ commit }: { commit: Commit}, organization: V1alpha1Organization) {
  commit(types.LOADING_ORGANIZATION, true);

  return getWorkspaces(organization.metadata?.name as string).
    then((value) => commit(types.SET_WORKSPACES, value))
    .catch((e) =>  commit(types.ERROR_ORGANIZATION, e.body))
    .finally(() => commit(types.LOADING_ORGANIZATION, false));
}
