import { V1alpha1Organization, V1alpha1OrganizationList } from "@/api/faros";

export type OrganizationStateType = {
  organizations: V1alpha1OrganizationList;
  // defaultOrganization is the organization that is currently selected
  // backed by local storage in the mutators
  defaultOrganization: V1alpha1Organization;
  error: string;
  loading: boolean;
};

const state: OrganizationStateType = {
  organizations: {items: []},
  error: "",
  defaultOrganization: {},
  loading: false,
};

export default state;
