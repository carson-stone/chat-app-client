
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  components: { RouterLink, RouterView, },
});
</script>

<style>
#app {
  color: var(--primary);
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
