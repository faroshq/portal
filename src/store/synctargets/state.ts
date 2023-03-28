import { V1alpha1SyncTargetList } from "@/api/kcp/models/V1alpha1SyncTargetList";
import { V1ConfigMapList } from "@/api/k8s";

export type SyncTargetStateType = {
  synctargets: V1alpha1SyncTargetList;
  // bootstrapConfigMaps is list of ConfigMaps that contain bootstrap data for the sync targets
  // The bootstrap data is used to bootstrap the sync target with the cluster
  bootstrapConfigMaps: V1ConfigMapList;
  error: string;
  loading: boolean;
  // started is true if the sync targets have been loaded at least once
  started: boolean;
};

const state: SyncTargetStateType = {
  synctargets: { items: [] },
  bootstrapConfigMaps : { items: [] },
  error: "",
  loading: false,
  started: false,
};

export default state;
