<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',

  mounted() {
    this.getOrganizationsAction().
    then(() => {
      this.getOrganizationListWorkspaces(this.organizations);
    })
  },
  computed: {
    ...mapGetters("organizationModule", {
        organizations: "organizations",
        defaultOrganization: "defaultOrganization",
        error: "error",
        loading: "loading",
    }),
  },
  methods: {
    ...mapActions("organizationModule", [
      "addOrganizationAction",
      "getOrganizationsAction",
      "useOrganizationActions",
    ]),
    ...mapActions("workspaceModule", [
      "getOrganizationListWorkspaces",
    ]),
  },

  setup() {
    const { currentRoute } = useRouter()
    const defaultLayout = 'default'

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    )

    return { layout }
  }

}

</script>
