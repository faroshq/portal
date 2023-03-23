import * as kcp from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";
import { KubernetesObjectApi } from "@/services/clientK8S";

export function listSyncTargets(workspace: V1alpha1Workspace) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  return client.list("workload.kcp.io", "v1alpha1", "synctargets")
}

export function createSyncTarget(workspace: V1alpha1Workspace, synctarget: kcp.V1alpha1SyncTarget) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  synctarget.kind = "SyncTarget"
  synctarget.apiVersion = "workload.kcp.io/v1alpha1"
  return client.create("workload.kcp.io", "v1alpha1", "synctargets", synctarget)
}

export function deleteSyncTarget(workspace: V1alpha1Workspace, synctarget: kcp.V1alpha1SyncTarget) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  synctarget.kind = "SyncTarget"
  synctarget.apiVersion = "workload.kcp.io/v1alpha1"
  return client.delete("workload.kcp.io", "v1alpha1", "synctargets", synctarget)
}
