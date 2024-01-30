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
          <div class="content flex flex-col">
            <div
              style="font-family: 'Big Shoulders Stencil Text', sans-serif"
              class="title flex flex-col text-[#F16336] text-title"
            >
              <p>{{ content.id }}</p>
              <p>{{ content.title }}</p>
            </div>
            <div class="desc bg-slate-50 flex flex-col justify-between gap-4">
              <p class="text-[#526D88]">{{ content.desc }}</p>
              <buttonComp title="Xem thêm" class="w-1/2" changeColor="blue" />
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
    bgimg: "src/assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH GỖ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "src/assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH Ô TÔ",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "src/assets/img/slider-nganh.png",
    learnMore: "#",
  },
  {
    id: "0" + id.value++,
    title: "NGÀNH BẤT ĐỘNG SẢN",
    desc: "Với mong muốn đem đến cho thị trường những sản phẩm theo tiêu chuẩn quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty Cổ phần Phú Tài (Phú Tài JSC) luôn dẫn đầu và tiên phong trong việc đưa ra các sản phấm làm bằng đá tự nhiên cao cấp, không chỉ mang lại sự sang trọng hoàn hảo cho bất kỳ không gian nào mà còn đứng vững trước thử thách của thời gian. Nâng tầm không gian của bạn bằng sản phẩm đá của chúng tôi - sự pha trộn hoàn hảo giữa vẻ đẹp và độ bền vượt thời gian.",
    bgimg: "src/assets/img/slider-nganh.png",
    learnMore: "#",
  },
];
</script>

<style scoped>
.slider .content {
  position: absolute;
  bottom: 0;
  width: 40%;
}
.slider .title {
  padding: 5rem 2rem;
}
.slider .desc {
  padding: 4rem;
}
.slider {
  position: relative;
  margin: auto;
  width: 1000px;
  max-width: 100vw;
}
</style>
