<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="TODO" />
    <div v-if=loaded>
      <div class="grid grid-cols-3 gap-0">
        <div>
          <KubeConfig :workspace="getWorkspace()" />
        </div>
        <div>
          <DeleteWorkspace :workspace="getWorkspace()" />
        </div>
      </div>
      <!-- <CreateLocation :workspace="getWorkspace()" /> -->
    <div>
  </div>
  </div>


</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import KubeConfig from '../partials/kubeconfig/KubeConfig.vue'
import DeleteWorkspace from '../partials/orgs/DeleteWorkspace.vue'
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "WorkspaceView",

  components: {
    Breadcrumb,
    KubeConfig,
    DeleteWorkspace,
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
      for (let workspace of this.workspaces.items) {
        if (workspace.metadata?.name == this.selectedWorkspaceName) {
          return workspace
        }
      }
    },
  }
})

</script>
