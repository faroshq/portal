import * as kcp from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";
import { KubernetesObjectApi } from "@/services/clientK8S";


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

export function deleteLocation(workspace: V1alpha1Workspace, location: kcp.V1alpha1Location) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  location.kind = "Location"
  location.apiVersion = "scheduling.kcp.io/v1alpha1"
  return client.delete("scheduling.kcp.io", "v1alpha1", "locations", location)
}
