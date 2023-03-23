import * as types from "./types";
import { Commit } from 'vuex';
import { V1alpha1SyncTargetList } from "@/api/kcp";
import {
  listSyncTargets,
  createSyncTarget,
  deleteSyncTarget,
} from "@/services/synctargetService";

import {V1alpha1Workspace, } from "@/api/faros";
import { V1alpha1SyncTarget } from "@/api/kcp";

export function listAllSyncTargets({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_SYNCTARGETS, true);
  commit(types.ERROR_SYNCTARGET, null)
  return listSyncTargets(workspace).
    then((value: V1alpha1SyncTargetList) => commit(types.SET_SYNCTARGETS, value)).
    catch((e: any) => commit(types.ERROR_SYNCTARGET, e)).
    finally(() => commit(types.LOADING_SYNCTARGETS, false));
}

export function createSyncTargetActions({ commit }: { commit: Commit}, wl: types.WorkspacedSyncTarget) {
  commit(types.LOADING_SYNCTARGETS, true)
  commit(types.ERROR_SYNCTARGET, null)
  return createSyncTarget(wl.workspace, wl.synctarget).
    then((value: V1alpha1SyncTarget) => {
      commit(types.ADD_SYNCTARGET, value)
    }).
    catch((e: any) => commit(types.ERROR_SYNCTARGET, e)).
   finally(() => commit(types.LOADING_SYNCTARGETS, false));
}

export function deleteSyncTargetActions({ commit }: { commit: Commit}, wl: types.WorkspacedSyncTarget) {
 commit(types.LOADING_SYNCTARGETS, true)
 commit(types.ERROR_SYNCTARGET, null)
  return deleteSyncTarget(wl.workspace, wl.synctarget).
    then(() => {
      commit(types.REMOVE_SYNCTARGET, wl.synctarget)
    }).
    catch((e: any) => commit(types.ERROR_SYNCTARGET, e)).
    finally(() => commit(types.LOADING_SYNCTARGETS, false));
}
