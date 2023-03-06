import * as faros from "../api";
import client from './client'

export async function createOrganization(org: faros.V1alpha1Organization) {
    return client.createOrganization(org)
}

export async function getOrganizations() {
    return client.listOrganizations()
}

export async function deleteOrganization(name: string) {
  return client.deleteOrganization(name)
}
