<template>
    <div class="w-[30%] bg-[#003366]" v-for="card in cards" :key="card">
        <div class="flex flex-col gap-4 bg-white w-full">
            <div class="card-img">
                <img class="object-cover" :src="card.img" alt="">
            </div>
            <div class="card-content flex flex-col gap-3 px-5">
                <div class="flex flex-col gap-3">
                    <p class="hover:text-[#F16336] cursor-pointer">{{ card.title }}</p>
                    <p>{{ card.date }}</p>
                </div>
                <div class="w-1/2 bg-[#003366] text-white">
                    <buttonComp :icon="iconArrow"/>
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

</style>