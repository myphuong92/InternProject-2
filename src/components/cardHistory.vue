<template>
  <!-- <div class="box flex flex-col gap-y-4 md:w-[48%] lg:w-[20%]" v-for="card in cards" :key="card">
    <div class="connect items-center hidden lg:flex">
        <span class="circle-orange"></span>
    </div>
    <div class="content flex flex-col items-start gap-3">
        <p class="date">{{ card.date }}</p>
        <p class="desc text-desc text-lg">{{ card.desc }}</p>
    </div>
  </div> -->
  <div class="box flex flex-col gap-y-4 pr-8 pb-8" v-for="card in cards" :key="card">
    <div class="connect items-center hidden md:flex">
        <span class="circle-orange"></span>
    </div>
    <div class="content flex flex-col items-start gap-3">
        <p class="date">{{ card.date }}</p>
        <p class="desc text-desc text-lg">{{ card.desc }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    cards: Array
})
</script>

<style scoped>
.content .date{
    font-size: 20px;
    color: #3399FF;
    font-weight: 700;
}
.content .desc{
    color: #526D88;
    font-size: 16px;
}
.circle-orange{
    height: 2rem;
    width: 2rem;
    background-color: #f16336;
    border-radius: 50%;
    display: inline-block;
    margin-top:-16px
}
.box:not(:last-child){
    border-top: 2px dashed black;
    position: relative;
}
.box:not(:last-child):before{
    content:"\f0da";
    font-family: "Font Awesome 6 Free";
    font-weight: 600;
    position: absolute;
    right: 0%;
    top: -12px;
}
.box:nth-child(6)::before,.box:nth-child(7)::before,.box:nth-child(8)::before, .box:nth-child(9)::before{
    left: 32px;
    right: unset;
    transform: rotate(180deg);
}
.box:nth-child(10)::before{
    right: unset;
    transform: rotate(180deg);
    left: 108px;
}
.box:nth-child(5){
    border-right: 2px dashed black;
}
.box:nth-child(11){
    margin-left: -76px;
    padding-left: 76px;
}
.box:nth-child(11)::after{
    content:"\f0da";
    font-family: "Font Awesome 6 Free";
    font-weight: 600;
    position: absolute;
    top: -12px;
    left: 68px;
}
.box:nth-child(6){
    /* border-left: 2px dashed black; */
    /* border-bottom: 2px dashed black; */
    /* border-image: linear-gradient(to bottom, #000 50%, transparent 50%) 100% 1; */
    /* margin-left: -76px;
    padding-left: 76px; */
}
.box:nth-child(10){
    border-left: 2px dashed black;
    /* border-bottom: 2px dashed black; */
    /* border-image: linear-gradient(to bottom, #000 50%, transparent 50%) 100% 1; */
    margin-left: -76px;
    padding-left: 76px;
}
.box:nth-child(10)::after{
    content:"\f0da";
    font-family: "Font Awesome 6 Free";
    font-weight: 600;
    position: absolute;
    top: -12px;
    left: 0;
    right: unset;
    transform: rotate(180deg);
}
/* ORDER */
.box:nth-child(1){ 
    order: 1;
}
.box:nth-child(2){
order: 2;
}
.box:nth-child(3){
    order: 3;
}
.box:nth-child(4){
    order: 4;
}
.box:nth-child(5){
    order: 5;
}
.box:nth-child(6){
    order: 10;
}
.box:nth-child(7){
    order: 9;
}
.box:nth-child(8){
    order: 8;
}
.box:nth-child(9){
    order:7;
}
.box:nth-child(10){
    order: 6;
}
.box:nth-child(10){
    order: 6;
}
.box:nth-child(11){
    order: 11;
}
.box:nth-child(12){
    order: 12;
}
.box:nth-child(13){
    order: 13;
}
.box:nth-child(14){
    order: 14;
}
.box:nth-child(15){
    order: 15;
}
@media screen and (max-width: 767px) {
.box:not(:last-child):before{
    content:none
}
.box:not(:last-child){
    border-top: none
}
.box:nth-child(5){
    border-right: none
}
.box:nth-child(11)::after{
    content:none
}
.box:nth-child(1){ 
    order: 1;
}
.box:nth-child(2){
order: 2;
}
.box:nth-child(3){
    order: 3;
}

.box:nth-child(4){
    order: 4;
}
.box:nth-child(5){
    order: 5;
}
.box:nth-child(6){
    order: 6;
}
.box:nth-child(7){
    order: 7;
}
.box:nth-child(8){
    order: 8;
}
.box:nth-child(9){
    order:9;
}
.box:nth-child(10){
    order: 10;
}

.box:nth-child(11){
    order: 11;
}
.box:nth-child(12){
    order: 12;
}
.box:nth-child(13){
    order: 13;
}
.box:nth-child(14){
    order: 14;
}
.box:nth-child(15){
    order: 15;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
    .box:not(:last-child):before{
    content:"\f0da";
    font-family: "Font Awesome 6 Free";
    font-weight: 600;
    position: absolute;
    right: 0%;
    top: -12px;
}
.box:nth-child(4)::before,.box:nth-child(5)::before,.box:nth-child(6 )::before{
    left: 32px;
    right: unset;
    transform: rotate(180deg);
}
.box:nth-child(5){
    border-right: none;
}
.box:nth-child(7)::before,.box:nth-child(8)::before,.box:nth-child(9)::before{
    transform: none;
    left:unset
}
.box:nth-child(10)::before,.box:nth-child(11)::before,.box:nth-child(12)::before{
    transform: rotate(180deg);
    left: 32px;
    right: unset;
}
.box:nth-child(11)::after, .box:nth-child(10)::after{
    content: none;
}
.box:nth-child(3), .box:nth-child(9){
    border-right: 2px dashed black;
}
.box:nth-child(11){
    margin-left: 0;
    padding-left: 0;
}

.box:nth-child(6){
    /* border-left: 2px dashed black; */
    /* border-bottom: 2px dashed black; */
    /* border-image: linear-gradient(to bottom, #000 50%, transparent 50%) 100% 1; */
    /* margin-left: -76px;
    padding-left: 76px; */
}
.box:nth-child(10){
    border-left: none;
    /* border-bottom: 2px dashed black; */
    /* border-image: linear-gradient(to bottom, #000 50%, transparent 50%) 100% 1; */
    margin-left: 0px;
    padding-left: 0px;
}
.box:nth-child(6), .box:nth-child(12){
    border-left: 2px dashed black;
    /* border-bottom: 2px dashed black; */
    /* border-image: linear-gradient(to bottom, #000 50%, transparent 50%) 100% 1; */
    margin-left: -14px;
    padding-left: 14px;
}
.box:nth-child(6)::before, .box:nth-child(12)::before{
    left:47px
}

.box:nth-child(7), .box:nth-child(13){
    margin-left: -13px;
    padding-left: 13px;
}
.box:nth-child(7)::after, .box:nth-child(13)::after{
    content: "\f0da";
    font-family: "Font Awesome 6 Free";
    font-weight: 600;
    position: absolute;
    top: -12px;
    left: 5px;
}
.box:nth-child(7)::before, .box:nth-child(13)::before{
    /* left: 6px; */
}
/* ORDER */
.box:nth-child(1){ 
    order: 1;
}
.box:nth-child(2){
order: 2;
}
.box:nth-child(3){
    order: 3;
}

.box:nth-child(4){
    order: 6;
}
.box:nth-child(5){
    order: 5;
}
.box:nth-child(6){
    order: 4;
}
.box:nth-child(7){
    order: 7;
}
.box:nth-child(8){
    order: 8;
}
.box:nth-child(9){
    order:9;
}
.box:nth-child(10){
    order: 12;
}

.box:nth-child(11){
    order: 11;
}
.box:nth-child(12){
    order: 10;
}
.box:nth-child(13){
    order: 13;
}
.box:nth-child(14){
    order: 14;
}
.box:nth-child(15){
    order: 15;
}

}
</style>