
<template>
  <main>
    <WelcomeItem />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

import WelcomeItem from "../components/WelcomeItem.vue";

export default defineComponent({
  components: { WelcomeItem, },
});
</script>
