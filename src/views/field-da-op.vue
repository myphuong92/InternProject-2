<template>
  <main>
    <section>
      <div class="bg-white responsive-section flex flex-col gap-10 md:gap-16">
        <p
          style="font-family: 'Big Shoulders Display', sans-serif"
          class="text-3xl md:text-5xl font-bold text-[#003366] uppercase"
        >
          Khai thác chế biến đá ốp lát
        </p>
        <div class="daop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-14">
            <div class="flex flex-row gap-x-4 items-center">
              <img src="/assets/img/da-op-lat.png" alt="" />
              <p class="title text-xl md:text-[30px] font-semibold">Đá ốp lát</p>
            </div>
            <div class="content flex flex-col gap-8">
              <div>
                <img src="/assets/img/da-op-lat-ex.png" alt="" />
              </div>
              <div>
                <p class="content">
                  96,2% doanh thu ngành đá (2016)4.400.000 m2/năm (2017)
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-14">
            <div class="flex flex-row gap-4 items-center">
              <img src="/assets/img/da-thu-cong.png" alt="" />
              <p class="title text-xl md:text-[30px] font-semibold">Đá thủ công</p>
            </div>
            <div class="content flex flex-col gap-8">
              <div>
                <img src="/assets/img/da-thu-cong-ex.png" alt="" />
              </div>
              <div>
                <p class="content">
                  3,4% doanh thu ngành đá (2016)Sản xuất: 2.500 m3/năm (2017)
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-14">
            <div class="flex flex-row gap-4 items-center">
              <img src="/assets/img/da-nghien-sang.png" alt="" />
              <p class="title text-xl md:text-[30px] font-semibold">Đá nghiền sàng</p>
            </div>
            <div class="content flex flex-col gap-8">
              <div>
                <img src="/assets/img/da-nghien-sang-ex.png" alt="" />
              </div>
              <div>
                <p class="content">
                  0,4% doanh thu ngành đá (2016)Sản xuất: 300.000 m3/năm (2017)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="responsive-section flex flex-col gap-14">
        <p
          style="font-family: 'Big Shoulders Display', sans-serif"
          class="text-3xl md:text-5xl font-bold text-[#003366] uppercase"
        >
          MỎ ĐÁ NGUYÊN LIỆU
        </p>
        <div ref="moDa" class="relative divide-y-2 md:divide-y grid grid-cols-1 md:grid-cols-3 md:items-end">
          <div class="flex flex-col pt-5 md:pt-0 w-full md:gap-10 lg:gap-14 ">
            <div ref="yenBai" class="relative">
              <p
              @click="toggleLocation('yenbai')"
              :class="{'active' : isYenBaiClicked}"
                class="location uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                yên bái
              </p>
              <div class="content text-[#656565]">
                <p>05/2017 (Granida)</p>
                <p>1 mỏ <span class="highlight">đá hóa trắng</span></p>
              </div>
            </div>
            <div>
              <p
              
                class="uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                PHÚ YÊN
              </p>
              <div class="content text-[#656565]">
                <p>
                  3 mỏ: <span class="highlight">đá đen, đá xám</span> (VLXD Phú
                  Yên), <span class="highlight">đá đen xanh</span> (Granida)
                </p>
                <p>2 nhà máy chế biến đá Granite</p>
                <p>
                  Công suất: <span class="highlight">180.000 m2/năm</span> (VLXD
                  Phú Yên)
                </p>
              </div>
            </div>
            <div>
              <p
                class="uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                Đăk Nông
              </p>
              <div class="content text-[#656565]">
                <p>
                  2 mỏ đá: <span class="highlight">Bazal Bon Pinao</span> &
                  <span class="highlight">Đăk Sông</span>
                </p>
                <p>Nhà máy chế biến đá Granite</p>
                <p>Công suất: <span class="highlight">250.000 m2/năm</span></p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="map-location relative">
              <img src="/assets/img/map-location.png" alt="" />
              <div :class="{'active' : isYenBaiClicked}"  class="yenbai location-circle"></div>

              <div class="phuyen location-circle"></div>
              <div class="daknong location-circle"></div>
              <div :class="{'active': isHungYenClicked}" class="hungyen location-circle"></div>

              <div class="binhdinh location-circle"></div>
              <div class="khanhhoa location-circle"></div>

            </div>
          </div>
          
          <div class="flex flex-col pt-5 md:pt-0 -0 md:w-1/3 md:gap-10 lg:gap-14 md:absolute top-0 right-0">
            <div class="relative">
              <p
              :class="{'active' : isHungYenClicked}"
                class="location uppercase cursor-pointer text-[#003366] text-[20px] font-bold"
                style="font-family: 'Big Shoulders Display', sans-serif"
                @click="toggleLocation('hungyen')"
              >
                Hưng yên
              </p>
              <div class="content text-[#656565]">
                <p>Nhà máy chế biến đá Marble</p>
                <p>Công suất: <span class="highlight">450.000 m2/năm</span></p>
              </div>
            </div>
            <div>
              <p
                class="uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                BÌNH ĐỊNH
              </p>
              <div class="content text-[#656565]">
                <p>4 mỏ đá, mỏ Sơn Triều trữ lượng lớn nhất</p>
                <p>3 nhà máy chế biến đá Granite</p>
                <p>
                  Công suất: <span class="highlight">3 triệu m2/năm</span> (VLXD
                  Phú Yên)
                </p>
              </div>
            </div>
            <div>
              <p
                class="uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                khánh hòa
              </p>
              <div class="content text-[#656565]">
                <p>
                  2 mô tả: <span class="highlight">Tân Dân & Diên Tân</span>
                </p>
                <p>Nhà máy chế biến đá Granite</p>
                <p>Công suất: <span class="highlight">400.000 m2/năm</span></p>
              </div>
            </div>
            <div>
              <p
                class="uppercase cursor-pointer text-[#003366] text-[20px] font-bold hover:text-[#F16336]"
                style="font-family: 'Big Shoulders Display', sans-serif"
              >
                Đăk Nông
              </p>
              <div class="content text-[#656565]">
                <p>Nhà máy chế biến đá Marble</p>
                <p>Công suất: <span class="highlight">450.000 m2/năm</span></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section>
      <div class="bg-white responsive-section flex flex-col gap-x-8 gap-y-20">
        <p
          style="font-family: 'Big Shoulders Display', sans-serif"
          class="text-3xl md:text-5xl font-bold text-[#003366] uppercase"
        >
          Mạng lưới nhà máy và chi nhánh công ty
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <cardBranch :cards="card" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import cardBranch from "../components/cardBranch.vue";
const card = ref([
  {
    img: "/InternProject-2//assets/img/card-branch-1.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ ỐP LÁT TẠI TỈNH BÌNH ĐỊNH",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-2.png",
    title: "XÍ NGHIỆP THẮNG LỢI",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-3.png",
    title: "NHÀ MÁY CHẾ BIẾN GỖ PHÙ CÁT",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-4.png",
    title: "XÍ NGHIỆP SẢN XUẤT VẬT LIỆU XÂY DỰNG NHƠN HÒA",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-5.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ GRANITE-BASALT",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-6.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ ỐP LÁT TẠI TỈNH ĐỒNG NAI",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-7.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ GRANITE TẠI TỈNH KHÁNH HÒA",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-8.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ ỐP LÁT TẠI DIÊN TÂN - KHÁNH HOÀ",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-9.png",
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ ỐP LÁT TẠI TỈNH HƯNG YÊN",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2//assets/img/card-branch-10.png",
    title: "VĂN PHÒNG TẠI TP HỒ CHÍ MINH",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
]);
const moDa = ref(null);
const yenBai = ref(null);
const isHungYenClicked = ref(false);
const isYenBaiClicked = ref(false);

function toggleLocation(location){
  if(location==='hungyen'){
    isHungYenClicked.value=!isHungYenClicked.value
  }
  if(location==='yenbai'){
    isYenBaiClicked.value=!isYenBaiClicked.value

  }
}
onMounted(() =>{
  // Mỏ đá
  let width=moDa.value.offsetWidth;
  let height = moDa.value.offsetHeight;

  document.documentElement.style.setProperty('--moda-width', `${width}px`);
  document.documentElement.style.setProperty('--moda-height', `${height}px`);

  console.log('Width:', width);
  console.log('Height:', height);

  // Yên bái
  width = yenBai.value.offsetWidth;
  height = yenBai.value.offsetHeight;
  document.documentElement.style.setProperty('--yenbai-width', `${width}px`);
  document.documentElement.style.setProperty('--yenbai-height', `${height}px`);

  console.log('Width:', width);
  console.log('Height:', height);

}) 
</script>

<style scoped>
.daop .title {
  color: #003366;
}
.daop p.content {
  font-size: 20px;
  color: #001933;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.highlight {
  color: #3399ff;
  font-weight: 700;
}
/* Yên bái */
/* .dot-line-yenbai {
  padding: 4rem;
  border-top: 3px dotted #003366;
  border-left: 3px dotted #003366;
  position: absolute;
  top: calc(var(--yenbai-height) - calc(var(--moda-height) * 0.5));
  left: 1rem;
  right: calc(var(--yenbai-width) - calc(var(--moda-width) * 0.44));
} */

/* Hưng Yên */
/* .dot-line-hungyen{
  padding: 4rem;
  border-top: 3px dotted #003366;
  border-left: 3px dotted #003366;
  position: absolute;
  
} */

.map-location {
  position: relative;
}
.location-circle{
  position: absolute;
  width: 12px;
  height: 12px;
  /* background-color: #f16336; */
  background-color: gray;
  border-radius: 50%;
  border: 2px white solid;
}
.location-circle.active{
  background-color: #f16336;
}
.location.active{
  color: #f16336;
}
.yenbai{
  top: 4rem;
  left: 7rem;
}
.phuyen{
  bottom: 11rem;
  right: 5rem;
}
.daknong{
  bottom: 10rem;
  left: 13rem;
}
.hungyen{
  top: 118px;
  right: 183px;
}
.binhdinh{
  right: 5rem;
  bottom: 13rem;
}
.khanhhoa{
  bottom: 150px;
  right: 5rem;
}
@media screen and (max-width: 767px) {
  
}
@media (min-width: 768px) and (max-width: 1025px) {
 .dot-line-yenbai{
 }
 
}
</style>
