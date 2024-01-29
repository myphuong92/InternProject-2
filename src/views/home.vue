<script setup>
import { ref } from 'vue'
import sliderNganh from "../components/sliderNganh.vue"
import buttonComp from "../components/buttonComp.vue"
import newscard from "../components/newsCard.vue";
const iconArrow = "arrow_forward"

// NEWS CARD
const newsData = ref([
  {img:'InternProject-2/src/assets/img/news-card-1.png', title:"Phú Tài (PTB) nhận tín dụng xanh gần 200 tỷ từ Ngân Hàng Anh Quốc HSBC",date:"11-11-2023"},
  {img:"InternProject-2/src/assets/img/news-card-2.png", title:"CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023 ",date:"11-11-2023"},
  {img:"InternProject-2/src/assets/img/news-card-3.png", title:"Nghị quyết số :124/NQ-HĐQT về thống nhất và đống ý các Phương án mua lại trái phiếu trước hạ",date:"11-11-2023"},
])
</script>

<template>
  
   <main class="container flex flex-col">
      <section>
        <div class="home-intro relative">

            <div class="w-full home-img-shade relative">
              <div class="w-full">
                <img  class="object-cover w-full" src="../assets/img/home-banner.png" alt="">
              </div>
              <div class="shade"></div>
            </div>

            <div class="content text-center flex flex-col gap-4 items-center">
              <p class="text-heading text-white">Khám Phá Vẻ Đẹp Và Bền Vững:</p>
              <p class="text-heading text-[#F16336]">Nội Thất Đá Tự Nhiên Và Gỗ Cao Cấp</p>
              <p class="text-xl text-white">Xây dựng không gian sống và giá trị thẩm mỹ vượt thời gian</p>
              
             <buttonComp title="Xem thêm" :icon="iconArrow" changeColor="orange"/>
          </div>
        </div>
      </section>
      <section>
        <div class="flex flex-col p-[100px]">
          <div class="flex justify-between mb-20">
            <p class="text-sub-heading w-1/2 text-[#003366]">LĨNH VỰC <span class="text-[#F16336]">HOẠT ĐỘNG</span></p>
            <p class="text-desc w-[40%]">Với khát vọng lan tỏa giá trị thịnh vượng, chúng tôi nghiên cứu và phát triển những sản phẩm từ đá tự nhiên và đồ gỗ nội thất độc đáo, mang lại sự khác biệt trong không gian sống cho cộng đồng mà chúng tôi phục vụ.</p>
          </div>
          <sliderNganh/>
        </div>
      </section>
      <section>
        <div class="p-[100px] bg-white flex flex-col gap-10">
          <div class="content">
            <p class="uppercase text-sub-heading w-1/2 text-[#003366]">QUAN HỆ <span class="text-[#F16336]">CỔ ĐÔNG</span></p>
          </div>
          <div class="set-img-text grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <p class="text uppercase">BÁO CÁO TÀI CHÍNH</p>
              <div class="img">
                <img class="w-full" src="../assets/img/set-img-1.png" alt="">

              </div>
            </div>

            <div class="col-span-1">
              <p class="text uppercase">BÁO CÁO THUẾ</p>
              <div class="img">
                <img class="w-full" src="../assets/img/set-img-2.png" alt="">

              </div>
            </div>
            <div class="col-span-1">
              <p class="text uppercase">CÔNG BỐ THÔNG TIN</p>
              <div class="img">
                <img class="w-full" src="../assets/img/set-img-3.png" alt="">

              </div>
            </div>
            <div class="col-span-2">
              <p class="text uppercase">TÀI LIỆU KHÁC</p>
              <div class="img">
                <img class="w-full" src="../assets/img/set-img-4.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="p-[100px] flex flex-col gap-10">
          <div class="content">
            <p class="uppercase text-sub-heading w-1/2 text-[#003366]">TIN TỨC VÀ <span class="text-[#F16336]">SỰ KIỆN</span></p>
          </div>
          <div class="card grid grid-cols-3 gap-5">
            <newscard :cards="newsData"/>
          </div>
        </div>
      </section>
    </main>
</template>

<style scoped>
.set-img-text p.text{
  background-color: #003366;
    padding: 1.5rem;
    color: white;
    font-size: 36px;
    font-family: 'Big Shoulders Display', sans-serif;
}
.set-img-text > div{
  max-height: 376px;
  overflow: hidden;
}
.set-img-text .img img{
  object-fit: cover;
  overflow: hidden;
  min-height: 300px;
}
.home-intro .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
}
</style>
