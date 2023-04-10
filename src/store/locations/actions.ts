import * as types from "./types";
import { Commit } from 'vuex';
import {
  createLocation,
  listLocations,
  deleteLocation,
} from "@/services/locationsService";

import {V1alpha1Workspace, } from "@/api/faros";
import { V1alpha1Location } from "@/api/kcp";

export function createLocationActions({ commit }: { commit: Commit}, wl: types.WorkspacedLocation) {
  commit(types.LOADING_LOCATIONS, true)
  commit(types.ERROR_LOCATION, null)
  return createLocation(wl.workspace, wl.location).
  then((value: V1alpha1Location) => commit(types.ADD_LOCATION, value)).
  catch((e: any) => commit(types.ERROR_LOCATION, e)).
  finally(() => commit(types.LOADING_LOCATIONS, false));
}

export function deleteLocationActions({ commit }: { commit: Commit}, wl: types.WorkspacedLocation) {
 commit(types.LOADING_LOCATIONS, true)
 commit(types.ERROR_LOCATION, null)
  return deleteLocation(wl.workspace, wl.location).
    then(() => commit(types.REMOVE_LOCATION, wl.location)).
    catch((e: any) => commit(types.ERROR_LOCATION, e)).
    finally(() => commit(types.LOADING_LOCATIONS, false));
}

export function listAllLocations({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_LOCATIONS, true);
  commit(types.ERROR_LOCATION, null)
  return listLocations(workspace).
    then((value: V1alpha1Location) => commit(types.SET_LOCATIONS, value)).
    catch((e: any) => commit(types.ERROR_LOCATION, e)).
    finally(() => {
      commit(types.LOADING_LOCATIONS, false);
      commit(types.SET_STARTED_LOCATIONS, true);
    });
}

export function setStartedAction({ commit }: { commit: Commit}, started: boolean) {
  commit(types.SET_STARTED_LOCATIONS, started);
}
