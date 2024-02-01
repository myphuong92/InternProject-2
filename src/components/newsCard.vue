<template>
    
    <!-- <div class=" bg-[#003366] pl-5" v-for="card in cards" :key="card">
        <div class="flex flex-col gap-4 bg-white h-full pb-5">
            <div class="card-img">
                <img :src="card.img" alt="">
            </div>
            <div class="card-content flex flex-col gap-3 px-5 pb-5 justify-between h-[10rem]">
                <div class="flex flex-col gap-3" style="font-family: 'Big Shoulders Display', sans-serif;">
                    <p class="hover:text-[#F16336] cursor-pointer  line-clamp-2  text-2xl">{{ card.title }}</p>
                    <p>{{ card.date }}</p>
                </div>
                <div class="w-[43%] bg-[#003366] text-white">
                    <buttonComp title="Xem thêm" :icon="iconArrow"/>
                </div>
            </div>
        </div>
    </div> -->
    <swiper
        :modules="modules"
          :slides-per-view="1"
        :space-between="5"
        :navigation="{ nextEl: '.next', prevEl: '.before' }"
        :breakpoints="{768:{ slidesPerView: 2, spaceBetween:10}, 1024:{slidesPerView:3, spaceBetween:20}}"
        class="h-full"
        >
            <swiper-slide class=" bg-[#003366] pl-5" v-for="card in cards" :key="card">
                    <div class="flex flex-col gap-4 bg-white h-full">
                <div class="card-img">
                    <img class="full-img" :src="card.img" alt="">
                </div>
                <div class="card-content flex flex-col gap-3 px-5 pb-5 justify-between h-[10rem]">
                    <div class="flex flex-col gap-3" style="font-family: 'Big Shoulders Display', sans-serif;">
                        <p class="hover:text-[#F16336] cursor-pointer  line-clamp-2  text-2xl">{{ card.title }}</p>
                        <p>{{ card.date }}</p>
                    </div>
                    <div class=" md:w-1/2 bg-[#003366] text-white">
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
import { ref } from "vue";

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

</script>

<style scoped>
    /* .card-img{
        height: 28rem;
    }
    .card-img img{
        height: 100%;
        object-fit: cover;
    } */
</style>