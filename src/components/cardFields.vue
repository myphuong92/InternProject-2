<template>
  <div class="flex flex-col gap-6 text-white" v-for="card in cards" :key="card">
    <div class="flex flex-row gap-6 items-end">
        <p class="number">{{ card.id }}</p>
        <p class="text-desc text-lg">{{ card.title }}</p>
    </div>
    <div class="img flex flex-col gap-4 ml-0 md:ml-[6rem]">
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
p.text-desc text-lg{
  display: flex;
  align-items:flex-end;
}

</style>