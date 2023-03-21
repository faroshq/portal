import * as faros from "@/api/faros";
import * as kcp from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";
import * as farosClient from './clientFaros'
import { KubernetesObjectApi } from "@/services/clientK8S";

export function createWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
    return farosClient.default.createWorkspace(orgName, workspace)
}

export function deleteWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
  return farosClient.default.deleteWorkspace(orgName, workspace.metadata?.name as string)
}

export function getWorkspaces(orgName: string) {
  return farosClient.default.listWorkspaces(orgName)
}

export function createLocation(workspace: V1alpha1Workspace, location: kcp.V1alpha1Location) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  location.kind = "Location"
  location.apiVersion = "scheduling.kcp.io/v1alpha1"
  return client.create("scheduling.kcp.io", "v1alpha1", "locations", location)
}

export function listLocations(workspace: V1alpha1Workspace) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  return client.list("scheduling.kcp.io", "v1alpha1", "locations")
}
