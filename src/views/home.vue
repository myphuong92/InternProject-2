<script setup>
import { ref } from "vue";
import headerComp from "../components/headerComp.vue";
import sliderNganh from "../components/sliderNganh.vue";
import buttonComp from "../components/buttonComp.vue";
import footerComp from "../components/footerComp.vue";
import newscard from "../components/newsCard.vue";
const iconArrow = "arrow_forward";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';


  import 'swiper/css';
// NEWS CARD
const newsData = ref([
  {
    img: "assets/img/news-card-1.png",
    title:
      "Phú Tài (PTB) nhận tín dụng xanh gần 200 tỷ từ Ngân Hàng Anh Quốc HSBC",
    date: "11-11-2023",
  },
  {
    img: "assets/img/news-card-2.png",
    title: "CBTT báo cáo tài chính riêng công ty mẹ Quý II năm 2023 ",
    date: "11-11-2023",
  },
  {
    img: "assets/img/news-card-3.png",
    title:
      "Nghị quyết số :124/NQ-HĐQT về thống nhất và đống ý các Phương án mua lại trái phiếu trước hạ",
    date: "11-11-2023",
  },
  {
    img: "assets/img/news-card-3.png",
    title:
      "Nghị quyết số :124/NQ-HĐQT về thống nhất và đống ý các Phương án mua lại trái phiếu trước hạ",
    date: "11-11-2023",
  },
  {
    img: "assets/img/news-card-3.png",
    title:
      "Nghị quyết số :124/NQ-HĐQT về thống nhất và đống ý các Phương án mua lại trái phiếu trước hạ",
    date: "11-11-2023",
  },
]);
</script>

