import { LocationStateType } from "@/store/locations/state";

const getters = {
  locations: (state: LocationStateType) => {
    return state.locations;
  },
  loading: (state: LocationStateType) => state.loading,
  error: (state: LocationStateType) => state.error,
  started: (state: LocationStateType) => state.started,
};
export default getters;
