import { OrganizationStateType } from "@/store/organizations/state";

const getters = {
  organizations: (state: OrganizationStateType) => {
    return state.organizations;
  },
  defaultOrganization: (state: OrganizationStateType) => {
    return state.defaultOrganization;
  },
  loading: (state: OrganizationStateType) => state.loading,
  error: (state: OrganizationStateType) => state.error,
  started: (state: OrganizationStateType) => state.started,
};
export default getters;
