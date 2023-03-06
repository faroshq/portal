import * as types from "./types";
import { Commit } from 'vuex';

export function setNotification({ commit }: { commit: Commit}, message: string) {
  commit(types.SET_MESSAGE, message);
  commit(types.SET_VISIBILITY, true);

  setTimeout(() => {
    commit(types.SET_VISIBILITY, false);
  }, 5000);
}

export function setVisibility({ commit }: { commit: Commit}, show: boolean) {
  commit(types.SET_VISIBILITY, false);
}
