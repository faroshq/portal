import { SyncTargetStateType } from "@/store/synctargets/state";

const getters = {
  synctargets: (state: SyncTargetStateType) => {
    return state.synctargets;
  },
  loading: (state: SyncTargetStateType) => state.loading,
  error: (state: SyncTargetStateType) => state.error,
};
export default getters;
