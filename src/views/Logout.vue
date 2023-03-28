<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    Logging out...
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';
import { store } from "@/store";


export default defineComponent({
  name: "LogOut",
  mounted () {
    store.dispatch("oidcStore/removeOidcUser");
    const router = useRouter();
    router.push("/");
  }
})



</script>
