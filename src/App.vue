<template>
  <div v-if="hasAccess" id="app">
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
    ...mapGetters('oidcStore', {
       oidcIsAuthenticated: "oidcIsAuthenticated",
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
    ...mapActions('oidcStore', [
      'authenticateOidcPopup',
      'removeOidcUser'
    ]),
    userLoaded: function (e: any) {
      console.log("user loaded")
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
    oidcError: function (e: any) {
      console.log('I am listening to the oidc oidcError event in vuex-oidc', e.detail)
    },
    automaticSilentRenewError: function (e: any) {
      console.log('I am listening to the automaticSilentRenewError event in vuex-oidc', e.detail)
    },
    signOut: function () {
      this.removeOidcUser().then(() => {
        this.$router.push('/')
      })
    },
    hasAccess: function () {
      return this.oidcIsAuthenticated || this.$route.meta.isPublic
    }
  },

    // This is mostly to load localstore into vuex. Actions and mutators should
    // be used to change the state of the store and localstore for refreshes.
    // We load data into store and then use the store
    mounted() {
      console.log("App mounted")

      window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
      window.addEventListener('vuexoidc:oidcError', this.oidcError)
      window.addEventListener('vuexoidc:automaticSilentRenewError', this.automaticSilentRenewError)
  },
  unmounted () {
    window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
    window.removeEventListener('vuexoidc:oidcError', this.oidcError)
    window.removeEventListener('vuexoidc:automaticSilentRenewError', this.automaticSilentRenewError)
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
