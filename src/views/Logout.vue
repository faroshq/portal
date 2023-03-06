<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    Logging out...
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';
import idsrvAuth from '../oauthclient/idsrvAuth'

export default defineComponent({
  name: "LogOut",
  mounted () {
    const router = useRouter();
    idsrvAuth.signOut();
    router.push("/");
  }
})



</script>
