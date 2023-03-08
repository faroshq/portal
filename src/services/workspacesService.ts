import * as faros from "../api";
import client from './client'

export async function createWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
    return client.createWorkspace(orgName, workspace)
}

export async function deleteWorkspace(orgName: string, workspace: faros.V1alpha1Workspace) {
  return client.deleteWorkspace(orgName, workspace.metadata?.name as string)
}

export async function getWorkspaces(orgName: string) {
  return client.listWorkspaces(orgName)
}
