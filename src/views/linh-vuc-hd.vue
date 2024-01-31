<template>
    <main class="container">
        <section>
            <div class="lg:h-[52rem] overflow-hidden">
                <img class="object-cover w-full" src="/assets/img/da-op-banner.png" alt="">
            </div>
        </section>
        <section>
            <div class="nav md:py-8 md:px-12 flex text-base text-sub-heading justify-between">
                <router-link to="/linhvuc/daop">Khai thác chế biến đá ốp lát</router-link>
                <router-link to="/linhvuc/dogo">Sản xuất kinh doanh đồ gỗ nội, ngoại thất</router-link>
                <a href="">Phân phối xe ô tô Toyota</a>
                <a href="">Ngành bất động sản</a>
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