<template>
  <div>
      <button
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        @click="open = true"
      >
      Delete workspace
     </button>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="open = false"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">Delete workspace</p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>
        </div>

          <!--Body-->
          <p class="px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
            Delete workspace? This action cannot be undone and will delete all
            associated resources and data.
          </p>


          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              disabled
              v-model="currentWorkspaceName"
              class="px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          />

            <div>
              <div v-if=error class="text-red-500">
                {{ error.message }}
              </div>
            </div>


          <!--Footer-->
          <div class="flex justify-end pt-2 px-12 py-2">
            <button
              @click="open = false"
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
            >
              Close
            </button>
            <button
             @click="deleteWorkspace"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { V1alpha1Organization, V1alpha1Workspace } from "@/api/faros";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "DeleteWorkspace",

  props: {
    workspace:{
      type: V1alpha1Workspace,
      required: true,
    },
    renderIcon: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      open: false,
    };
  },

  computed: {
    ...mapGetters("workspaceModule", {
      workspaces: "workspaces",
      defaultWorkspace: "defaultWorkspace",
      error: "error",
      loading: "loading",
    }),
    currentWorkspaceName() {
      const ws = this.workspace as V1alpha1Workspace;
      return ws.metadata?.name;
    },
  },

  methods: {
    ...mapActions("workspaceModule", [
      "deleteWorkspaceAction",
    ]),
    ...mapActions("notificationModule", [
      "setNotification",
    ]),
    deleteWorkspace() {
      const ws = this.workspace as V1alpha1Workspace;
      const name = ws.metadata?.name;
      this.deleteWorkspaceAction(this.workspace).then(() => {
        this.setNotification("Workspace "+name +" deleted");
        this.open = false;
        this.$router.push({ name: "OrganizationsDashboard" });
      });
    },

  },

})

</script>
<style>
  .modal {
    transition: opacity 0.25s ease;
  }
</style>
