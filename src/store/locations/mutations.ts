import * as types from "./types";
import { LocationStateType } from "@/store/locations/state";
import { V1alpha1LocationList, V1alpha1Location } from "@/api/kcp";

// Workspaces mutators are reliant on the organization name in the reference
// fields of the workspace. We should always operate native objects, not
// manually constructed objects.

const mutations = {
  [types.LOADING_LOCATIONS](state: LocationStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_LOCATION](state: LocationStateType, location: V1alpha1Location) {
      state.locations.items = state.locations.items.filter((h) => h.metadata?.name !== location.metadata?.name);
  },

  [types.ADD_LOCATION](state: LocationStateType, created: V1alpha1Location) {
      state.locations.items.push(created);
  },

  [types.UPDATE_LOCATION](state: LocationStateType, updated: V1alpha1Location) {
      const index = state.locations.items.findIndex((h) => h.metadata?.name === updated.metadata?.name);
      state.locations.items[index] = updated;
  },

  [types.ERROR_LOCATION](state: LocationStateType, error: string) {
    state.error = error;
  },

  [types.SET_LOCATIONS](state: LocationStateType, locations: V1alpha1LocationList) {
    state.locations = locations;
  },
};

export default mutations;
