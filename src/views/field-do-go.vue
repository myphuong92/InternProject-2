<template>
    <section>
        <div class="flex flex-col responsive-section gap-8">
            <p class="text-sub-heading text-5xl text-[#003366] uppercase">PHÁT TRIỂN MẢNG SẢN XUẤT KINH DOANH SẢN PHẨM GỖ</p>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 text-[#526D88]">
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus</p>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
            </div>
            <div class="donut-chart">
                <div class="grid grid-cols-1 gap-16 md:gap-0 md:grid-cols-2 md:divide-x-2 md:divide-black">
                    <!-- Product  -->
                    <div class="products flex flex-col gap-8">
                        <div class="title text-center text-lg font-semibold">
                            <p>Giá trị xuất khẩu 1 số mặt hàng chủ lực</p>
                        </div>
                        <div class="donutProducts">
                            <donutChart :data="dataProducts" :options="options"/>
                        </div>
                        <div class="grid grid-cols-2 md:grid-rows-5 grid-flow-row md:grid-flow-col gap-y-8 gap-x-3 lg:gap-y-5 lg:gap-x-10">
                            <div class="stats grid grid-cols-5 gap-3" v-for="stat in statProduct" :key="stat">
                                <div class="circle-stat w-6 h-6 rounded-full" :class="stat.circle"></div>
                                <p class="col-span-4">{{ stat.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Countries -->
                    <div class="countries flex flex-col gap-8 pl-5">
                        <div class="title text-center text-lg font-semibold">
                            <p>Giá trị xuất khẩu 1 số mặt hàng chủ lực</p>
                        </div>
                        <div class="donutProducts">
                            <donutChart :data="dataCountries" :options="options"/>
                        </div>
                        <div class="grid grid-cols-3 grid-flow-row gap-y-12 gap-x-10">
                            <div class="stats grid grid-cols-5 gap-8" v-for="stat in statCountry" :key="stat">
                                <div class="circle-stat w-6 h-6 rounded-full" :class="stat.circle"></div>
                                <p class="col-span-4">{{ stat.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bar-chart">
                <barChart :data="dataBarChart" :options="optionsBar"/>
            </div>
        </div>
    </section>
    <section>
        <div class="flex flex-col responsive-section gap-10 md:gap-8">
            <p class="text-sub-heading text-5xl text-[#003366] uppercase">các sản phẩm gỗ chính của phú tài</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div class="img grid grid-cols-2 gap-5">
                    <div class=""><img class="full-img h-full rounded-md" src="/assets/img/go-1.png" alt=""></div>
                    <div><img class="full-img h-full rounded-md" src="/assets/img/go-2.png" alt=""></div>
                    <div class="col-span-2"><img class="full-img h-full rounded-md" src="/assets/img/go-3.png" alt=""></div>
                </div>
                <div class="flex flex-col gap-4 md:gap-10 justify-center">
                    <p class="title text-4xl font-medium uppercase">ĐỒ GỖ NGOÀI TRỜI</p>
                    <p class="content text-[#526D88]">Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div class="flex flex-col gap-4 md:gap-10 justify-center order-last md:order-first">
                    <p class="title text-4xl font-medium uppercase">ĐỒ GỖ TRONG NHÀ</p>
                    <p class="content text-[#526D88]">Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                </div>
                <div class="img grid grid-cols-2 gap-5">
                    <div class=""><img class="full-img h-full rounded-md" src="/assets/img/go-4.png" alt=""></div>
                    <div><img class="full-img h-full rounded-md" src="/assets/img/go-6.png" alt=""></div>
                    <div class="col-span-2"><img class="full-img h-full rounded-md" src="/assets/img/go-5.png" alt=""></div>
                </div>
                
            </div>
        </div>
    </section>
    <section>
        <div class="responsive-section flex flex-col gap-10">
            <p class="text-sub-heading text-5xl text-[#003366] uppercase">công suất hiện hữu</p>
            <div class="relative bg-[url('/assets/img/scott-webb.png')] lg:bg-none bg-no-repeat	bg-cover">
                <img class="hidden lg:block" src="/assets/img/scott-webb.png" alt="">
                <div class="bg-black lg:bg-transparent opacity-80 lg:opacity-100	p-10 lg:p-0 grid grid-cols-1 gap-10 lg:gap-5 rounded-lg">
                  <div class="flex flex-col gap-3 text-white lg:absolute lg:top-[115px] lg:left-16">
                    <p class="text-3xl font-medium">Nhà Máy Thắng lợi</p>
                    <cardTextIcon class="font-light" :cards="thangloi"/>
                    <p class="font-medium">Đang hoạt động tối đa công suất</p>
                </div>
                <div class="flex flex-col gap-3 text-white lg:absolute lg:top-[190px] lg:left-[380px]">
                    <p class="text-3xl font-medium">Nhà Máy Đồng Nai</p>
                    <cardTextIcon class="font-light" :cards="dongnai"/>
                    <p class="font-medium">Đang hoạt động tối đa công suất</p>
                </div>
                <div class="flex flex-col gap-3 text-white lg:absolute lg:bottom-[265px] lg:right-16">
                    <p class="text-3xl font-medium">Nhà Máy VINAG7</p>
                    <cardTextIcon class="font-light" :cards="vinag7"/>
                    <p class="font-medium">Đang hoạt động 70% công suất thiết kế</p>
                </div>
                </div>
                
                
            </div>
        </div>
    </section>
    <section>
        <div class="flex flex-col responsive-section gap-10">
            <p class="text-sub-heading text-5xl text-[#003366] uppercase">Công ty con ngành gỗ</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <cardBranch :cards="ctycon" />

            </div>
        </div>
    </section>
    <section>
        <div class="flex flex-col responsive-section gap-10">
            <p class="text-sub-heading text-5xl text-[#003366] uppercase">Công ty con ngành gỗ</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <cardBranch :cards="donvi" />

            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'
    import cardTextIcon from '../components/cardTextIcon.vue';
    import donutChart from "../components/donutChart.vue"
    import barChart from "../components/barChart.vue"
    import cardBranch from "../components/cardBranch.vue";

    
    // Product
    const dataProducts = ref({
        // labels: ['Điện thoại và các loại linh kiện', 'Hàng dệt, may', 'Điện tử, máy tính và linh kiện', 'Giày dép','Máy móc, thiết bị, dụng cụ và phụ tùng khác','Hàng hải sản','Gỗ và sản phẩm gỗ','Dầu thô'],
        datasets: [
        {
            backgroundColor: ['#67C587', '#E5F1E8', '#C9EAD4', '#A9DEBA','#88D1A1', '#59AA76', '#003366', '#3E7553'],
            data: ['20', '15', '13', '12', '10','8','5', '30']
        }
    ]})
    const options = {
        responsive: true,
        maintainAspectRatio: false
    }
    
    const statProduct= ref([
        {circle:'bg-[#67C587]', desc:'Điện thoại và các loại linh kiện'},
        {circle:'bg-[#E5F1E8]', desc:'Hàng dệt, may'},
        {circle:'bg-[#C9EAD4]', desc:'Điện tử, máy tính và linh kiện'},
        {circle:'bg-[#A9DEBA]', desc:'Giày dép'},
        {circle:'bg-[#88D1A1]', desc:'Máy móc, thiết bị, dụng cụ và phụ tùng khác'},
        {circle:'bg-[#59AA76]', desc:'Hàng hải sản'},
        {circle:'bg-[#003366]', desc:'Gỗ và sản phẩm gỗ'},
        {circle:'bg-[#3E7553]', desc:'Dầu thô'},
        {circle:'bg-[#DBDBDB]', desc:'Khác'},

    ])
    // Countries
    const dataCountries = ref({
        // labels: ['Mỹ', 'Trung Quốc', 'Nhật Bản', 'Hàn Quốc','Anh','Úc','Canada','Đức', 'Pháp', 'Hà Lan', 'Đài Loan', 'Án Độ', 'Khác'],
        datasets: [
        {
            backgroundColor: ['#5E3FBE', '#F4F0FD', '#E5DAFB', '#CBB6F8','#A88DEB', '#886BD8', '#472EA3', '#341F88', '#23146E', '#28169A', '#5E3FBE', '#E5DAFB'],
            data: ['40', '15', '15', '13', '8','3','3', '3', '3', '2', '2', '8']
        }
    ]})
    const statCountry= ref([
        {circle:'bg-[#5E3FBE]', desc:'Mỹ'},
        {circle:'bg-[#F4F0FD]', desc:'Trung Quốc'},
        {circle:'bg-[#E5DAFB]', desc:'Nhật Bản'},
        {circle:'bg-[#CBB6F8]', desc:'Hàn Quốc'},
        {circle:'bg-[#A88DEB]', desc:'Anh'},
        {circle:'bg-[#886BD8]', desc:'Úc'},
        {circle:'bg-[#472EA3]', desc:'Canada'},
        {circle:'bg-[#341F88]', desc:'Đức'},
        {circle:'bg-[#23146E]', desc:'Pháp'},
        {circle:'bg-[#28169A]', desc:'Hà Lan'},
        {circle:'bg-[#5E3FBE]', desc:'Đài Loan'},
        {circle:'bg-[#E5DAFB]', desc:'Án Độ'},
        {circle:'bg-[#DBDBDB]', desc:'Khác'},

    ])
    // Bar chart
    const dataBarChart = ref({
        labels: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ],
        // labels: ['Mỹ', 'Trung Quốc', 'Nhật Bản', 'Hàn Quốc','Anh','Úc','Canada','Đức', 'Pháp', 'Hà Lan', 'Đài Loan', 'Án Độ', 'Khác'],
        datasets: [
        {

            barThickness: 30,
            backgroundColor: ['#0263FF', '#FF7723', '#8E30FF', '#126492','#B45B70', '#EB777C', '#87229D', '#713229', '#411265'],
            data: ['4.7', '5.6', '6.2', '6.9', '7','7.5','8.1', '8.8', '9.5']
        }
    ]})
    const optionsBar = {
        
        plugins: {
            legend: {
                display: false
            },
            title:{
                display:true,
                text:"2012 - 2020F Kim Ngạch Xuất Khẩu Gỗ Và Sản Phẩm Gỗ Việt nam",
                font:{
                    size: 18,
                    
                }
            }
        },
        scales:{
            y:{
                min:0,
                max:12,
                ticks:{
                    stepSize: 3, // Bước giữa các tick
                }
            },
            
        },
        responsive: true,
        maintainAspectRatio: false
    }
    const thangloi = ref([
  {
    rows: [
      {
        items: [
          { icon: "stacks", desc: "91.000 m2" },
        ],
      },
      {
        items: [
          {
            icon: "event_seat",
            desc: "Bàn ghế ngoài trời",
          },
        ],
      },
      { items: [{ icon: "bolt", desc: "110 containers/tháng" }] },
    ],
  },
]);
const dongnai = ref([
  {
    rows: [
      {
        items: [
          { icon: "stacks", desc: "24.000 m2" },
        ],
      },
      {
        items: [
          {
            icon: "event_seat",
            desc: "Bàn, ghế, giường, tủ các loại",
          },
        ],
      },
      { items: [{ icon: "bolt", desc: "30 containers/tháng" }] },
    ],
  },
]);
const vinag7 = ref([
  {
    rows: [
      {
        items: [
          { icon: "stacks", desc: "65.000 m2" },
        ],
      },
      {
        items: [
          {
            icon: "event_seat",
            desc: "Gỗ nội thất",
          },
        ],
      },
      { items: [{ icon: "bolt", desc: "80 containers/tháng" }] },
    ],
  },
]);
// CÔNG TY CON
const ctycon = ref([
  {
    img: "/InternProject-2/assets/img/ctycon-1.png",
    title: "CÔNG TY TNHH MTV GỖ PHÚ TÀI BÌNH ĐỊNH",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2/assets/img/ctycon-2.png",
    title: "CÔNG TY CỔ PHẦN VINA G7",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2/assets/img/ctycon-3.png",
    title: "CÔNG TY TNHH MTV PHÚ TÀI ĐỒNG NAI",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
]);
const donvi = ref([
  {
    img: "/InternProject-2/assets/img/donvi-1.png",
    title: "XÍ NGHIỆP THẮNG LỢI",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
  {
    img: "/InternProject-2/assets/img/donvi-2.png",
    title: "CHI NHÀNH THÀNH PHỐ HỒ CHÍ MINH",
    content:
      "Lorem ipsum dolor sit amet consectetur. Neque vestibulum mauris aliquam enim nulla at orci. Turpis sollicitudin elementum in donec.",
  },
]);
</script>

<style scoped>
.bar-chart canvas{
    height: 300px;
}

</style>