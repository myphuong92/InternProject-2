<template>
    <main class="container">
        <section>
            <div class="lg:h-[52rem] overflow-hidden">
                <img class="full-img" src="/assets/img/da-op-banner.png" alt="">
            </div>
        </section>
        <section>
            <div class="nav px-2 md:py-8 md:px-12 flex text-sub-heading text-lg md:text-6xl justify-between">
                <router-link to="/linhvuc/daop"><span class="hidden lg:block">Khai thác chế biến đá ốp lát</span> <span class="lg:hidden text-lg md:text-3xl">Đá ốp lát</span></router-link>
                <router-link to="/linhvuc/dogo"><span class="hidden lg:block">Sản xuất kinh doanh đồ gỗ nội, ngoại thất</span><span class="lg:hidden text-lg md:text-3xl">Đồ gỗ nội, ngoại thất</span></router-link>
                <a href=""><span class="hidden lg:block">Phân phối xe ô tô Toyota</span>  <span class="lg:hidden text-lg md:text-3xl">Xe ô tô Toyota</span></a>
                <a href=""><span class="hidden lg:block">Ngành bất động sản</span><span class="lg:hidden text-lg md:text-3xl">Bất động sản</span></a>
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
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
    }
    .nav a:hover{
        color: #F16336;
        font-weight: 700;
    }
    .divider{
        border-top: 3px solid #bbb;
    
    }
    
    
    </style>