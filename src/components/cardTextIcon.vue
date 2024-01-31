<template>
    <!-- Theo như trong giao diện thì có rows, và mỗi row sẽ có nhiều item -->
    <div>
        <div class="flex flex-col gap-8" v-for="card in cards" :key="card">
        <div v-if="card.title">
            <p class="text-[20px] font-medium uppercase" :class="[changeColor === 'blue' ? 'text-[#003366]' : '']">{{ card.title }}</p>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex gap-4" v-for="row in card.rows" :key="row">
                <div class="flex gap-2" v-for="item in row.items" :key="item">
                    <span class="material-symbols-outlined" :class="[changeColor === 'blue' ? 'text-[#003366]' : '']">{{ item.icon }}</span>
                    <p class="leading-5	">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  
</template>

<script setup>
const props = defineProps({
    cards: Array,
    changeColor: String
})
</script>

<style>

</style>