<template>
  <main class="container flex flex-col">
    <section>
      <div class="home-intro relative">
        <div class="w-full home-img-shade relative">
          <div class="w-full">
            <img
              class="full-img"
              src="/assets/img/home-banner.png"
              alt=""
            />
          </div>
          <div class="shade"></div>
        </div>

        <div class="content text-center flex flex-col gap-4 items-center">
          <p class="text-heading text-7xl text-white">Khám Phá Vẻ Đẹp Và Bền Vững:</p>
          <p class="text-heading text-7xl text-[#F16336]">
            Nội Thất Đá Tự Nhiên Và Gỗ Cao Cấp
          </p>
          <p class="md:text-xl text-white">
            Xây dựng không gian sống và giá trị thẩm mỹ vượt thời gian
          </p>

          <buttonComp title="Xem thêm" :icon="iconArrow" changeColor="orange" />
        </div>
      </div>
    </section>
    <section>
      <div class="px-[20px] md:px-[40px] lg:px-[80px]">
        <div class="flex flex-col  border-l-[1px] border-[#808080] has-border lg:py-[100px] py-[20px] md:py-[40px]">
          <div class=" justify-between mb-8 md:mb-20 md:flex">
            <div class="md:w-1/2">
              <p class="text-sub-heading text-5xl whitespace-nowrap	 text-[#003366] md:pl-[40px] border-l-4 border-[#F16336] has-border">
            LĨNH VỰC <span class="text-[#F16336]">HOẠT ĐỘNG</span>
          </p>
            </div>
          
          <p class="text-desc text-lg md:w-[40%]">
            Với khát vọng lan tỏa giá trị thịnh vượng, chúng tôi nghiên cứu và
            phát triển những sản phẩm từ đá tự nhiên và đồ gỗ nội thất độc đáo,
            mang lại sự khác biệt trong không gian sống cho cộng đồng mà chúng
            tôi phục vụ.
          </p>
        </div>
        <div class="-mx-[20px] md:mx-0">
          <div>
            <div class="sliderNganhBtn flex justify-between mb-5 md:hidden px-[20px]">
              <button class="sliderNganh-prev"><span class="material-symbols-outlined text-2xl  text-[#003366]">navigate_before</span></button>
            <button class="sliderNganh-next"><span class="material-symbols-outlined text-2xl text-[#F16336]">navigate_next</span></button>
            </div>
            <ul class="slides md:flex md:h-[650px]">
              <sliderNganh/>
            </ul>
            
          </div>
          <!-- <ul class="slides">
            <li class="slide active slide1 flex items-end bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover">
                <div class="title">
                    <span>Ngành đá</span>
                </div>
                <div class="content flex flex-col">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class="  flex flex-col text-[#F16336] text-title text-4xl md:px-20 md:py-8">
                    <p>01</p>
                    <p>Ngành gỗ</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-3 lg:p-6 w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error ad esse. Ab illum molestias, quam reprehenderit labore deserunt est eum aliquid sunt reiciendis saepe rerum, ipsum qui. Dolorem, expedita?</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
            <li class="slide slide2 bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover">
                <div class="title">
                    <span>Ngành gỗ</span>
                </div>
                <div class="content flex flex-col">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class="  flex flex-col text-[#F16336] text-title text-4xl md:px-20 md:py-8">
                    <p>01</p>
                    <p>Ngành gỗ</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-3 lg:p-6 w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error ad esse. Ab illum molestias, quam reprehenderit labore deserunt est eum aliquid sunt reiciendis saepe rerum, ipsum qui. Dolorem, expedita?</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
            <li class="slide slide3 bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover">
                <div class="title">
                    <span>Ngành ô tô</span>
                </div>
                <div class="content flex flex-col">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class="flex flex-col text-[#F16336] text-title text-4xl md:px-20 md:py-8">
                    <p>01</p>
                    <p>Ngành gỗ</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-3 lg:p-6 w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error ad esse. Ab illum molestias, quam reprehenderit labore deserunt est eum aliquid sunt reiciendis saepe rerum, ipsum qui. Dolorem, expedita?</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li> 
            <li class="slide slide4 bg-[url('/assets/img/slider-nganh.png')] bg-no-repeat bg-cover">
                <div class="title">
                    <span>Ngành bất động sản</span>
                </div>
                <div class="content flex flex-col">
                  <div style="font-family: 'Big Shoulders Stencil Text', sans-serif"
                        class="flex flex-col text-[#F16336] text-title text-4xl md:px-20 md:py-8">
                    <p>01</p>
                    <p>Ngành gỗ</p>
                  </div>
                  <div class="bg-slate-50 flex flex-col justify-between gap-4 p-3 lg:p-6 w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error ad esse. Ab illum molestias, quam reprehenderit labore deserunt est eum aliquid sunt reiciendis saepe rerum, ipsum qui. Dolorem, expedita?</p>
                    <buttonComp title="Xem thêm" class="md:w-1/2" changeColor="blue"/>
                  </div>
                </div>
            </li>
        </ul> -->
          
        </div>
        </div>
        
        
        
      </div>
    </section>
    <section>
      <div class="px-[20px] md:px-[40px] lg:px-[80px]  bg-white ">
        <div class="flex flex-col gap-10 md:pl-5 border-l-[1px] border-[#808080] has-border lg:py-[100px] py-[20px] md:py-[40px]">
          <div class="content md:-ml-5 md:pl-5 border-l-4 border-[#F16336] has-border">
          <p class="uppercase text-sub-heading text-5xl md:w-1/2 text-[#003366]">
            QUAN HỆ <span class="text-[#F16336]">CỔ ĐÔNG</span>
          </p>
        </div>
        <div class="set-img-text grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="md:col-span-2">
            <p class="text uppercase">BÁO CÁO TÀI CHÍNH</p>
            <div class="img">
              <img class="w-full" src="/assets/img/set-img-1.png" alt="" />
            </div>
          </div>

          <div class="md:col-span-1">
            <p class="text uppercase">BÁO CÁO THUẾ</p>
            <div class="img">
              <img class="w-full" src="/assets/img/set-img-2.png" alt="" />
            </div>
          </div>
          <div class="md:col-span-1">
            <p class="text uppercase ">CÔNG BỐ THÔNG TIN</p>
            <div class="img">
              <img class="w-full" src="/assets/img/set-img-3.png" alt="" />
            </div>
          </div>
          <div class="md:col-span-2">
            <p class="text uppercase">TÀI LIỆU KHÁC</p>
            <div class="img">
              <img class="w-full" src="/assets/img/set-img-4.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </section>

    <section>
      <div class="px-[20px] md:px-[40px] lg:px-[80px]">
        <div class="flex flex-col gap-10 md:pl-5 border-l-[1px] border-[#808080] has-border lg:py-[100px] py-[20px] md:py-[40px]">
          <div class="content flex flex-row justify-between md:-ml-5 md:pl-5 border-l-4 border-[#F16336] has-border">
          <p class="uppercase text-sub-heading text-5xl md:w-1/2 text-[#003366]">
            TIN TỨC VÀ <span class="text-[#F16336]">SỰ KIỆN</span>
          </p>
          <div class="slide-button desktop hidden md:flex gap-2 md:gap-6">
            <button class="before "><span class="material-symbols-outlined text-xl md:text-3xl">navigate_before</span></button>
            <button class="next"><span class="material-symbols-outlined text-xl md:text-3xl">navigate_next</span></button>
          </div>
        </div>
        <div class="card md:-mr-[40px] lg:-mr-[100px]">
          <newscard :cards="newsData"/>

          <div class="slide-button mobile justify-center mt-4">
            <button class="beforeMobile"><span class="material-symbols-outlined text-xl md:text-3xl">navigate_before</span></button>
            <button class="ml-5 nextMobile"><span class="material-symbols-outlined text-xl md:text-3xl">navigate_next</span></button>
          </div>
          
        </div>
        </div>
        
        
      </div>
    </section>
  </main>
