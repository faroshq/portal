import * as types from "./types";
import { PlacementStateType } from "@/store/placements/state";
import { V1alpha1LocationList, V1alpha1Location } from "@/api/kcp";
import { V1alpha1Placement } from "@/api/kcp/models/V1alpha1Placement";
import { V1alpha1PlacementList } from "@/api/kcp/models/V1alpha1PlacementList";

// Workspaces mutators are reliant on the organization name in the reference
// fields of the workspace. We should always operate native objects, not
// manually constructed objects.

const mutations = {
  [types.LOADING_PLACEMENTS](state: PlacementStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_PLACEMENT](state: PlacementStateType, placement: V1alpha1Placement) {
      state.placements.items = state.placements.items.filter((h) => h.metadata?.name !== placement.metadata?.name);
  },

  [types.ADD_PLACEMENT](state: PlacementStateType, created: V1alpha1Placement) {
      state.placements.items.push(created);
  },

  [types.UPDATE_PLACEMENT](state: PlacementStateType, updated: V1alpha1Placement) {
      const index = state.placements.items.findIndex((h) => h.metadata?.name === updated.metadata?.name);
      state.placements.items[index] = updated;
  },

  [types.ERROR_PLACEMENT](state: PlacementStateType, error: string) {
    state.error = error;
  },

  [types.SET_PLACEMENTS](state: PlacementStateType, placements: V1alpha1PlacementList) {
    state.placements = placements;
  },

  [types.SET_STARTED_PLACEMENTS](state: PlacementStateType, started: boolean) {
    state.started = started;
  }

};

export default mutations;
