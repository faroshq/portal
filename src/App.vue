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

  // This is mostly to load localstore into vuex. Actions and mutators should
  // be used to change the state of the store and localstore for refreshes.
  mounted() {
    this.getOrganizationsAction().
    then(() => {
      this.getOrganizationListWorkspaces(this.organizations);
      const defaultOrganization = localStorage.getItem('defaultOrganization');
      for (let organization of this.organizations.items) {
        if (organization.metadata?.name == defaultOrganization) {
          this.useOrganizationActions(organization);
          return;
        }
      }
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