</template>

<style scoped>
.set-img-text p.text {
  background-color: #003366;
  padding: 1.5rem;
  color: white;
  font-size: 36px;
  font-family: "Big Shoulders Display", sans-serif;
}
.set-img-text > div {
  max-height: 376px;
  overflow: hidden;
}
.set-img-text .img img {
  object-fit: cover;
  overflow: hidden;
  min-height: 300px;
}
.home-intro .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}
button.before, button.next{
  border: 3px solid black;
  border-radius: 50%;
}

button.before:hover, button.next:hover{
  border: 3px solid #F16336;
  color: #F16336
}

button.before span, button.next span{
  padding: 10px 15px
}

ul li{
	list-style: none;
}
button.beforeMobile span, button.nextMobile span{
  padding: 6px 10px
}
button.beforeMobile:hover, button.nextMobile:hover{
  border: 1px solid #F16336;
  color: #F16336
}
button.beforeMobile, button.nextMobile{
  border: 1px solid black;
  border-radius: 50%;
}
.mobile{
  display: none;
}
.desktop{
  display: flex;
}
.sliderNganhBtn button{
    border-radius: 50%;
    padding: 2px 8px;
}
.sliderNganhBtn button:first-child{
  border: #003366 solid;
}
.sliderNganhBtn button:last-child{
  background: white;
}
.set-img-text p.text:hover{
  color: #F16336
}
@media screen and (max-width: 767px) {
  .has-border{
  border: unset;
}
.set-img-text p.text {
  padding: 0.5rem;
  cursor: pointer;
  
}
.mobile{
  display: flex;
}
.desktop{
  display: none;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
  button.before span, button.next span{
  padding: 4px 14px
}

}
/* .slides > .slide:first-child{
  width: 67px;
} */
/* .slide{
	width: 5%;
	overflow: hidden;
	transition: .5s  ease;
}


.title {
	position: relative;
	height: 100%;
}
 .title span {
	position: absolute;
	top: 50%;
	transform: rotate(270deg) translateX(50%);
	width: 100px;
	left: -15px;
 }

 .active {
	width: 80%;
 }

 .content {
	padding: 40px;
 }

 .active.slide .title {
	display: none;
 } */
/* .slide[data-v-432a0480]{
  width: 65.69px;
} */
</style>
