import { V1alpha1Workspace } from "@/api/faros";
import { KubernetesObjectApi } from "@/services/clientK8S";

export function listSyncTargets(workspace: V1alpha1Workspace) {
  const client = new KubernetesObjectApi(workspace.status?.workspaceURL as string);
  return client.list("workload.kcp.io", "v1alpha1", "synctargets")
}
