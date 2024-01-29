<template>
  <div class="flex flex-col gap-3">
    <div v-if="title" class="title">
        <p class="uppercase">{{ title }}</p>
    </div>
    <div class="flex flex-col content gap-3">
        <div :class="[item.icon ? 'flex gap-3': '']" v-for="item in items" :key="item">
            <div v-if="item.icon" class="icon"><span class="material-symbols-outlined">{{ item.icon }}</span></div>
            <a  v-if="item.link" :href="item.link" >
                <p class="font-light hover:font-semibold" >{{ item.content }}</p>
            </a>
            <p v-else>{{ item.content }}</p>
        </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        items: Array
    })
</script >

<style scoped>
.title p{
    font-family: 'Big Shoulders Display', sans-serif;
}
.content p{
    font-family: 'Inter', sans-serif;
}
</style>