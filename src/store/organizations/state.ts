import { V1alpha1Organization, V1alpha1OrganizationList, V1alpha1WorkspaceList } from "../../api";

export type OrganizationStateType = {
  organizations: V1alpha1OrganizationList;
  organization: V1alpha1Organization;
  workspaces: V1alpha1WorkspaceList;
  error: string;
  loading: boolean;
};

const state: OrganizationStateType = {
  organizations: {items: []},
  workspaces: {items: []},
  error: "",
  organization: {},
  loading: false,
};

export default state;
