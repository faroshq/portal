import * as faros from "@/api/faros";
import * as farosClient from './clientFaros'

export function createWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
    return farosClient.default.createWorkspace(orgName, workspace)
}

export function deleteWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
  return farosClient.default.deleteWorkspace(workspace.metadata?.name as string, orgName)
}

export function getWorkspaces(orgName: string) {
  return farosClient.default.listWorkspaces(orgName)
}
