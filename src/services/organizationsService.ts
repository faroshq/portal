import * as faros from "@/api/faros";
import * as farosClient from './clientFaros'

export function createOrganization(org: faros.V1alpha1Organization) {
    return farosClient.default.createOrganization(org)
}

export function getOrganizations() {
    return farosClient.default.listOrganizations()
}

export function deleteOrganization(name: string) {
  return farosClient.default.deleteOrganization(name)
}

export function getWorkspaces(org: string) {
  return farosClient.default.listWorkspaces(org)
}
