import { V1alpha1LocationList } from "@/api/kcp";

export type LocationStateType = {
  locations: V1alpha1LocationList;
  error: string;
  loading: boolean;
  // started is true if the locations have been loaded at least once
  started: boolean;
};

const state: LocationStateType = {
  locations: { items: [] },
  error: "",
  loading: false,
  started: false,
};

export default state;
