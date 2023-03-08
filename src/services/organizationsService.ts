import * as faros from "@/api/faros";
import * as farosClient from './clientFaros'

export async function createOrganization(org: faros.V1alpha1Organization) {
    return farosClient.default.createOrganization(org)
}

export async function getOrganizations() {
    return farosClient.default.listOrganizations()
}

export async function deleteOrganization(name: string) {
  return farosClient.default.deleteOrganization(name)
}

export async function getWorkspaces(org: string) {
  return farosClient.default.listWorkspaces(org)
}
