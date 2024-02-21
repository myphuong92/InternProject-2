<template>
    <header>
        <div class="header-line flex justify-between px-3 md:px-10 lg:px-24 md:py-4">
    <router-link to="/" class="flex items-center">
        <img src="/assets/img/logo.png" alt="">
        <p class="text-2xl font-medium text-[#FF4300] drop-shadow-xl hide-in-mobile-block uppercase">Công ty cổ phần phú tài</p>
    </router-link>
    <div class="flex items-center gap-5">
        <div class="items-center hide-in-mobile-flex">
            <p class="language text-lg"><span class="text-[#989898]">EN</span> | <span @click="toggleLanguage()" :class="isLanguageClicked ? 'text-[#003366]' : 'text-[#989898]'">VN</span></p>
            <div class="searchBox mx-2">
                <input type="text">
            </div>
        </div>
        <div class="flex items-center searchBoxMobile md:hidden">
            <transition name="fade">
                <input v-show="isSearchClicked" type="text">
            </transition>
            <span @click="toggleSearch()" class="material-symbols-outlined">search</span>
        </div>
        <span @click="toggleMenu()" class="material-symbols-outlined cursor-pointer">menu</span>

    </div>  
</div>
<Transition :duration="550" name="nested">
    <div class="h-screen outer navigation bg-[#E4ECFA] px-2 py-6 md:p-10 lg:py-8 lg:px-24" v-if="isMenuClicked" :class="{'active' : isMenuClicked}" @click="closeMenuOnClickOutside">
        <ul class="inner relative flex flex-col gap-6 md:gap-[2rem] h-full">
        <li class="md:flex lg:w-[60%]" :key="link.name" v-for="link in links"  @mouseover="handleMouseOver(link)" @mouseout="handleMouseOut(link)">
            <div class=" nav-title whitespace-nowrap	" :class="{'pl-[20px]': link.isHover.value}">
                <div  class="flex items-center gap-2 hover:color-[#003366]" 
                :style="{'color' : link.isHover.value ? '#003366': ''}"
                @click="closeMenu(false, link)">
                        <div class="star material-symbols-outlined">star</div>
                        <router-link 
                        class="text-xl md:text-2xl lg:text-4xl"
                        :to="link.link" 
                        @mouseover="setHover(link)" 
                        @mouseout="clearHover(link)"
                          >
                         {{ link.name }}
                        </router-link>
                    
                </div>
            </div>
            
            <ul class="mt-6 md:mt-0 ml-[60px] md:ml-10 lg:ml-24 sub-title flex flex-col gap-[2rem] whitespace-nowrap" v-if="link.sublinks.length>0" :class="{'hidden' : !link.isHover.value}">
                <li v-for="sublink in link.sublinks" :key="sublink.name">
                    <div>
                        <div class="md:flex items-center"
                        @click="closeMenu(false, sublink)">
                            <span class="material-symbols-outlined text-base md:text-lg" 
                            :class="{'hidden' : !sublink.isHover.value}">
                                arrow_forward_ios
                            </span>
                            <router-link class="text-xl md:text-3xl hover:text-[#003366]" 
                            :to="sublink.link" 
                            @mouseover="setHover(sublink)" 
                            @mouseout="clearHover(sublink)">
                                {{ sublink.name }}
                            </router-link>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </li>
    </ul>
    </div>
  </Transition>
    </header>
  

</template>

