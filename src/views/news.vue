<template>
    <main class="container">
        <div class="p-[20px] md:p-[40px] lg:px-[100px] lg:pt-[100px] lg:pb-[70px]">
            <p class="text-heading text-7xl"><span class="text-[#F16336]">TIN TỨC</span> <span class="text-[#001933]">VÀ SỰ KIỆN</span></p>
        </div>
        <div class="md:flex md:flex-row whitespace-nowrap	md:whitespace-normal overflow-x-scroll	md:overflow-auto justify-evenly py-5 px-3 md:p-8 bg-[#E4E4E4] text-[#686868] text-lg md:text-2xl uppercase">
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class=" hover:text-[#003366] hover:font-semibold" href="">Tất cả</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5 hover:text-[#003366] hover:font-semibold" href="">NGÀNH ĐÁ</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5 hover:text-[#003366] hover:font-semibold" href="">NGÀNH Ô TÔ</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5 hover:text-[#003366] hover:font-semibold" href="">NGÀY BẤT ĐỘNG SẢN</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5 hover:text-[#003366] hover:font-semibold" href="">NGÀY BẤT ĐỘNG SẢN</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5 hover:text-[#003366] hover:font-semibold" href="">NGÀNH ĐỒ GỖ</a>
        </div>
        <section class="responsive-section">
            <div class="grid grid-cols-1 divide-y-2 lg:divide-y-0 lg:grid-cols-2 gap-10">
            <div class="flex flex-col gap-8">
                <router-link to="/news/article">
                    <img class="full-img h-full" src="/assets/img/news-1.png" alt="">
                </router-link>
                <div class="content flex flex-col gap-5">
                    <p class= "text-sm md:text-base lg:text-sm text-[#003366]">THÔNG TIN CÔNG TY</p>
                    <p class="text-base md:text-xl hover:text-[#003366] cursor-pointer hover:font-semibold font-medium">PTB vào top danh sách 25 thương hiệu công ty hàng tiêu dùng cá nhân và công nghiệp dẫn đầu do Forbes Việt Nam bình chọn.</p>
                    <p class="text-xs md:text-sm lg:text-xs">02-01-2024</p>
                </div>
            </div>
            <div class="flex flex-col gap-8 divide-y-2 pt-8 lg:pt-0">
                <div class="grid grid-cols-2">
                    <div class="content justify-center flex flex-col gap-4">
                        <p class="uppercase text-sm md:text-base lg:text-sm text-[#003366]">thông tin công ty</p>
                        <router-link to="/news/article"><p class="text-base md:text-xl hover:text-[#003366] cursor-pointer hover:font-semibold">PTB giải trình kết quả hoạt động SXKD quý II năm 2023</p></router-link>
                        <p class="text-xs md:text-sm lg:text-xs">02-01-2024</p>
                    </div>
                    <router-link to="/news/article">
                    <img class="full-img h-full" src="/assets/img/news-2.png" alt="">
                </router-link>
                </div>
                <div class="grid grid-cols-2 pt-6">
                    <div class="content justify-center flex flex-col gap-4">
                        <p class="uppercase text-sm md:text-base lg:text-sm text-[#003366]">thông tin công ty</p>
                        <router-link to="/news/article"><p class="text-base md:text-xl hover:text-[#003366] cursor-pointer hover:font-semibold">CBTT báo cáo tài chính hợp nhất Quý II năm 2023</p></router-link>
                        <p class="text-xs md:text-sm lg:text-xs">02-01-2024</p>
                    </div>
                    <div><img class="full-img h-full" src="/assets/img/news-3.png" alt=""></div>
                </div>
                <div class="grid grid-cols-2 pt-6">
                    <div class="content justify-center flex flex-col gap-4">
                        <p class="uppercase text-sm md:text-base lg:text-sm text-[#003366]">thông tin công ty</p>
                        <p class="text-base md:text-xl hover:text-[#003366] cursor-pointer hover:font-semibold">CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023</p>
                        <p class="text-xs md:text-sm lg:text-xs">02-01-2024</p>
                    </div>
                    <div><img class="full-img h-full" src="/assets/img/news-4.png" alt=""></div>
                </div>
            </div>
        </div>
        </section>
        <section class="responsive-section pb-20">
            <swiper class="" 
            :pagination="pagination" :modules="modules"
            >
                <swiper-slide>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                        <newsAndEvents :cards="newsData"/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                        <newsAndEvents :cards="newsData"/>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </section>
    </main>
</template>

<script setup>
import newsAndEvents from '../components/newsAndEvents.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/vue';

import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // Import Swiper styles
  import 'swiper/css';
  const modules = [Navigation, Pagination, Scrollbar, A11y];
  const pagination = {
el: '.swiper-pagination',
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
};
const newsData = ref([
    {img:'news-event-1.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},
    {img:'news-event-2.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},
    {img:'news-event-3.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},
    {img:'news-event-4.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},
    {img:'news-event-5.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},
    {img:'news-event-6.png', category:'thông tin công ty', title:'CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023', date:'02-01-2024'},

])
</script>

<style scoped>


.swiper {
    /* padding-bottom: 70px !important; */
}
:deep(.swiper-pagination) {
	position: relative;
	top: 27px;
	right: 10px;
	width: auto !important;
	left: auto !important;
	margin: 0;
    
}
:deep(.swiper-pagination-bullet) {
  display: inline;
  padding: 12px 15px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px
}

:deep(.swiper-pagination-bullet-active) {
  color: #fff;
  background: #003366;
}
.swiper-pagination-bullet{
    display: inline !important;
}
</style>