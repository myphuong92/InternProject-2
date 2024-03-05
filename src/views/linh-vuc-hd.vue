<template>
    <main class="container">
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
        :loop="true">

            <swiper-slide class="overflow-hidden">
                <img class="full-img h-full" src="/assets/img/da-op-banner.png" alt="">
            </swiper-slide>
            <swiper-slide class="overflow-hidden">
                <img class="full-img h-full" src="/assets/img/da-op-banner-2.png" alt="">
            </swiper-slide>
            <swiper-slide class="overflow-hidden">
                <img class="full-img h-full" src="/assets/img/da-op-banner-3.png" alt="">
            </swiper-slide>
        </swiper>
        <section>
            <div class="md:flex md:flex-row whitespace-nowrap	md:whitespace-normal overflow-x-scroll md:overflow-auto px-2 md:p-8  text-sub-heading justify-between">
                <router-link to="/linhvuc/daop" class="first text-lg md:text-xl lg:text-3xl"
                :class="{ active: $route.path === '/linhvuc/daop' }">Khai thác chế biến đá ốp lát</router-link>
                <router-link to="/linhvuc/dogo" class="ml-5 text-lg md:text-xl lg:text-3xl"
                :class="{ active: $route.path === '/linhvuc/dogo' }">Sản xuất kinh doanh đồ gỗ nội, ngoại thất</router-link>
                <a href="#" class="ml-5 text-lg md:text-xl lg:text-3xl">Phân phối xe ô tô Toyota</a>
                <a href="#" class="ml-5 text-lg md:text-xl lg:text-3xl">Ngành bất động sản</a>
            </div>
            <div class="divider"></div>
        </section>
        <router-view/>
    </main>  
    </template>
    
    <script setup>
    
    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/vue'
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css';
  const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    </script>
    
    <style scoped>
    
    .nav a{
        font-weight: 400;
        cursor: pointer;
    }
    .active{
        color: #F16336;
        font-weight: 700 !important; 
    }
    .divider{
        border-top: 3px solid #bbb;
    
    }
    .swiper-slide {
        height: auto;
    }
    
    </style>