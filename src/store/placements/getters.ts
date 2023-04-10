import { PlacementStateType } from "@/store/placements/state";

const getters = {
  placements: (state: PlacementStateType) => {
    return state.placements;
  },
  loading: (state: PlacementStateType) => state.loading,
  error: (state: PlacementStateType) => state.error,
  started: (state: PlacementStateType) => state.started,
};
export default getters;
