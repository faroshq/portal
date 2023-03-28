<template>
  <button  @click="getSyncTargetBootstrapConfig" class="mx-2 px-2 rounded-md">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"/></svg>
   </button>
</template>

<script lang="ts">

import { defineComponent, } from "vue";
import { mapGetters, mapActions } from "vuex";
import * as kubeconfig from "@/helpers/kubeconfig";
import { V1alpha1SyncTarget } from "@/api/kcp";

export default defineComponent({
  name: "BootstrapConfig",

  props: {
    syncTarget: {
      type: V1alpha1SyncTarget,
      required: true,
    },
  },

  data () {
    return {
      open: false
    }
  },

  computed:{
    ...mapGetters("workspaceModule", {
      defaultWorkspace: "defaultWorkspace",
    }),
    ...mapGetters("synctargetModule", {
      synctargets: "synctargets",
      bootstrapConfigMaps: "bootstrapConfigMaps",
    }),
  },
  methods: {
    ...mapActions("synctargetModule", [
      "deleteSyncTargetActions",
      "listSyncTargetsBootstrapConfigsActions"
    ]),
    getSyncTargetBootstrapConfig(){
      console.log("click")
      this.listSyncTargetsBootstrapConfigsActions(this.defaultWorkspace).then(() => {
        if (this.bootstrapConfigMaps.items.length === 0) {
          return
        }
        for(const cm of this.bootstrapConfigMaps.items){
          const internalname = "resources.yaml"
          if (cm.metadata.labels["synctarget.workload.faros.sh/name"] === this.syncTarget.metadata?.name){
            let filename = this.syncTarget.metadata?.name+"-"+internalname
            let text = cm.data[internalname]
            let element = document.createElement('a');
            element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);
          }
        }
      })
    },
  },

})

</script>
