<template>
  <div class="grid grid-cols-1 gap-5" v-for="card in cards" :key="card">
            <div><img class="full-img h-full" :src="'/InternProject-2/assets/img/' + card.img" alt=""></div>

            <div class="content justify-center flex flex-col gap-4">
            <p class="uppercase text-sm md:text-base lg:text-sm text-[#003366]">{{ card.category }}</p>
            <p class="text-base md:text-xl hover:text-[#003366] cursor-pointer hover:font-semibold">{{ card.title }}</p>
            <p class="text-xs md:text-sm lg:text-xs">{{ card.date }}</p>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
        cards:Array
    })
</script>

<style>

</style>