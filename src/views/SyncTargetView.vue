<template v-if=loaded>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="TODO" />
  <div>
    <div v-if=error class="text-red-500">
      {{ error.message }}
    </div>
  </div>


  <div >
    <!-- Page Content -->
    <CreateSyncTarget :workspace="defaultWorkspace" />
  <div>

    <!-- Locations table -->

    <div class="mt-8">

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">SyncTargets</h2>

        <div class="flex flex-col mt-3 sm:flex-row">
          <!--
          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>-->

        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Name
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Labels
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Status
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody v-if="synctargets != undefined">
                <tr v-for="(st) in synctargets.items" :key="st.metadata?.name">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >

                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ st.metadata?.name }}
                        </p>
                      </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div v-for="(key, label) in getFilteredLabels(st.metadata?.labels)" :key="key">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {{ key }} : {{ label }}
                      </span>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <span class="relative">{{ getStatus(st) }}</span>

                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex justify-around">
                      <span class="text-yellow-500 flex justify-center">
                       <!-- <a href="#" class="mx-2 px-2 rounded-md"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-green-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a> -->
                        <button
                          class="mx-2 px-2 rounded-md"
                          @click="deleteSyncTarget(st)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-red-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                        </button>
                        <BootstrapConfig :syncTarget=st></BootstrapConfig>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
            >
            <!--
              <span class="text-xs text-gray-900 xs:text-sm"
                >Showing 1 to 4 of 50 Entries</span
              >

              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                >
                  Prev
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import CreateSyncTarget from "../partials/orgs/CreateSyncTarget.vue";
import BootstrapConfig from "../partials/kubeconfig/BootstrapConfig.vue";
import { Condition } from "@/api/kcp/models/Conditions"
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import { V1alpha1SyncTarget } from '@/api/kcp';
import { V1alpha1Workspace } from '@/api/faros';


export default defineComponent({
  name: "SyncTargetView",

  components: {
    Breadcrumb,
    CreateSyncTarget,
    BootstrapConfig
},

  data() {
    return {
      workspace: {} as V1alpha1Workspace,
      loaded: false,
    }
  },
  async mounted() {
    while (this.workspace != undefined && !this.workspace.apiVersion) {
      await this.sleep(1000)
      this.workspace = this.getWorkspace()
    }
    this.useWorkspaceActions(this.workspace).then(() => {
      this.loaded = true
    })
  },

  computed: {
    ...mapGetters("workspaceModule", {
      defaultWorkspace: "defaultWorkspace",
      workspaces: "workspaces",
    }),
    ...mapGetters("synctargetModule", {
      synctargets: "synctargets",
      error: "error",
    }),
    selectedWorkspaceName() {
      return this.$route.params.workspace
    },
    selectedOrganizationName() {
      return this.$route.params.organization
    },
  },
  methods: {
    ...mapActions("workspaceModule", [
      "useWorkspaceActions",
    ]),
    ...mapActions("synctargetModule", [
      "deleteSyncTargetActions",
    ]),
    deleteSyncTarget(synctarget: V1alpha1SyncTarget){
      const wl = {
        workspace: this.defaultWorkspace,
        synctarget: synctarget,
      }
      this.deleteSyncTargetActions(wl)
    },
    getWorkspace(){
      for (let workspace of this.workspaces.items) {
        if (workspace.metadata?.name == this.selectedWorkspaceName) {
          return workspace
        }
      }
    },
    getFilteredLabels(labels: { [key: string]: string; }){
      let removeList = [
        'claimed.internal.apis.kcp.io',
        'internal.workload.kcp.io/key',
        'synctarget.workload.faros.sh/bootstrap',
      ]

      let filteredLabels: { [key: string]: string; } = {}
      for (const key of Object.keys(labels)) {
        let found = false
        for (const removeKey in removeList){
          if (key.includes(removeList[removeKey])){
            found = true
          }
        }
        if (!found){
         filteredLabels = {...filteredLabels, [key]: labels[key]}
        }
      }
      return filteredLabels
    },
    getStatus(synctarget: V1alpha1SyncTarget){
      const conditions = synctarget.status?.conditions as Condition[]
      if (conditions === undefined){
        return 'Unknown'
      }
      for (const condition of conditions){
        if (condition.type === 'Ready'){
          if (condition.status === 'True'){
            return 'Ready'
          } else {
            return 'Not Ready'
          }
        }
      }
    },
    sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
  }
})

</script>
