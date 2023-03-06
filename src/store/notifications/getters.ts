import { NotificationState } from "@/store/notifications/state";

const getters = {
  message: (state: NotificationState) => state.message,
  show: (state: NotificationState) => state.show,
};

export default getters;
