<template>
  <footer>
    <div class="bg-[#003366] px-[20px] md:px-[40px] lg:px-[80px] text-white">
      <div class="flex flex-col md:pl-5 border-l-[1px] border-[#808080] has-border lg:py-[100px] py-[20px] md:py-[40px]">
          <div class="md:-ml-5 md:pl-5 border-l-4 border-white has-border">
            <p class="text-sub-heading text-5xl uppercase ">Công ty cổ phần phú tài</p>
        </div>
        <div class="pt-14">
          <div class="flex flex-col lg:flex-row gap-10 lg:gap-2">
                <texticon class="lg:w-[40%] mr-8" :items="col1"/>
                <texticon class="lg:w-[20%]" :title="title2" :items="col2"/>
                <texticon class="lg:w-[20%]" :title="title3" :items="col3"/>
                <texticon class="lg:w-[20%]" :title="title4" :items="col4"/>
        </div>
        </div>
        
      </div>
        
    </div>
    <div class="py-4 bg-[#F0F0F0]">
      <p class="text-[#003366] flex justify-center big-shoulder-display text-xl font-semibold">&copy; 2023 Phú Tài Design</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

import texticon from "./colFooter.vue";
let col1=[
  {icon: "location_on", content:"278 Nguyễn Thị Định - Phường Nguyễn Văn Cừ - TP. Quy Nhơn - Tỉnh Bình Định"},
  {icon:"call", content:"+(84) 256 3847668"},
  {icon:"print", content:"+(84) 256 3847556"},
  {icon:"mail", content:"sale@phutai.com.vn"}
]
const title2 = ref("GIỚI THIỆU")
let col2=[
  {content:"Giới Thiệu Chung", link:"#"},
  {content:"Đội Ngũ Nhân Sự", link:"#"},
  {content:"Lĩnh Vực Kinh Doanh", link:"#"},
  {content:"Thành Tựu Nổi Bật", link:"#"}
]
const title3 = ref("LINH VỰC HOẠT ĐỘNG")
let col3=[
  {content:"Ngành Đá", link:"#"},
  {content:"Ngành Gỗ", link:"#"},
  {content:"Ngành Ô tô", link:"#"},
  {content:"Ngành Bất Động Sản", link:"#"}
]
const title4 = ref("Quan hệ cổ đông")
let col4=[
  {content:"Báo cáo Tài Chính", link:"#"},
  {content:"Báo Cáo Thuế", link:"#"},
  {content:"Công Bố Thông Tin", link:"#"},
  {content:"Tài Liệu Khác", link:"#"}
]
</script>

<style scoped>
@media screen and (max-width: 767px) {
.has-border{
  border: unset;
}
}
@media (min-width: 768px) and (max-width: 1025px) {
 
}
</style>