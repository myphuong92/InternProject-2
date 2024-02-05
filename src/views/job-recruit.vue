<template>
  <main class="container md:pt[40px] lg:pt-[60px]">
    <div class=" p-[20px] md:p-[40px] lg:px-[100px] lg:pb-[70px]">
            <p class="text-heading text-[#003366] text-7xl uppercase">tuyển dụng</p>
        </div>
    <div class="grid grid-cols-1 gap-10">
        <!-- Search and location -->
        <div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-evenly">
            <div class="flex justify-evenly md:justify-between md:gap-8 items-center">
                <p style="font-family:'Big Shoulders Display', sans-serif;" class="text-2xl text-[#001933]">Tìm kiếm</p>
                <div class="search">
                    <input class="py-[10px] px-[5px] md:p-[10px] max-w-[300px] min-w-[300px]" type="text" size="35">
                    <span></span>
                </div>
            </div>
            <div class="search flex justify-evenly md:justify-between md:gap-8 items-center">
                <p style="font-family:'Big Shoulders Display', sans-serif;" class="text-2xl text-[#001933]">Địa điểm</p>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <!-- Jobs -->
        <div class="gird grid-cols-1 bg-white responsive-section divide-y-2">
            <!-- Column -->
            <div class="grid grid-cols-4 pb-8 text-lg md:text-xl font-bold">
                <p class="col-span-2">Chức Danh</p>
                <p>Địa Điểm</p>
                <p>Ngày đăng</p>
            </div>
            <jobDetail :jobs="jobData"/>
            <div class="flex justify-center pt-8">            
                <buttonComp class="" title="XEM THÊM" changeColor="darkblue"/>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue'
import jobDetail from '../components/jobDetail.vue'
import buttonComp from '../components/buttonComp.vue'
const jobData = ref([
    {name:"Finance Controller", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},
    {name:"Phó Phòng Kế Toán", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},
    {name:"Business Analysis – Product Owner (Junior, Senior)", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},
    {name:"Graphic Designers (Junior & Senior)", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},
    {name:"Python Backend Developer", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},
    {name:"Chuyên viên Tài chính doanh nghiệp", company:"Phú Tài", location:"Hồ Chí Minh", date:"10-01-2024"},

])
</script>

<style scoped>

div.search select{
    width: 300px;
    padding: 12px;
}
</style>