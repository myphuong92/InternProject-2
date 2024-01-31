<template>
  <button class="justify-center flex gap-3 items-center  py-2.5 px-5 rounded-md" :class="[changeColor === 'orange' ? orangeButton:'',changeColor === 'blue' ? blueButton:'',changeColor === 'white' ? whiteButton:'', changeColor === 'darkblue' ? darkBlueButton:'']" >
        <p class="text-[14px]" :class="[changeColor ==='blue' ? 'text-[#003366]' : '']">{{ title }}</p>
        <span v-if="icon" class=" material-symbols-outlined">{{ icon }}</span>
    </button>
</template>

  <script setup>
  import { ref } from 'vue'
  const orangeButton = ref('bg-[#F16336] text-white');
  const blueButton = ref('border-solid border-[#526D88] border-2');
  const whiteButton = ref('bg-white text-black');
  const darkBlueButton = ref('bg-[#003366] text-white');

  const props = defineProps({
    icon: String,
    changeColor: String,
    title: String
  })
  </script>

<style>

</style>