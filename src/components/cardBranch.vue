<template>
  <div class="flex flex-col gap-4" v-for="card in cards" :key="card">
    <div class="img">
      <img class="full-img" :src="card.img" alt="" />
    </div>
    <div class="content">
      <p class="title text-desc text-lg hover:font-bold cursor-pointer">
        {{ card.title }}
      </p>
      <p class="content">{{ card.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cards: Array,
});
</script>

<style scoped>
.title {
  color: #003366;
}
.content {
  font-size: 12px;
  color: #656565;
  line-height: 20px;
}
@media screen and (max-width: 767px) {
  .title{
    font-size: 14px;
  }
 }
 @media (min-width: 768px) and (max-width: 1025px) {
  
  
  
 }
</style>
