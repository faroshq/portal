<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="TODO" />

  <!-- Page Content -->
  <kube-config :workspace="this.getWorkspace()" />

  APIExports:


</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import KubeConfig from '../partials/kubeconfig/KubeConfig.vue'
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

import { KubernetesObjectApi } from "@/servicek8s/clientK8S";

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
      workspacesloading: "loading",
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
    getWorkspace(){
      if (!this.workspacesloading) {
        let workspaces = this.workspaces.get(this.selectedOrganizationName)
        if (workspaces != undefined){
          for (let workspace of workspaces.items) {
            if (workspace.metadata?.name == this.selectedWorkspaceName) {
              return workspace
            }
          }
        }
     }
    },
    returnStuff(){
      console.log(this.getWorkspace().status?.workspaceURL)
      const client = new KubernetesObjectApi(this.getWorkspace().status?.workspaceURL)
      client.get({})
    }
  }
})

</script>
