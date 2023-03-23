import * as types from "./types";
import { Commit } from 'vuex';
import {
  listSyncTargets,
} from "@/services/synctargetService";

import {V1alpha1Workspace, } from "@/api/faros";

export function listAllSyncTargets({ commit }: { commit: Commit}, workspace: V1alpha1Workspace) {
  commit(types.LOADING_SYNCTARGETS, true);
  commit(types.ERROR_SYNCTARGET, null)
  return listSyncTargets(workspace).
    then((value) => commit(types.SET_SYNCTARGETS, value)).
    catch((e) => commit(types.ERROR_SYNCTARGET, e)).
    finally(() => commit(types.LOADING_SYNCTARGETS, false));
}
