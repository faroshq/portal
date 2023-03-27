<template>
  <div v-if="loaded" id="app">
    <div class="flex flex-col h-screen">
      <component :is="layout">
        <router-view :key="$route.fullPath" />
      </component>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from "vuex";
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "App",

  data(){
    return {
      loaded: false,
    }
  },

  computed: {
    ...mapGetters("organizationModule", {
        organizations: "organizations",
        defaultOrganization: "defaultOrganization",
        error: "error",
        loading: "loading",
    }),
    ...mapGetters("workspaceModule", {
        workspaces: "workspaces",
        error: "error",
        workspacesloading: "loading",
    }),
  },

  methods: {
    ...mapActions("organizationModule", [
      "addOrganizationAction",
      "getOrganizationsAction",
      "useOrganizationActions",
    ]),
    ...mapActions("workspaceModule", [
      "loadAllWorkspaces",
    ]),

  },

    // This is mostly to load localstore into vuex. Actions and mutators should
    // be used to change the state of the store and localstore for refreshes.
    // We load data into store and then use the store
    mounted() {
      console.log("App mounted")
      this.getOrganizationsAction().then(() => {
        // no orgs - just return
        if (this.organizations.items.length == 0) {
          this.loaded = true
            return
          }
          // no default - set first
        const defaultOrganization = localStorage.getItem('defaultOrganization');
        if (defaultOrganization == null) {
          this.useOrganizationActions(this.organizations.items[0])
        }
        for (let organization of this.organizations.items) {
          if (organization.metadata?.name == defaultOrganization) {
            this.useOrganizationActions(organization).then(() => {
              this.loadAllWorkspaces(organization).then(() => {
                this.loaded = true
              })
            })
          }
        }
      })
  },

  setup() {
    const { currentRoute } = useRouter()
    const defaultLayout = 'default'

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    )
    return { layout }
  },

})
</script>
