<template>
    <section>
        <div class="flex flex-col p-[100px] gap-8">
            <p class="text-sub-heading text-[#003366] uppercase">PHÁT TRIỂN MẢNG SẢN XUẤT KINH DOANH SẢN PHẨM GỖ</p>
            <div class="grid grid-cols-3 gap-16 text-[#526D88]">
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus</p>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
            </div>
            <div class="donut-chart">
                <div class="grid grid-cols-2 divide-x-2 divide-black">
                    <!-- Product  -->
                    <div class="products flex flex-col gap-8">
                        <div class="title text-center text-lg font-semibold">
                            <p>Giá trị xuất khẩu 1 số mặt hàng chủ lực</p>
                        </div>
                        <div class="donutProducts">
                            <donutChart :data="dataProducts" :options="options"/>
                        </div>
                        <div class="grid grid-rows-5 grid-flow-col gap-y-5 gap-x-10">
                            <div class="stats flex gap-3" v-for="stat in statProduct" :key="stat">
                                <div class="circle-stat w-6 h-6 rounded-full" :class="stat.circle"></div>
                                <p>{{ stat.desc }}</p>
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
                        <div class="grid grid-cols-3 grid-flow-row gap-y-5 gap-x-10">
                            <div class="stats flex gap-3" v-for="stat in statCountry" :key="stat">
                                <div class="circle-stat w-6 h-6 rounded-full" :class="stat.circle"></div>
                                <p>{{ stat.desc }}</p>
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
        <div class="flex flex-col p-[100px] gap-8">
            <p class="text-sub-heading text-[#003366] uppercase">các sản phẩm gỗ chính của phú tài</p>
            <div class="grid grid-cols-2 gap-10">
                <div class="img grid grid-cols-2 gap-5">
                    <div class=""><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-1.png" alt=""></div>
                    <div><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-2.png" alt=""></div>
                    <div class="col-span-2"><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-3.png" alt=""></div>
                </div>
                <div class="flex flex-col gap-10 justify-center">
                    <p class="title text-4xl font-medium uppercase">ĐỒ GỖ NGOÀI TRỜI</p>
                    <p class="content text-[#526D88]">Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col gap-10 justify-center">
                    <p class="title text-4xl font-medium uppercase">ĐỒ GỖ TRONG NHÀ</p>
                    <p class="content text-[#526D88]">Lorem ipsum dolor sit amet consectetur. Lectus diam amet malesuada etiam. Ac auctor nulla elementum turpis. Donec dignissim sed elementum vivamus sagittis enim consectetur. Pellentesque dictumst porta nulla aliquam at integer adipiscing. Morbi elementum ipsum lacinia quam fermentum. Sollicitudin sed ac in sit pulvinar. Fermentum nibh feugiat nunc velit tellus. </p>
                </div>
                <div class="img grid grid-cols-2 gap-5">
                    <div class=""><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-4.png" alt=""></div>
                    <div><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-5.png" alt=""></div>
                    <div class="col-span-2"><img class="object-cover w-full h-full rounded-md" src="/src/assets/img/go-6.png" alt=""></div>
                </div>
                
            </div>
        </div>
    </section>
    <section>
        <div>
            <p class="text-sub-heading text-[#003366] uppercase">công suất hiện hữu</p>

        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue'

    import donutChart from "/src/components/donutChart.vue"
    import barChart from "/src/components/barChart.vue"

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
            yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'probability'
            }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
    }
</script>

<style scoped>
.bar-chart canvas{
    height: 300px;
}
</style>