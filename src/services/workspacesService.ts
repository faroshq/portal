import * as faros from "@/api/faros";
import * as farosClient from './clientFaros'

export async function createWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
    return farosClient.default.createWorkspace(orgName, workspace)
}

export async function deleteWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
  return farosClient.default.deleteWorkspace(orgName, workspace.metadata?.name as string)
}

export async function getWorkspaces(orgName: string) {
  return farosClient.default.listWorkspaces(orgName)
}
