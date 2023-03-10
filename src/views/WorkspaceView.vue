<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="Blank" />

  <!-- Page Content -->
  <kube-config :workspace="this.getWorkspace()" />

  APIExports:




</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import KubeConfig from '../partials/kubeconfig/KubeConfig.vue'
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "WorkspaceView",

  components: {
    Breadcrumb,
    KubeConfig
  },


  computed: {
    ...mapGetters("workspaceModule", {
      workspaces: "workspaces",
      error: "error",
      loading: "loading",
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
      "getWorkspacesAction",
    ]),
    getWorkspace(){
      let workspaces = this.workspaces.get(this.selectedOrganizationName)
      for (let workspace of workspaces.items) {
        if (workspace.metadata?.name == this.selectedWorkspaceName) {
          return workspace
        }
      }
    },
  }
})

</script>
