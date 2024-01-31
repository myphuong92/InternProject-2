<template>
  <div class="slider">
    <div class="list">
      <div
        class="item-slider relative"
        v-for="content in contents"
        :key="content.id"
      >
        <div>
          <img class="w-full" :src="content.bgimg" alt="" />
          <div class="content py-2  relative  flex flex-col mb-16 md:absolute md:w-[40%]">
            <div
              style="font-family: 'Big Shoulders Stencil Text', sans-serif"
              class="title  flex flex-col text-[#F16336] text-title md:px-20 md:py-8"
            >
              <p>{{ content.id }}</p>
              <p>{{ content.title }}</p>
            </div>
            <div class="desc bg-slate-50 flex flex-col justify-between gap-4 p-4 lg:p-16">
              <p class="text-[#526D88]">{{ content.desc }}</p>
              <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import buttonComp from "./buttonComp.vue";
let id = ref(1);
let contents = [
  {
    id: "0" + id.value++,
    title: "NGÀNH ĐÁ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH GỖ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH Ô TÔ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH BẤT ĐỘNG SẢN",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "assets/img/slider-nganh.png",
    learnMore: "#",
  },
];
</script>

<style scoped>
.slider .content {
  bottom: 0;

}


.slider {
  position: relative;
  /* max-width: 100vw; */
}
</style>
