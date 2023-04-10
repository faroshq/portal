import * as types from "./types";
import { Commit } from 'vuex';
import {
  createPlacement, deletePlacement, listPlacements,
} from "@/services/placementsService";

import { V1alpha1Workspace, } from "@/api/faros";
import { V1alpha1Location } from "@/api/kcp";

export function createPlacementActions({ commit }: { commit: Commit}, wl: types.WorkspacedPlacement) {
  commit(types.LOADING_PLACEMENTS, true)
  commit(types.ERROR_PLACEMENT, null)
  return createPlacement(wl.workspace, wl.placement).
  then((value: V1alpha1Location) => commit(types.ADD_PLACEMENT, value)).
  catch((e: any) => commit(types.ERROR_PLACEMENT, e)).
  finally(() => commit(types.LOADING_PLACEMENTS, false));
}

export function deletePlacementActions({ commit }: { commit: Commit}, wl: types.WorkspacedPlacement) {
 commit(types.LOADING_PLACEMENTS, true)
 commit(types.ERROR_PLACEMENT, null)
  return deletePlacement(wl.workspace, wl.placement).
    then(() => commit(types.REMOVE_PLACEMENT, wl.placement)).
    catch((e: any) => commit(types.ERROR_PLACEMENT, e)).
    finally(() => commit(types.LOADING_PLACEMENTS, false));
}

export function listAllPlacements({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_PLACEMENTS, true);
  commit(types.ERROR_PLACEMENT, null)
  return listPlacements(workspace).
    then((value: V1alpha1Location) => commit(types.SET_PLACEMENTS, value)).
    catch((e: any) => commit(types.ERROR_PLACEMENT, e)).
    finally(() => {
    commit(types.LOADING_PLACEMENTS, false);
    commit(types.SET_STARTED_PLACEMENTS, true);
    });
}

export function setStartedAction({ commit }: { commit: Commit}, started: boolean) {
  commit(types.SET_STARTED_PLACEMENTS, started);
}
