<template>
  <main class="container">
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
      </div>
    </section>
    <section>
      <div class="relative bg-[#CCE6FF]">
        <div class="flex flex-col md:flex-row justify-between responsive-section md:h-[120rem] gap-6 md:gap-0">
          <p class="md:w-1/2 text-heading text-7xl text-[#F16336] uppercase">GIỚI THIỆU</p>
          <p class="md:w-1/2 text-desc text-lg text-[#003366]">
            Tiền thân của Công ty cổ phần Phú Tài (Phu Tai SJC) là Công ty sản
            xuất vật liệu xây dựng Phú Tài gọi tắt là Công ty Phú Tài (Quyết
            định số: 124/QĐ-QK). Trên cơ sở hợp nhất 03 đơn vị: Xí nghiệp 380;
            Xí nghiệp 224; Xí nghiệp sản xuất vật liệu xây dựng An Trường. Đến
            năm 2004, Bộ Trưởng Bộ Quốc phòng quyết định chuyển đổi Công ty Phú
            Tài thuộc Quân khu 5 thành Công ty cổ phần phú Tài. Đầu tháng
            1/2005, Công ty cổ phần Phú Tài chính thức đi vào hoạt động theo mô
            hình công ty cổ phần tập trung đầu tư vào lĩnh vực chế biến gỗ và
            sản xuất đá ốp lát. Đến nay công ty đã sở hữu 11 chi nhánh bao gồm
            văn phòng đại diện tại TP Hồ Chí Minh và nhà máy chế biến đá, gỗ tại
            khắp các tỉnh thành và 10 công ty thành viên trực thuộc tổng công
            ty.
          </p>
        </div>
      </div>

      <div class="w-full flex justify-end">
        <div
          class="grid grid-cols-1 bg-[rgb(0,38,77)] p-5 right-0 top-[25%] md:p-[4rem] md:grid-cols-2 md:w-[87%] relative md:mt-[-80rem] lg:mt-[-91rem]"
        >
          <div class="grid grid-rows-1 md:grid-rows-2">
            <div class="flex flex-col gap-5 text-white mb-10 md:mb-0 md:w-[80%]">
              <p class="text-[2rem]">
                4 lĩnh vực hoạt động trọng tâm của Phu Tai SJC
              </p>
              <p class="font-light">
                Với mong muốn đem đến cho thị trường những sản phẩm tiêu chuẩn
                quốc tế với tính thẩm mỹ cao và độ bền cùng thời gian, Công ty
                Cổ phần Phú Tài (Phú Tài JSC) luôn tiên phong và không ngừng đầu
                tư phát triển những sản phẩm mới, xây dựng thương hiệu, mở rộng
                nhà máy sản xuất, mạng lưới phân phối và quan trọng nhất là
                nguồn nhân lực để vươn đến vị thế dẫn đầu thị trường trong từng
                lĩnh vực
              </p>
            </div>
            <div class="text-[#3399FF] hidden md:flex whitespace-nowrap">
              <p class="vertical-text">Phu Tai JSC</p>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <cardAboutUs :cards="cardField" />
          </div>
        </div>
      </div>
      
    </section>
    <section>
      <div class="responsive-section mt-8">
        <p
          class="uppercase text-title text-4xl text-[#003366] mb-10 md:mb-20"
          style="
            font-size: 60px;
            font-family: 'Big Shoulders Display', sans-serif;
          "
        >
          lịch sử công ty
        </p>
        <!-- <div class="history flex flex-row flex-wrap gap-5 lg:gap-20">
          <cardHistory :cards="timeline" />
        </div> -->
        <div class="history grid md:grid-cols-3 lg:grid-cols-5">
          <cardHistory :cards="timeline" />
        </div>
      </div>
    </section>
    <section>
      <div class="responsive-section bg-white">
        <p
          class="uppercase text-title text-4xl text-[#003366] mb-20"
          style="
            font-size: 60px;
            font-family: 'Big Shoulders Display', sans-serif;
          "
        >
          Chi nhánh công ty
        </p>
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="img">
            <img class="full-img" src="/assets/img/map.png" alt="" />
          </div>
          <div class="flex flex-col gap-10">
            <p class="text-[#F16336] text-title text-4xl" style="font-weight: 500">
              Bình Định
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:divide-y-0 md:divide-x-2 divide-cyan-950">
              <div class="flex flex-col gap-12">
                <cardTextIcon changeColor="blue" class="" :cards="xiNghiep" />
                <cardTextIcon changeColor="blue" :cards="xiNghiep" />
              </div>
              <!-- <div class="divider"></div> -->
              <div class="flex flex-col gap-12 md:pl-5">
                <cardTextIcon changeColor="blue" :cards="nhaMay" />
                <cardTextIcon changeColor="blue" :cards="nhaMay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="responsive-section">
        <div class="ctyTv flex flex-col gap-10">
          <p
            class="uppercase text-title text-4xl text-[#003366]"
            style="
              
              font-size: 60px;         
              font-family: 'Big Shoulders Display', sans-serif;
            "
          >
            Công ty thành viên
          </p>
          <div class="relative bg-[#001933]">
            <swiper :modules="modules"        
            :navigation="{ nextEl: '.btn-slider.next', prevEl: '.btn-slider.prev' }">
            <swiper-slide>
              <div class="w-full h-full">
                <div class="flex flex-col lg:flex-row w-full h-full">
                <div class="w-full lg:w-[70%]">
                  <div 
                    class="img w-full">
                  <div><img src="/assets/img/branchCompany.png" alt=""></div>
                </div>
              </div>
              <div class="relative w-full lg:w-1/2">
                <div class="content h-full firstLayer lg:absolute bg-[#001933] w-full">
                  <div class="flex flex-col text-white gap-4 p-5 lg:px-12 lg:pt-6 lg:pb-16 h-full">
                    <p class="uppercase font-medium text-2xl leading-8">
                      CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG PHÚ YÊN
                    </p>
                    <div class="desc font-light flex flex-col gap-6">
                      <p>Khai thác chế biến đá ốp lát, đá xây dựng, cát xây</p>
                      <cardTextIcon :cards="ctyThanhVien" />
                      <buttonComp
                        title="Xem chi tiết"
                        changeColor="white"
                        class="rounded-none font-medium lg:w-1/2"
                      />
                    </div>
                    
                  </div>
                </div>
                <div class="secondLayer hidden lg:block h-full w-full bg-[#022040]"></div>
                <div class="thirdLayer  hidden lg:block h-full w-full bg-[#043F7C]"></div>
              </div>
            </div>
              </div>
        
            </swiper-slide>
            <swiper-slide>
              <div class="w-full h-full">
                <div class="flex flex-col lg:flex-row w-full h-full">
                <div class="w-full lg:w-[70%]">
                  <div 
                    class="img w-full">
                  <div><img src="/assets/img/branchCompany.png" alt=""></div>
                </div>
              </div>
              <div class="relative w-full lg:w-1/2">
                <div class="content h-full firstLayer lg:absolute bg-[#001933] w-full">
                  <div class="flex flex-col text-white gap-4 p-5 lg:px-12 lg:pt-6 h-full">
                    <p class="uppercase font-medium text-2xl leading-8">
                      CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG PHÚ YÊN
                    </p>
                    <div class="desc font-light flex flex-col gap-6">
                      <p>Khai thác chế biến đá ốp lát, đá xây dựng, cát xây</p>
                      <cardTextIcon :cards="ctyThanhVien" />
                      <buttonComp
                        title="Xem chi tiết"
                        changeColor="white"
                        class="rounded-none font-medium lg:w-1/2"
                      />
                    </div>
                    
                  </div>
                </div>
                <div class="secondLayer hidden lg:block h-full w-full bg-[#022040]"></div>
                <div class="thirdLayer  hidden lg:block h-full w-full bg-[#043F7C]"></div>
              </div>
            </div>
              </div>
                
            </swiper-slide>
            <swiper-slide>
              <div class="w-full h-full">
                <div class="flex flex-col lg:flex-row w-full h-full">
                <div class="w-full lg:w-[70%]">
                  <div 
                    class="img w-full">
                  <div><img src="/assets/img/branchCompany.png" alt=""></div>
                </div>
              </div>
              <div class="relative w-full lg:w-1/2">
                <div class="content h-full firstLayer lg:absolute bg-[#001933] w-full">
                  <div class="flex flex-col text-white gap-4 p-5 lg:px-12 lg:pt-6 h-full">
                    <p class="uppercase font-medium text-2xl leading-8">
                      CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG PHÚ YÊN
                    </p>
                    <div class="desc font-light flex flex-col gap-6">
                      <p>Khai thác chế biến đá ốp lát, đá xây dựng, cát xây</p>
                      <cardTextIcon :cards="ctyThanhVien" />
                      <buttonComp
                        title="Xem chi tiết"
                        changeColor="white"
                        class="rounded-none font-medium lg:w-1/2"
                      />
                    </div>
                    
                  </div>
                </div>
                <div class="secondLayer hidden lg:block h-full w-full bg-[#022040]"></div>
                <div class="thirdLayer  hidden lg:block h-full w-full bg-[#043F7C]"></div>
              </div>
            </div>
              </div>
                
            </swiper-slide>
            <swiper-slide>
              <div class="w-full h-full">
                <div class="flex flex-col lg:flex-row w-full h-full">
                <div class="w-full lg:w-[70%]">
                  <div 
                    class="img w-full">
                  <div><img src="/assets/img/branchCompany.png" alt=""></div>
                </div>
              </div>
              <div class="relative w-full lg:w-1/2">
                <div class="content h-full firstLayer lg:absolute bg-[#001933] w-full">
                  <div class="flex flex-col text-white gap-4 p-5 lg:px-12 lg:pt-6 h-full">
                    <p class="uppercase font-medium text-2xl leading-8">
                      CÔNG TY CỔ PHẦN VẬT LIỆU XÂY DỰNG PHÚ YÊN
                    </p>
                    <div class="desc font-light flex flex-col gap-6">
                      <p>Khai thác chế biến đá ốp lát, đá xây dựng, cát xây</p>
                      <cardTextIcon :cards="ctyThanhVien" />
                      <buttonComp
                        title="Xem chi tiết"
                        changeColor="white"
                        class="rounded-none font-medium lg:w-1/2"
                      />
                    </div>
                    
                  </div>
                </div>
                <div class="secondLayer hidden lg:block h-full w-full bg-[#022040]"></div>
                <div class="thirdLayer  hidden lg:block h-full w-full bg-[#043F7C]"></div>
              </div>
            </div>
              </div>
                
            </swiper-slide>
            
          </swiper>
          <div class="BtnSlider mb-5 lg:mb-0 justify-center lg:absolute flex flex-row gap-3 mt-5">
                    <button class="btn-slider prev">
                      <span class="material-symbols-outlined"
                        >chevron_left</span
                      >
                    </button>
                    <button class="btn-slider next">
                      <span class="material-symbols-outlined"
                        >chevron_right</span
                      >
                    </button>
                  </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
    <section>
      <div class="target grid grid-cols-1 lg:grid-cols-2 pt-[100px]">
        <div class="lg:col-span-2 employee relative">
          <div class="content bg-[#003366] p-5 md:p-10 lg:absolute lg:w-[45%] lg:py-12 lg:px-32">
            <p
              class="text-heading text-7xl mb-4 uppercase"
              style="
                color: white;
                font-family: 'Big Shoulders Display', sans-serif;
              "
            >
              ĐỘI NGŨ NHÂN VIÊN
            </p>
            <p class="text-desc text-lg" style="color: white">
              Lorem ipsum dolor sit amet consectetur. Dolor interdum ipsum donec
              aliquet rhoncus pellentesque scelerisque. Habitant turpis commodo
              facilisis tellus at facilisis vitae et. Sem commodo adipiscing
              vestibulum massa sit porta. Quam rhoncus a risus mauris amet
              faucibus.
            </p>
          </div>
          <img
            class="w-full"
            src="/assets/img/business-meeting.png"
            alt=""
          />
        </div>
        <div class="col-span-1 relative">
          <div class="content top-[17%] md:top-[30%] md:left-[8%] md:w-[80%] lg:top-[50%] lg:left-[50%] 	lg:translate-x-[-50%] lg:translate-y-[-50%]	lg:w-[60%] absolute">
            <p
              class="text-heading text-7xl mb-4 uppercase"
              style="
                color: white;
                font-family: 'Big Shoulders Display', sans-serif;
              "
            >
              TẦM NHÌN
            </p>
            <p class="text-desc text-lg" style="color: white">
              Lorem ipsum dolor sit amet consectetur. Dolor interdum ipsum donec
              aliquet rhoncus pellentesque scelerisque. Habitant turpis commodo
              facilisis tellus at facilisis vitae et. Sem commodo adipiscing
              vestibulum massa sit porta. Quam rhoncus a risus mauris amet
              faucibus.
            </p>
          </div>
          <img class="w-full" src="/assets/img/vision.png" alt="" />
          <div class="blue-shade"></div>
        </div>
        <div class="col-span-1 relative">
          <div class="content absolute top-[17%] md:top-[30%] md:left-[8%] md:w-[80%] lg:top-[50%] lg:left-[50%] 	lg:translate-x-[-50%] lg:translate-y-[-50%]	lg:w-[60%] ">
            <p
              class="text-heading text-7xl mb-4 uppercase"
              style="
                color: white;
                font-family: 'Big Shoulders Display', sans-serif;
              "
            >
              GIÁ TRỊ CỐT LÕI
            </p>
            <p class="text-desc text-lg" style="color: white">
              Lorem ipsum dolor sit amet consectetur. Dolor interdum ipsum donec
              aliquet rhoncus pellentesque scelerisque. Habitant turpis commodo
              facilisis tellus at facilisis vitae et. Sem commodo adipiscing
              vestibulum massa sit porta. Quam rhoncus a risus mauris amet
              faucibus.
            </p>
          </div>
          <img class="w-full" src="/assets/img/core-value.png" alt="" />
          <div class="dark-blue-shade"></div>
        </div>
        <div></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import cardAboutUs from "../components/cardFields.vue";
