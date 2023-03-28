import * as types from "./types";
import { SyncTargetStateType } from "@/store/synctargets/state";
import { V1alpha1LocationList, V1alpha1Location, V1alpha1SyncTarget } from "@/api/kcp";
import { V1alpha1SyncTargetList } from "@/api/kcp/models/V1alpha1SyncTargetList";
import { V1ConfigMapList } from "@/api/k8s";

// Workspaces mutators are reliant on the organization name in the reference
// fields of the workspace. We should always operate native objects, not
// manually constructed objects.

const mutations = {
  [types.LOADING_SYNCTARGETS](state: SyncTargetStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_SYNCTARGET](state: SyncTargetStateType, synctarget: V1alpha1SyncTarget) {
      state.synctargets.items = state.synctargets.items.filter((h) => h.metadata?.name !== synctarget.metadata?.name);
  },

  [types.ADD_SYNCTARGET](state: SyncTargetStateType, created: V1alpha1SyncTarget) {
      state.synctargets.items.push(created);
  },

  [types.UPDATE_SYNCTARGET](state: SyncTargetStateType, updated: V1alpha1SyncTarget) {
      const index = state.synctargets.items.findIndex((h) => h.metadata?.name === updated.metadata?.name);
      state.synctargets.items[index] = updated;
  },

  [types.ERROR_SYNCTARGET](state: SyncTargetStateType, error: string) {
    state.error = error;
  },

  [types.SET_SYNCTARGETS](state: SyncTargetStateType, synctargets: V1alpha1SyncTargetList) {
    state.synctargets = synctargets;
  },

  [types.SET_SYNCTARGETS_BOOTSTRAP_CONFIGS](state: SyncTargetStateType, configs: V1ConfigMapList) {
    state.bootstrapConfigMaps = configs;
  },

  [types.SET_STARTED_SYNCTARGETS](state: SyncTargetStateType, started: boolean) {
    state.started = started;
  }

};

export default mutations;
