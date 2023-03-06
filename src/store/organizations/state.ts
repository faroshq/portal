import { V1alpha1Organization, V1alpha1OrganizationList } from "../../api";

export type OrganizationStateType = {
  organizations: V1alpha1OrganizationList;
  organization: V1alpha1Organization;
  error: string;
  loading: boolean;
};

const state: OrganizationStateType = {
  organizations: {items: []},
  error: "",
  organization: {},
  loading: false,
};

export default state;
