<template>
  <!-- Computer -->
  <li class=" computer slide items-end bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover" v-for="content in contents" :key="content.id" :class="{active: content.id === activeSlideId, 'w-[67px]': content.id ===1, 'w-[72px]':content.id !==1}" @click="setActiveSlideId(content.id)">
                <div class="title bg-[#003366] text-white font-bold text-4xl big-shoulder-display">
                    <div class="flex items-end h-full pb-3"><p>0{{ content.id }}</p></div>
                    <span class="text uppercase">{{ content.title }}</span>
                </div>
                <div class="content flex-col" :class="{flex: content.id === activeSlideId , 'hidden': content.id !== activeSlideId }">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class=" flex flex-col text-[#F16336] text-title text-4xl md:py-8">
                    <p>0{{ content.id }}</p>
                    <p>{{ content.title }}</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-4 lg:p-6 lg:w-1/2">
                    <p>{{ content.desc }}</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
    <!-- Desktop -->
    <li class=" desktop slide items-end bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover" v-for="content in contents" :key="content.id" :class="{active: content.id === activeSlideId, 'w-[69px]': content.id ===1, 'w-[70px]':content.id ===2, 'w-[77px]':content.id ===3,'w-[77px]':content.id ===4}" @click="setActiveSlideId(content.id)">
                <div class="title bg-[#003366] text-white font-bold text-4xl big-shoulder-display">
                    <div class="flex items-end h-full pb-3"><p>0{{ content.id }}</p></div>
                    <span class="text uppercase">{{ content.title }}</span>
                </div>
                <div class="content flex-col" :class="{flex: content.id === activeSlideId , 'hidden': content.id !== activeSlideId }">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class=" flex flex-col text-[#F16336] text-title text-4xl md:py-8">
                    <p>0{{ content.id }}</p>
                    <p>{{ content.title }}</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-4 lg:p-6 lg:w-1/2">
                    <p>{{ content.desc }}</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
    <!-- Mobile -->
    <swiper 
    :modules="modules"
    :slides-per-view="1"
    :navigation="{ nextEl: '.sliderNganh-next', prevEl: '.sliderNganh-prev' }"

    class="">
      <swiper-slide class="mobile slideMobile" v-for="content in contents" :key="content.id">
                <div class="relative bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover h-[420px]">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class="text-[#F16336] text-title text-3xl absolute bottom-[50px] left-[25px]">
                    <p>0{{ content.id }}</p>
                    <p>{{ content.title }}</p>
                  </div>
                </div>
                <div class="content flex-col">
                  <div class="w-full">
                    <div class="bg-slate-50 text-sm p-5 flex flex-col justify-between gap-5">
                    <p>{{ content.desc }}</p>
                    <buttonComp title="Xem thêm" class="w-1/2" changeColor="blue"/>
                  </div>
                  </div>
                  
                </div>
            </swiper-slide>
    </swiper>
            
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/vue'
import buttonComp from "./buttonComp.vue";
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // Import Swiper styles
  import 'swiper/css';
  const modules = [Navigation, Pagination, Scrollbar, A11y];

let id = ref(1);
let contents = [
  {
    id: id.value++,
    title: "NGÀNH ĐÁ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: id.value++,
    title: "NGÀNH GỖ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: id.value++,
    title: "NGÀNH Ô TÔ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: id.value++,
    title: "NGÀNH BẤT ĐỘNG SẢN",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
];
const activeSlideId = ref(1);
const setActiveSlideId = (id)=>{
  activeSlideId.value = id
  console.log('clicked')
}
</script>

<style scoped>
ul li{
	list-style: none;
}


.slide, .slideMobile{
	overflow: hidden;
	transition: .5s  ease;
}
.slide{
  /* width:70px; */
}
.slideMobile{
  height: auto;

}
.slide .title {
	position: relative;
	height: 100%;

  padding: 0 22px;
  border-right: 1px solid #fff;
}
.slideMobile .title{
  padding: 6px 0px 6px 10px;

  border-bottom: 1px solid #fff;

}
.slide .title > span.text {
    position: absolute;
    top: 61%;
    transform: rotate(270deg) translateX(-100%);
    width: 100px;
    left: -13px;
    white-space: nowrap;
    font-size: 36px;
    font-weight: 500;
}

 .active {
	width: 80%;
 }
 .activeMobile {
	height: 500px;
 }

 .slide .content {
	padding: 40px;
 }

 .slide .active.slide .title {
	display: none;
 }
 .slide .title div p{
  border-top: 4px solid white;
    padding-top: 10px;
 }
 .slideMobile .content{
  
 }
 .computer{
  display: flex;
 }
 .desktop{
  display: none;
 }
 .mobile{
  display: none;
 }
 @media screen and (max-width: 767px) {
  .computer{
    display: none;
  }
  .desktop{
    display: none;
  }
  .mobile{
    display: block;
  }
 }
 @media (min-width: 768px) and (max-width: 1025px) {
  .slide .title > span.text {
    font-size: 30px;
  }
  .computer{
    display: none;
  }
  .desktop{
    display: flex;
  }
  .mobile{
    display: none;
  }
 }
</style>
