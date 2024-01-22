<template>
    <div class=" bg-[#003366] pl-5" v-for="card in cards" :key="card">
        <div class="flex flex-col gap-4 bg-white h-full">
            <div class="card-img">
                <img :src="card.img" alt="">
            </div>
            <div class="card-content flex flex-col gap-3 px-5 pb-5 justify-between h-[10rem]">
                <div class="flex flex-col gap-3">
                    <p class="hover:text-[#F16336] cursor-pointer  line-clamp-3">{{ card.title }}</p>
                    <p>{{ card.date }}</p>
                </div>
                <div class="w-[40%] bg-[#003366] text-white">
                    <buttonComp title="Xem thêm" :icon="iconArrow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import buttonComp from "./buttonComp.vue"
const iconArrow = "arrow_forward"
const props = defineProps({
        cards:Array
    })</script>

<style scoped>
    .card-img{
        height: 28rem;
    }
    .card-img img{
        height: 100%;
        object-fit: cover;
    }
</style>