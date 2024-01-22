<template>
  <div class="flex flex-col gap-6 text-white" v-for="card in cards" :key="card">
    <div class="flex flex-row gap-6">
        <p class="number">{{ card.id }}</p>
        <p class="text-desc">{{ card.title }}</p>
    </div>
    <div class="img flex flex-col gap-4 ">
        <img :src="card.img" alt="">
    </div>
  </div>
</template>

<script setup>
 const props = defineProps({
        cards: Array
    })
</script>

<style scoped>
p.number{
  font-size: 5rem;
  line-height: 1;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
}
p.text-desc{
  display: flex;
  align-items:flex-end;
}
div.img{
  margin-left: 6rem;
}
</style>