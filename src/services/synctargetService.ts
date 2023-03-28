import * as kcp from "@/api/kcp";
import { V1alpha1Workspace } from "@/api/faros";
import { KubernetesObjectApi, CoreV1Api } from "@/services/clientK8S";

export function listSyncTargets(workspace: V1alpha1Workspace) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  return client.list("workload.kcp.io", "v1alpha1", "synctargets")
}

export function createSyncTarget(workspace: V1alpha1Workspace, synctarget: kcp.V1alpha1SyncTarget) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  synctarget.kind = "SyncTarget"
  synctarget.apiVersion = "workload.kcp.io/v1alpha1"
  synctarget.metadata = synctarget.metadata || {}
  synctarget.metadata.labels = synctarget.metadata.labels || {}
  // Default for bootstrap
  synctarget.metadata.labels["synctarget.workload.faros.sh/bootstrap"] = "true"
  synctarget.spec = synctarget.spec || {}
  synctarget.spec.supportedAPIExports = synctarget.spec.supportedAPIExports || []
  synctarget.spec.supportedAPIExports.push({
    export: "kubernetes",
    path: "root:compute",
  })
  return client.create("workload.kcp.io", "v1alpha1", "synctargets", synctarget)
}

export function deleteSyncTarget(workspace: V1alpha1Workspace, synctarget: kcp.V1alpha1SyncTarget) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  synctarget.kind = "SyncTarget"
  synctarget.apiVersion = "workload.kcp.io/v1alpha1"
  return client.delete("workload.kcp.io", "v1alpha1", "synctargets", synctarget)
}

export function listSyncTargetsBootstrapConfigs(workspace: V1alpha1Workspace) {
  const client = new CoreV1Api(workspace.status?.workspaceURL as string);
  return client.listNamespacedConfigMap("default", `synctarget.workload.faros.sh/bootstrap=`)
}
