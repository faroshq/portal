<template>
  <div>
      <button
        class="mx-2 px-2 rounded-md"
        @click="open = true"
      >

      <div class="i-heroicons-plus-circle"></div>

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
            <p class="text-2xl font-bold">Create a workspace</p>
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
          <p>
           Create a new workspace in the organization
          </p>

          <form
            :obj="workspaceForm"
            >
              <label class="text-xs">Name</label>

              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  v-model="workspaceForm.name"
                  class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              />
              </div>

              <label class="text-xs">Description</label>

              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    v-model="workspaceForm.description"
                    class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                />
              </div>

          </form>

            <div>
              <div v-if=error class="text-red-500">
                {{ error.message }}
              </div>
            </div>


          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button
              @click="open = false"
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
            >
              Close
            </button>
            <button
             @click="onSubmitWorkspace"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              Create
            </button>
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
  name: "CreateWorkspace",

  props: {
    organization: {
      type: V1alpha1Organization,
      required: true,
    },
  },

  data() {
    return {
      open: false,
      workspaceForm:  {
        name: "",
        description: "",
      },
    };
  },

  computed: {
    ...mapGetters("workspaceModule", {
      workspaces: "workspaces",
      defaultWorkspace: "defaultWorkspace",
      error: "error",
      loading: "loading",
    }),
    currentOrganizationName() {
      const org = this.organization as V1alpha1Organization;
      return org.metadata?.name;
    },
  },

  methods: {
    ...mapActions("workspaceModule", [
      "addWorkspaceAction",
    ]),
    ...mapActions("notificationModule", [
      "setNotification",
    ]),
    onSubmitWorkspace() {
      let workspace : V1alpha1Workspace =  {
        metadata: {
          name: this.workspaceForm.name,
        },
        spec: {
          description: this.workspaceForm.description,
          organizationRef: {
            name: this.currentOrganizationName,
          },
        },
      };

      this.addWorkspaceAction(workspace).then(() => {
        if (this.error == "") {
          this.setNotification("Workspace "+workspace.metadata?.name+" in "+workspace.spec?.organizationRef?.name+" created successfully")
          this.open = false;
          this.workspaceForm.name = "";
          this.workspaceForm.description = "";
        }
      })
    },

  },

})

</script>
<style>
  .modal {
    transition: opacity 0.25s ease;
  }
</style>
