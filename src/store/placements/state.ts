import { V1alpha1PlacementList } from "@/api/kcp/models/V1alpha1PlacementList";

export type PlacementStateType = {
  placements: V1alpha1PlacementList;
  error: string;
  loading: boolean;
  // started is true if the locations have been loaded at least once
  started: boolean;
};

const state: PlacementStateType = {
  placements: { items: [] },
  error: "",
  loading: false,
  started: false,
};

export default state;
