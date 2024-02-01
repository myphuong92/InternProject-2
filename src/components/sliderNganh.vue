<template>
  <li class="slide flex items-end bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover" v-for="content in contents" :key="content.id" :class="{active: content.id === activeSlideId, 'w-[67px]': content.id ===1, 'w-[72px]':content.id !==1}" @click="setActiveSlideId(content.id)">
                <div style="font-family: 'Big Shoulders Display', sans-serif;" class="title bg-[#003366] text-white font-bold text-4xl">
                    <div class="flex items-end h-full pb-3"><p>0{{ content.id }}</p></div>
                    <span class="text uppercase">{{ content.title }}</span>
                </div>
                <div class="content flex-col" :class="{flex: content.id === activeSlideId , 'hidden': content.id !== activeSlideId }">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class=" flex flex-col text-[#F16336] text-title text-4xl md:py-8">
                    <p>0{{ content.id }}</p>
                    <p>{{ content.title }}</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-3 lg:p-6 w-1/2">
                    <p>{{ content.desc }}</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
</template>

<script setup>
import { ref } from "vue";

import buttonComp from "./buttonComp.vue";
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
const activeSlideId = ref(null);
const setActiveSlideId = (id)=>{
  activeSlideId.value = id
  console.log('clicked')
}
</script>

<style scoped>
ul li{
	list-style: none;
}

.slides{
	display: flex;
	
}
.slide{
	overflow: hidden;
	transition: .5s  ease;
}


.title {
	position: relative;
	height: 100%;

  padding: 0 22px;
  border-right: 1px solid #fff;
}
.title > span.text {
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

 .content {
	padding: 40px;
 }

 .active.slide .title {
	display: none;
 }
 .title div p{
  border-top: 4px solid white;
    padding-top: 10px;
 }
 
</style>
