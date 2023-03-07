import { OrganizationStateType } from "@/store/organizations/state";

const getters = {
  organizations: (state: OrganizationStateType) => {
    return state.organizations;
  },
  organization: (state: OrganizationStateType) => {
    return state.organization;
  },
  workspaces: (state: OrganizationStateType) => {
    return state.workspaces;
  },
  loading: (state: OrganizationStateType) => state.loading,
  error: (state: OrganizationStateType) => state.error,
};
export default getters;
