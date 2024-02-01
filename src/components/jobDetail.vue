<template>
    <div class="grid grid-cols-4 gap-3 md:gap-0 pb-8 pt-6 cursor-pointer" v-for="job in jobs" :key="job">
        <div class="grid grid-cols-1 col-span-2 gap-3">
            <router-link to="/job-desc" class="name text-[#001224] text-lg md:text-xl font-bold">{{ job.name }}</router-link>
            <p class="company text-base md:text-xl font-light">{{ job.company }}</p>
        </div>
        <p class="location text-base md:text-xl font-light">{{ job.location }}</p>
        <p class="date text-base md:text-xl font-light">{{ job.date }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
        jobs:Array
    })
</script>

<style scoped>

</style>