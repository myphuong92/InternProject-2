<template>
  <div class="nav">
    <headerComp/>
    <router-view/>
    <footerComp/>

  </div>
</template>
<script setup>
import headerComp from "./components/headerComp.vue";
import footerComp from "./components/footerComp.vue";

</script>

<style>

</style>