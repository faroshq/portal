import * as kcp from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";
import { KubernetesObjectApi } from "@/services/clientK8S";


export function createPlacement(workspace: V1alpha1Workspace, placement: kcp.V1alpha1Placement) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  placement.kind = "Placement"
  placement.apiVersion = "scheduling.kcp.io/v1alpha1"
  return client.create("scheduling.kcp.io", "v1alpha1", "placements", placement)
}

export function listPlacements(workspace: V1alpha1Workspace) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  return client.list("scheduling.kcp.io", "v1alpha1", "placements")
}

export function deletePlacement(workspace: V1alpha1Workspace, placement: kcp.V1alpha1Placement) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  placement.kind = "Placement"
  placement.apiVersion = "scheduling.kcp.io/v1alpha1"
  return client.delete("scheduling.kcp.io", "v1alpha1", "placements", placement)
}
