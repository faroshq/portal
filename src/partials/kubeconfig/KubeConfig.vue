<template>
<div class="inline px-6 py-2 mt-3">

    <button
      @click="this.onCreateKubeconfig"
      class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
    >
      Download user kubeconfig
    </button>

  </div>
</template>

<script lang="ts">

import { V1alpha1Workspace } from "@/api/faros";
import { defineComponent, } from "vue";
import YAML from 'yaml'
import * as kubeconfig from "@/helpers/kubeconfig";

export default defineComponent({
  name: "KubeConfig",

  props: {
    workspace: {
      type: V1alpha1Workspace,
      required: true,
    },
  },

  data () {
    return {
      open: false
    }
  },

  methods: {
    onCreateKubeconfig() {
      // credit: https://www.bitdegree.org/learn/javascript-download
      const kc = kubeconfig.getKubeConfig(this.workspace)
      let text = kc.exportConfig();
      let filename = kc.getCluster(kc.getCurrentContext())?.name+'.kubeconfig';
      let element = document.createElement('a');
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },
  },

})

</script>
