import * as types from "./types";
import { NotificationState } from "@/store/notifications/state";

const mutations = {
  [types.SET_MESSAGE](state: NotificationState, message: string) {
    state.message = message;
  },
  [types.SET_VISIBILITY](state: NotificationState, show: boolean) {
    state.show = show;
  }
};

export default mutations;
