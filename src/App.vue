<template>
  <div class="nav overflow-hidden">
    <headerComp/>
    <router-view/>
    <footerComp/>

  </div>
</template>
<script setup>
import headerComp from "./components/headerComp.vue";
import footerComp from "./components/footerComp.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import './style.css';
import { Navigation } from 'swiper/modules';

</script>

<style>

</style>