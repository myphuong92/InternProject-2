<template>
  <div class="flex flex-col gap-8 md:w-[48%] lg:w-[20%]" v-for="card in cards" :key="card">
    <div class="connect items-center hidden lg:flex">
        <span class="circle-orange"></span>
    </div>
    <div class="content flex flex-col items-start gap-3">
        <p class="date">{{ card.date }}</p>
        <p class="desc text-desc text-lg">{{ card.desc }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    cards: Array
})
</script>

<style scoped>
.content .date{
    font-size: 20px;
    color: #3399FF;
    font-weight: 700;
}
.content .desc{
    color: #526D88;
    font-size: 16px;
}
.circle-orange{
    height: 2rem;
    width: 2rem;
    background-color: #f16336;
    border-radius: 50%;
    display: inline-block;

}
</style>