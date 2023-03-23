import { V1alpha1SyncTargetList } from "@/api/kcp/models/V1alpha1SyncTargetList";

export type SyncTargetStateType = {
  synctargets: V1alpha1SyncTargetList;
  error: string;
  loading: boolean;
};

const state: SyncTargetStateType = {
  synctargets: { items: [] },
  error: "",
  loading: false,
};

export default state;
