import { OrganizationStateType } from "@/store/organizations/state";

const getters = {
  organizations: (state: OrganizationStateType) => {
    return state.organizations;
  },
  organization: (state: OrganizationStateType) => {
    return state.organization;
  },
  loading: (state: OrganizationStateType) => state.loading,
  error: (state: OrganizationStateType) => state.error,
};
export default getters;