<script setup>
    import { ref } from 'vue'
    let links=[
        {name: "Trang chủ", link: "/", sublinks:[], isHover : ref(false)},
        {name: "Giới thiệu", link: "/about", sublinks:[], isHover : ref(false)},
        {name: "Lĩnh vực hoạt động", link: "/linhvuc", sublinks:[{name:"Ngành đá", link:"/linhvuc/daop", isHover : ref(false)},{name: "Ngành gỗ", link:"/linhvuc/dogo", isHover : ref(false)}, {name:"Ngành ô tô", link:"#", isHover : ref(false)},{name:"Ngành bất động sản", link:"#", isHover : ref(false)}], isHover : ref(false)},
        {name: "Sản phẩm nổi bật", link: "#", sublinks:[], isHover : ref(false)},
        {name: "Quan hệ cổ đông", link: "#", sublinks:[], isHover : ref(false)},
        {name: "Tin tức và sự kiện", link: "/news", sublinks:[], isHover : ref(false)},
        {name: "Tuyển dụng", link: "/job-recruit", sublinks:[], isHover : ref(false)},
        {name: "Liên hệ", link: "/contact", sublinks:[], isHover : ref(false)},
    ]
    const isMenuClicked = ref(false);
    const isSearchClicked = ref(false);
    const isLanguageClicked = ref(false);
    function toggleMenu(){
        isMenuClicked.value=!isMenuClicked.value;
        // console.log(isMenuClicked.value)
    }
    const closeMenuOnClickOutside = (event) => {
        if (!event.target.closest('li')) {
            isMenuClicked.value = false;
        }
    };
    function closeMenu(state, link){
        // link có mảng sublinks là rỗng
        if(Array.isArray(link.sublinks) && link.sublinks.length ===0){
                // close the menu
                isMenuClicked.value=state;
                // reset the hover state to false
                link.isHover.value=false;
        }else if(!('sublinks' in link)){
            // close the menu
            isMenuClicked.value=state;
            // reset the hover state to false
            link.isHover.value=false;
        }
    }
    
    function toggleSearch(){
        isSearchClicked.value = !isSearchClicked.value;
    }
    function toggleLanguage(){
        isLanguageClicked.value= !isLanguageClicked.value;
    }
    function setHover(link){
        link.isHover.value=true;
        console.log(link.isHover.value)
    };
    function clearHover(link){
        link.isHover.value=false;
        console.log(link.isHover.value)
    };
    // Xử lý mouse khi sublink không trống
    function handleMouseOver(link){
        if(link.sublinks.length>0){
            link.isHover.value=true;
        }
    }
    function handleMouseOut(link){
        if(link.sublinks.length>0){
            link.isHover.value=false;
        }
    }
</script>

<style>
/* Define the fade animation */
    .fade-enter-active, .fade-leave-active {
    transition: 0.5s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        transition: 0.5s ease-in-out;
        opacity: 0;
    }
/* delay enter of nested element for staggered effect */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
/* rules that target nested elements */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

/* ... other necessary CSS omitted */
    header{
        width: 100%;
        left: 0;
        right: 0;
        top: 0px;
        z-index: 50;
        position:fixed;
        background-color: white;
        
    }
    .navigation{
        /* transform: translateY(-110%); */
        /* position: fixed;
        left: 0;
        right: 0;
        transition: 0.5s ease-in-out; */
    }
    .navigation.active{
        /* transform: translateY(0); */
    }
    .navigation .text-title{
        font-weight: 500;
    }
    .sub-title{
        transition: 0.5s ease-in-out;
    }
    .nav-title .star{
        font-size: 30px;
    }
    .searchBox input{
        color: #333;
        width: 100%;
        height: 35px;
        font-size: 1.125rem;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,0.5);
        border-radius: 20px;
        padding: 5px 10px;
    }
    .searchBoxMobile input{
        border-bottom: solid black 1px;
        transition: 0.5s ease-in-out;
    }
    .language{
        font-family: 'Big Shoulders Display', sans-serif;
    }
    .hide-in-mobile-block{
        display: block;
    }
    .hide-in-mobile-flex{
        display: flex;
    }
    @media screen and (max-width: 767px) {
        .hide-in-mobile-block{
            display: none;
        }
        .hide-in-mobile-flex{
            display: none;
        }
 }
 @media (min-width: 768px) and (max-width: 1025px) {
 }
</style>