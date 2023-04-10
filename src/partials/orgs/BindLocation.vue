<template>
  <div>
      <button
        class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        @click="open = true"
      >
      Bind compute
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
            <p class="text-2xl font-bold">Bind location</p>
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
            Bind location allows to assign a location from different workspace to the current workspace.
            This way workspaces can use compute, provided by other workspaces.
          </p>


          <div class="relative mt-2 rounded-md shadow-sm">
            <select @change="choseWorkspace" id="locationWorkspace" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a workspace</option>
              <option v-for="workspace in workspaces.items" :key="workspace.metadata?.name" :value="workspace.metadata?.name">
                {{ workspace.metadata?.name }}
              </option>
            </select>

            <select @change="choseLocation" id="locationName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a location </option>
              <option v-for="location in locations.items" :key="location.metadata?.name" :value="location.metadata?.name">
                {{ location.metadata?.name }}
              </option>
            </select>

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
             @click="bindLocation"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              Bind
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { V1alpha1Workspace } from "@/api/faros";
import { V1alpha1Placement,
  V1alpha1Location,
  V1alpha1PlacementSpec,
  V1alpha1GroupVersionResource,
  V1alpha1AvailableSelectorLabel } from "@/api/kcp";
import { defineComponent } from "vue";
import { WorkspacedPlacement } from "@/store/placements/types";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "BindLocation",

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
      selectedWorkspace: {} as V1alpha1Workspace,
      selectedLocation: {} as V1alpha1Location,
    }
  },

  computed: {
    ...mapGetters("workspaceModule", {
      workspaces: "workspaces",
      defaultWorkspace: "defaultWorkspace",
      error: "error",
      loading: "loading",
    }),
    ...mapGetters("locationModule", {
      locations: "locations",
    }),
    ...mapGetters("placementModule", {
      placements: "placements",
    }),
  },

  methods: {
    ...mapActions("workspaceModule", [
      "deleteWorkspaceAction",
    ]),
    ...mapActions("locationModule", [
      "listAllLocations",
    ]),
    ...mapActions("placementModule", [
      "createPlacementActions",
    ]),
    ...mapActions("notificationModule", [
      "setNotification",
    ]),
    bindLocation() {
      let payload: WorkspacedPlacement
      payload = {} as WorkspacedPlacement
      payload.workspace = this.workspace
      payload.placement = {} as V1alpha1Placement

      // construct location based on inputs
      payload.placement.spec = {} as V1alpha1PlacementSpec
      payload.placement.spec.locationResource = {} as V1alpha1GroupVersionResource

      // Hardcoded for now
      payload.placement.spec.locationResource.group = "workload.kcp.io"
      payload.placement.spec.locationResource.version = "v1alpha1"
      payload.placement.spec.locationResource.resource = "synctargets"

      payload.placement.spec.locationWorkspace = this.selectedLocation.metadata?.annotations?.["kcp.io/path"]
      payload.placement.spec.locationSelectors = [] as Array<V1alpha1AvailableSelectorLabel>
      // TODO: this should be configurable. As these are OR'ed in the backend, just push them in
      for (const key in this.selectedLocation.spec?.availableSelectorLabels) {
        payload.placement.spec.locationSelectors.push(this.selectedLocation.spec?.availableSelectorLabels?.[key])
      }

      payload.placement.metadata = {} as any
      payload.placement.metadata.name = this.selectedWorkspace.metadata?.name + "-" + this.selectedLocation.metadata?.name

      console.log(payload)

     this.createPlacementActions(payload).then(() => {
        this.setNotification("Location "+payload.placement.metadata.name+"  bound");
        this.open = false;
        this.$router.push({ name: "OrganizationsDashboard" });
     });
    },
    choseWorkspace(event: any){
      this.selectedWorkspace = this.workspaces.items.find((ws: V1alpha1Workspace) => ws.metadata?.name === event.target.value);
      this.listAllLocations(this.selectedWorkspace);
    },
    choseLocation(event: any){
      this.selectedLocation = this.locations.items.find((loc: V1alpha1Workspace) => loc.metadata?.name === event.target.value);
    }

  },

})

</script>
<style>
  .modal {
    transition: opacity 0.25s ease;
  }
</style>
