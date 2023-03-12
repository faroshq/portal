import { OrganizationStateType } from "@/store/organizations/state";

const getters = {
  organizations: (state: OrganizationStateType) => {
    return state.organizations;
  },
  defaultOrganization: (state: OrganizationStateType) => {
    const defaultOrganization = localStorage.getItem('defaultOrganization');
    if (defaultOrganization) {
      const organization = state.organizations.items.find((o) => o.metadata?.name === defaultOrganization);
      if (organization) {
        return organization;
      }
    }
    return state.defaultOrganization;
  },
  loading: (state: OrganizationStateType) => state.loading,
  error: (state: OrganizationStateType) => state.error,
};
export default getters;
