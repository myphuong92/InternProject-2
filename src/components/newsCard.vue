<template>
    <swiper
        :modules="modules"
          :slides-per-view="1"
        :space-between="5"
        :navigation="{ nextEl: '.nextMobile', prevEl: '.beforeMobile' }"
        :breakpoints="{768:{ slidesPerView: 2, spaceBetween: 10}, 1025:{slidesPerView: 3, spaceBetween: 20}}"
        :breakpointsBase='window'
        class="h-full mobile"
        >
            <swiper-slide class=" bg-[#003366] pl-5" v-for="card in cards" :key="card">
                    <div class="flex flex-col gap-4 bg-white h-full">
                <div class="card-img max-h-[390px] min-h-[390px] overflow-hidden">
                    <img class="full-img h-full" :src="card.img" alt="">
                </div>
                <div class="card-content flex flex-col gap-3 px-5 pb-5 justify-between h-[10rem]">
                    <div class="flex flex-col gap-3 big-shoulder-display">
                        <p class="hover:text-[#F16336] cursor-pointer  line-clamp-2  text-2xl min-h-16">{{ card.title }}</p>
                        <p>{{ card.date }}</p>
                    </div>
                    <div class=" lg:w-1/2 bg-[#003366] text-white">
                        <buttonComp class="w-full" title="Xem thêm" :icon="iconArrow"/>
                    </div>
                </div>
            </div>
            </swiper-slide>
          </swiper>
          <swiper
        :modules="modules"
          :slides-per-view="1"
        :space-between="5"
        :navigation="{ nextEl: '.next', prevEl: '.before' }"
        :breakpoints="{768:{ slidesPerView: 2, spaceBetween: 10}, 1025:{slidesPerView: 3, spaceBetween: 20}}"
        :breakpointsBase='window'
        class="h-full tablet"
        >
            <swiper-slide class=" bg-[#003366] pl-5" v-for="card in cards" :key="card">
                    <div class="flex flex-col gap-4 bg-white h-full">
                <div class="card-img h-[390px] overflow-hidden">
                    <img class="full-img h-full" :src="card.img" alt="">
                </div>
                <div class="card-content flex flex-col gap-3 px-5 pb-5 justify-between h-[10rem]">
                    <div class="flex flex-col gap-3 big-shoulder-display">
                        <p class="hover:text-[#F16336] cursor-pointer  line-clamp-2  text-2xl min-h-16">{{ card.title }}</p>
                        <p>{{ card.date }}</p>
                    </div>
                    <div class=" lg:w-1/2 bg-[#003366] text-white">
                        <buttonComp class="w-full" title="Xem thêm" :icon="iconArrow"/>
                    </div>
                </div>
            </div>
            </swiper-slide>
          </swiper>
</template>

<script setup>
import buttonComp from "./buttonComp.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/vue';
import { ref, computed } from "vue";

import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // Import Swiper styles
  import 'swiper/css';
const iconArrow = "arrow_forward"
const props = defineProps({
        cards:Array
    })
    const swiperOptions = ref({
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.before',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
        // Define breakpoints here
        640: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // Add more breakpoints as needed
      },
});
const modules = [Navigation, Pagination, Scrollbar, A11y];
const breakpoints = ref({
  mobile: 768,
  tablet: 1025,
  desktop: 1280,
});
const navigationClasses = computed(() => {
  if (window.innerWidth < breakpoints.value.mobile) {
    return {
      nextEl: '.nextMobile',
      prevEl: '.beforeMobile',
    };
  } else {
    return {
      nextEl: '.next',
      prevEl: '.before',
    };
  }
});
</script>

<style scoped>
    /* .card-img{
        height: 28rem;
    }
    .card-img img{
        height: 100%;
        object-fit: cover;
    } */
    .mobile{
      display: none;
    }
@media screen and (max-width: 767px) {
  .mobile{
      display: block;
  }
  .tablet{
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
 
}
</style>