import cardHistory from "../components/cardHistory.vue";
import cardTextIcon from "../components/cardTextIcon.vue";
import buttonComp from "../components/buttonComp.vue";
import setCardBranch from "../components/cardBranch.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/vue';

import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // Import Swiper styles
  import 'swiper/css';
let id = ref(1);
const modules = [Navigation, Pagination, Scrollbar, A11y];

const cardField = ref([
  {
    id: "0" + id.value++,
    title: "Khai thác chế biến đá ốp lát",
    img: "assets/img/card-field-1.png",
  },
  {
    id: "0" + id.value++,
    title: "Sản xuất kinh doanh đồ gỗ nội thất và ngoài trời",
    img: "assets/img/card-field-2.png",
  },
  {
    id: "0" + id.value++,
    title: "Phân phối xe ô tô Toyota",
    img: "assets/img/card-field-3.png",
  },
  {
    id: "0" + id.value++,
    title: "Kinh doanh bất động sản",
    img: "assets/img/card-field-4.png",
  },
]);
const timeline = ref([
  {
    date: "10/12/1994",
    desc: "Tư lệnh Quân khu 5 quyết định thành lập Công ty sản xuất vật liệu xây dựng Phú Tài gọi tắt là Công ty Phú Tài (Quyết định số: 124/QĐ-QK). Trên cơ sở hợp nhất 03 đơn vị: Xí nghiệp 380; Xí nghiệp 224; Xí nghiệp sản xuất vật liệu xây dựng An Trường.",
  },
  {
    date: "1996",
    desc: "Bộ Quốc phòng chính thức thành lập Công ty Phú Tài thuộc Bộ Tư lệnh Quân khu (quyết định số: 482/QĐ-QP) . Trên cơ sở hợp nhất các doanh nghiệp và đơn vị sản xuất: Xí nghiệp 380; Xí nghiệp 224; Xí nghiệp sản xuất vật liệu xây dựng An Trường; Đội xe; Văn phòng đại diện Đà Nẵng; Văn phòng đại diện Thành phố Hồ Chí Minh.",
  },
  {
    date: "2000",
    desc: "Tư lệnh Quân khu 5 đã điều chỉnh cơ cấu tổ chức biên chế Công ty Phú Tài (Quyết định 125/QĐ-QK),bao gồm cơ quan công ty và 08 đơn vị thành viên: Xí nghiệp 380, Xí nghiệp 224, Xí nghiệp 991, Xí nghiệp Thắng Lợi, Đội sản xuất đá xây dựng và trồng công nông nghiệp, Đội vận tải và sửa chữa cơ khí, Văn phòng đại diện tại Thành phố Hồ Chí Minh, Chi nhánh tại Thanh Hóa.",
  },
  {
    date: "2004",
    desc: "Bộ Trưởng Bộ Quốc phòng quyết định chuyển đổi Công ty Phú Tài thuộc Quân khu 5 thành Công ty cổ phần phú Tài (Quyết định số 150/2004/QĐ-BQP). Đầu tư thành lập Nhà máy chế biến gỗ - Chi nhánh Công ty tại tỉnh Đồng Nai. Thành lập Đội sản xuất đá Định Bình",
  },
  {
    date: "2005",
    desc: "Bộ Trưởng Bộ Quốc phòng quyết định Công ty cổ phần Phú Tài chính thức đi vào hoạt động theo mô hình công ty cổ phần kể từ ngày 01 tháng 01 năm 2005 (Quyết định số 150/2004/QĐ-BQP ). Công ty cổ phần Phú Tài bao gồm có cơ quan công ty và 06 đơn vị thành viên: Xí nghiệp 380, Xí nghiệp toyota Đà Nẵng; Xí nghiệp Thắng Lợi; Chi nhánh Công ty tại Đồng Nai ;Đội sản xuất đá xây dựng và trồng công nông nghiệp Nhơn Hòa; Văn phòng đại diện tại Thành phố Hồ Chí Minh. Đầu tư xây dựng Nhà máy chế biến đá ốp lát tại Quy Nhơn. Đầu tư xây dựng Tòa nhà Văn phòng làm việc công ty cổ phần Phú Tài.",
  },
  
  
  
  
  
  {
    date: "2006",
    desc: "Đầu tư thành lập Chi nhánh công ty cổ phần Phú Tài tại tỉnh Gia lai.",
  },
  {
    date: "2007",
    desc: "Đầu tư xây dựng Chi nhánh Công ty cổ phần Phú Tài – Nhà máy chế biến đá Bazal, granite tại tỉnh Đăk Nông. Đầu tư xây dựng di dời Xí nghiệp Thắng Lợi-Chi nhánh Công ty cổ phần Phú Tài. Đầu tư thành lập Chi nhánh Quy Nhơn-Xí nghiệp Toyota Đà Nẵng-Công ty cổ phần Phú Tài. Đầu tư nhận chuyển nhượng cổ phần chi phối Công ty cổ phần vật liệu xây dựng Phú Yên.",
  },
  {
    date: "2008",
    desc: "Đầu tư xây dựng Chi nhánh Công ty cổ phần Phú Tài – Nhà máy chế biến đá granite tại tỉnh Khánh Hòa.",
  },
  {
    date: "2012",
    desc: "Đầu tư Mở rộng Xí nghiệp Toyota Đà Nẵng-Công ty cổ phần Phú Tài.",
  },
  {
    date: "2013",
    desc: "Đầu tư nhận chuyển nhượng 100% vốn điều lệ của Công ty TNHH MTV khoáng sản Tuấn Đạt.",
  },
  
  
  
  
  {
    date: "2014",
    desc: "Đầu tư Mở rộng Nhà máy chế biến gỗ Xí nghiệp Thắng Lợi-Công ty cổ phần Phú Tài.",
  },
  {
    date: "2015",
    desc: "Đầu tư thành lập Công ty cổ phần đá Universal. Đầu tư thành lập Nhà máy chế biến đá ốp lát tại tỉnh Đồng Nai - Chi nhánh Công ty cổ phần Phú Tài .",
  },
  {
    date: "2016",
    desc: "Đầu tư thành lập Công ty cổ phần đá Universal. Đầu tư thành lập Nhà máy chế biến đá ốp lát tại tỉnh Đồng Nai - Chi nhánh Công ty cổ phần Phú Tài. Đầu tư thành lập Nhà máy chế biến đá ốp lát tại tỉnh Hưng Yên - Chi nhánh Công ty cổ phần Phú Tài.",
  },
  {
    date: "2017",
    desc: "Đầu tư thành lập Nhà máy chế biến gỗ Phù Cát- Chi nhánh Công ty cổ phần Phú Tài. Đầu tư nhận chuyển nhượng đất và tài sản trên đất của Công ty cổ phần VRG đá Bình Định. Đầu tư thành lập Nhà máy chế biến đá ốp lát Diên Tân- Chi nhánh Công ty cổ phần Phú Tài. Thực hiện chuyển đổi 01 chi nhánh sang hình thức công ty con do công ty mẹ sở hữu 100% vốn điều lệ: Công ty TNHH MTV Phú Tài Đồng Nai. Mua lại 70% phần vốn của Công ty sản xuất đá Granite - TNHH Granida.",
  },
  {
    date: "2018",
    desc: "Thành lập công ty TNHH MTV Bất Động Sản Phú Tài. Nhận chuyển nhượng vốn góp do công ty TNHH đá Granite Thành Châu Phú Yên ( tỉ lệ 100% vốn điều lệ ). Thành lập Công ty Cổ phần Đá Phú Tài Ninh Thuận Thành lập chi nhánh công ty cổ phần Phú Tài - Xí nghiệp khai thác đá Khánh Hòa. Thành lập chi nhánh công ty cổ phần Phú Tài - Xí nghiệp khai thác đá Bình Định. Thành lập chi nhánh công ty cổ phần Phú Tài - Nhà máy chế biến đá Long Mỹ. Thành lập Công ty TNHH MTV Đá thạch anh cao cấp Phú Tài",
  },
]);
const cardBranch = ref([
  // {img:"/src/assets/img"}
]);
// Theo như trong giao diện thì có rows, và mỗi row sẽ có nhiều item
const xiNghiep = ref([
  {
    title: "XÍ NGHIỆP 380",
    rows: [
      {
        items: [
          { icon: "apartment", desc: "Sản xuất, kinh doanh các sản phẩm đá" },
        ],
      },
      {
        items: [
          {
            icon: "location_on",
            desc: "Khu vực 5, đường Trần Quang Diệu, Quy Nhơn, Bình Định",
          },
        ],
      },
      { items: [{ icon: "mail", desc: "info@phutai380.com" }] },
      {
        items: [
          { icon: "call", desc: "(0256) 3741 699" },
          { icon: "fax", desc: "(0256) 3841 301" },
        ],
      },
    ],
  },
]);
const nhaMay = ref([
  {
    title: "NHÀ MÁY CHẾ BIẾN ĐÁ ỐP LÁT",
    rows: [
      {
        items: [
          { icon: "apartment", desc: "Sản xuất, kinh doanh các sản phẩm đá" },
        ],
      },
      {
        items: [
          {
            icon: "location_on",
            desc: "Khu vực 5, đường Trần Quang Diệu, Quy Nhơn, Bình Định",
          },
        ],
      },
      { items: [{ icon: "mail", desc: "info@phutai380.com" }] },
      {
        items: [
          { icon: "call", desc: "(0256) 3741 699" },
          { icon: "fax", desc: "(0256) 3841 301" },
        ],
      },
    ],
  },
]);
const ctyThanhVien = ref([
  {
    rows: [
      {
        items: [
          {
            icon: "location_on",
            desc: "Lô A7, A8, A17, A18 khu công nghiệp An Phú, xã An Phú, thành phố Tuy Hòa, tỉnh Phú yên.",
          },
        ],
      },
      { items: [{ icon: "call", desc: "Phone: (0257) 3846462" }] },
      { items: [{ icon: "fax", desc: "Fax: (0257) 3846465" }] },
      { items: [{ icon: "mail", desc: "Email: phuyenfactory@phutai.com.vn" }] },
    ],
  },
]);
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-lr;
  font-size: 9rem;
  text-transform: uppercase;
  opacity: 0.5;
  transform: rotate(180deg);
}
.divider {
  border-left: 3px solid #00264d;
  height: 70%;
}
.btn-slider {
  background-color: white;
  padding: 8px 10px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ctyTv .img img {
  height: 100%;
  object-fit: cover;
}
.firstLayer {
  top: 0;
  left: -10%;
  z-index: 2;
}
.secondLayer {
  position: absolute;
  z-index: 1;
  top: 0;
  left: -5%;
}
.thirdLayer {
  position: absolute;
  top: 0;
  z-index: 0;
}
.blue-shade {
  background-color: #003366;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  opacity: 0.5;
}
.dark-blue-shade {
  background-color: #001122;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  opacity: 0.7;
}
.target .col-span-1 .content {
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; */
  text-align: center;
  z-index: 1;
}
.target .employee .content {
  top: -8rem;
  left: 0;
}
.swiper{
  margin-left:0%;
  margin-right: 0;
}
.BtnSlider{
  
  z-index: 20;
  right: 34%;
  bottom: 4%;
}
</style>
