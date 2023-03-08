<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="Blank" />

  {{ this.defaultOrganization.metadata?.name + this.selectedWorkspaceName }}
</template>
<script lang="ts">
import Breadcrumb from '../partials/Breadcrumb.vue'
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Workspace",


  computed: {
    ...mapGetters("organizationModule", {
      organizations: "organizations",
      defaultOrganization: "defaultOrganization",
      error: "error",
      loading: "loading",
    }),
    selectedWorkspaceName() {
      return this.$route.params.workspace
    },
  },
  methods: { }
})

</script>
