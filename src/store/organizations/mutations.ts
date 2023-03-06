import * as types from "./types";
import { OrganizationStateType } from "@/store/organizations/state";
import { V1alpha1Organization, V1alpha1OrganizationList } from "../../api";

const mutations = {
  [types.GET_ORGANIZATIONS](state: OrganizationStateType, organizations: V1alpha1OrganizationList) {
    state.organizations = organizations;
  },

  [types.LOADING_ORGANIZATION](state: OrganizationStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_ORGANIZATION](state: OrganizationStateType, name: string) {
    state.organizations.items = state.organizations.items.filter((h) => h.metadata?.name !== name);
  },

  [types.ADD_ORGANIZATION](state: OrganizationStateType, createdOrganization: V1alpha1Organization) {
    state.organizations.items.push(createdOrganization);
    state.error = "";
  },

  [types.UPDATE_ORGANIZATION](state: OrganizationStateType, updatedOrganization: V1alpha1Organization) {
    const index = state.organizations.items.findIndex((h) => h.metadata?.name === updatedOrganization.metadata?.name);
    state.organizations.items[index] = updatedOrganization;
  },

  [types.ERROR_ORGANIZATION](state: OrganizationStateType, error: string) {
    state.error = error;
  },

  [types.SET_ORGANIZATION](state: OrganizationStateType, organization: V1alpha1Organization) {
    state.organization = organization;
  }
};

export default mutations;
