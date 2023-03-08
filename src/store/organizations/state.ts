import { V1alpha1Organization, V1alpha1OrganizationList, V1alpha1WorkspaceList } from "@/api/faros";

export type OrganizationStateType = {
  organizations: V1alpha1OrganizationList;
  defaultOrganization: V1alpha1Organization;
  workspaces: V1alpha1WorkspaceList;
  error: string;
  loading: boolean;
};

const state: OrganizationStateType = {
  organizations: {items: []},
  workspaces: {items: []},
  error: "",
  defaultOrganization: {},
  loading: false,
};

export default state;
