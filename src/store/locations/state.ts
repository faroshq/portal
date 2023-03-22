import { V1alpha1LocationList } from "@/api/kcp";

export type LocationStateType = {
  locations: V1alpha1LocationList;
  error: string;
  loading: boolean;
};

const state: LocationStateType = {
  locations: { items: [] },
  error: "",
  loading: false,
};

export default state;
