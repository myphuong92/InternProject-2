<template>
    <main class="container">
        <section>
            <div class="lg:h-[52rem] overflow-hidden">
                <img class="full-img" src="/assets/img/da-op-banner.png" alt="">
            </div>
        </section>
        <section>
            <div class="md:flex md:flex-row whitespace-nowrap	md:whitespace-normal overflow-x-scroll md:overflow-auto px-2 md:p-8  text-sub-heading justify-between">
                <router-link to="/linhvuc/daop" class="first text-lg md:text-xl lg:text-3xl">Khai thác chế biến đá ốp lát</router-link>
                <router-link to="/linhvuc/dogo" class="ml-5 text-lg md:text-xl lg:text-3xl">Sản xuất kinh doanh đồ gỗ nội, ngoại thất</router-link>
                <a href="" class="ml-5 text-lg md:text-xl lg:text-3xl">Phân phối xe ô tô Toyota</a>
                <a href="" class="ml-5 text-lg md:text-xl lg:text-3xl">Ngành bất động sản</a>
            </div>
            <div class="divider"></div>
        </section>
        <router-view/>
    </main>  
    </template>
    
    <script setup>
    
    import { ref } from 'vue'
    
    </script>
    
    <style scoped>
    
    .nav a{
        font-weight: 400;
        cursor: pointer;
    }
    .nav a.first{
        color: #F16336;
        font-weight: 700;
    }
    .divider{
        border-top: 3px solid #bbb;
    
    }
    
    
    </style>