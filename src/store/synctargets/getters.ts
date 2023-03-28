import { SyncTargetStateType } from "@/store/synctargets/state";

const getters = {
  synctargets: (state: SyncTargetStateType) => {
    return state.synctargets;
  },
  bootstrapConfigMaps: (state: SyncTargetStateType) => {
    return state.bootstrapConfigMaps;
  },
  loading: (state: SyncTargetStateType) => state.loading,
  error: (state: SyncTargetStateType) => state.error,
  started: (state: SyncTargetStateType) => state.started,
};
export default getters;
