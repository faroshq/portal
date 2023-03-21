<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="TODO" />
  <div v-if=loaded>
    <!-- Page Content -->
    <KubeConfig :workspace="getWorkspace()" />

    <CreateLocation :workspace="getWorkspace()" />
    <div>

    APIExports:

    {{  getWorkspace() }}
    </div>
    <div>
    Locations:
    {{ getLocations() }}
   </div>
  </div>


</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import KubeConfig from '../partials/kubeconfig/KubeConfig.vue'
import CreateLocation from "../partials/orgs/CreateLocation.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "WorkspaceView",

  components: {
    Breadcrumb,
    KubeConfig,
    CreateLocation,
  },

  data() {
    return {
      workspace: {},
      loaded: false,
    }
  },
  mounted() {
    this.workspace = this.getWorkspace()
    this.useWorkspaceActions(this.workspace).then(() => {
      this.loaded = true
    })
  },

  computed: {
    ...mapGetters("workspaceModule", {
      workspaces: "workspaces",
      workspaceLoading: "loading",
      locations: "locations",
      error: "error",
    }),
   ...mapGetters("organizationModule", {
        organizations: "organizations",
        defaultOrganization: "defaultOrganization",
        error: "error",
        organizationsloading: "loading",
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
      "listWorkspaceLocations",
    ]),
    getWorkspace(){
        let workspaces = this.workspaces.get(this.selectedOrganizationName)
        if (workspaces != undefined){
          for (let workspace of workspaces.items) {
            if (workspace.metadata?.name == this.selectedWorkspaceName) {
              return workspace
            }
          }
        }
    },
    getLocations(){
      let locations = this.locations.get(this.selectedWorkspaceName)
      if (locations != undefined){
        return locations
      }
      return []
    }
  }
})

</script>
