<template>
    <header>
        <div class="header-line flex justify-between px-24">
    <a class="flex items-center">
        <img src="/assets/img/logo.png" alt="">
        <p class="text-2xl font-medium text-[#FF4300] drop-shadow-xl">Công ty cổ phần phú tài</p>
    </a>
    <div class="flex items-center">
        <p>EN | VN</p>
        <div class="searchBox mx-2">
            <input type="text">
        </div>
        <span @click="toggleMenu()" class="material-symbols-outlined">menu</span>

    </div>  
</div>
<Transition :duration="550" name="nested">
    <div class="outer navigation bg-[#E4ECFA] py-8 px-24" v-if="isMenuClicked" :class="{'active' : isMenuClicked}">
        <ul class="inner relative flex flex-col gap-[1rem] ">
        <li class="flex justify-between w-[60%]" :key="link.name" v-for="link in links"  @mouseover="handleMouseOver(link)" @mouseout="handleMouseOut(link)">
            <div class="nav-title" :class="{'pl-[20px]': link.isHover.value}">
                <div class="flex items-center" :style="{'color' : link.isHover.value ? '#003366': ''}">
                    <div>
                        <span class="star material-symbols-outlined">star</span>
                        <router-link class="text-title" :to="link.link" @mouseover="setHover(link)" @mouseout="clearHover(link)" :style="{'font-size' : link.isHover.value ? '38px': ''}" >{{ link.name }}</router-link>
                    </div>
                    
                </div>
            </div>
            
            <ul class="sub-title flex flex-col gap-[1rem]" v-if="link.sublinks.length>0" :class="{'hidden': !link.sublinks.length>0 || !link.isHover.value}">
                <li v-for="sublink in link.sublinks" :key="sublink.name">
                    <div>
                        <div class="flex items-center">
                            <span class="material-symbols-outlined" :class="{'hidden' : !sublink.isHover.value}">arrow_forward_ios</span>
                            <router-link class="text-title hover:text-[#003366]" :to="sublink.link" @mouseover="setHover(sublink)" @mouseout="clearHover(sublink)">
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
        {name: "Tin tức và sự kiện", link: "#", sublinks:[], isHover : ref(false)},
        {name: "Tuyển dụng", link: "#", sublinks:[], isHover : ref(false)},
        {name: "Liên hệ", link: "#", sublinks:[], isHover : ref(false)},
    ]
    const isMenuClicked = ref(false);

    function toggleMenu(){
        isMenuClicked.value=!isMenuClicked.value;
        // console.log(isMenuClicked.value)
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
        position:sticky;
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
</style>