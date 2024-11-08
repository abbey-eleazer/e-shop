<script setup>
import BasicBtn from './BasicBtn.vue';
</script>

<template>
  <div class="container mx-auto bg-black flex items-center justify-between px-[3.5rem] py-[3.8rem]">
    <!-- text  -->
    <div class="flex-1">
      <p class="text-xl text-green-600">Categories</p>
      <h1 class="text-6xl text-wrap font-semibold capitalize tracking-widest leading-[4rem] pb-12 pt-8">Enhance your<br> music experience</h1>

      <!-- time  -->
      <div class="flex gap-5 mb-12">
        <div class="w-[5rem] h-[5rem] bg-white rounded-full flex flex-col items-center justify-center ">
          <h3 class="font-bold text-2xl leading-3">23</h3>
          <p>Hours</p>
        </div>
        <div class="w-[5rem] h-[5rem] bg-white rounded-full flex flex-col items-center justify-center ">
          <h3 class="font-bold text-2xl leading-3">02</h3>
          <p>Days</p>
        </div>
        <div class="w-[5rem] h-[5rem] bg-white rounded-full flex flex-col items-center justify-center ">
          <h3 class="font-bold text-2xl leading-3">49</h3>
          <p>Minutes</p>
        </div>
        <div class="w-[5rem] h-[5rem] bg-white rounded-full flex flex-col items-center justify-center ">
          <h3 class="font-bold text-2xl leading-3">53</h3>
          <p>Seconds</p>
        </div>
      </div>

      <BasicBtn bg="bg-green-500 hover:bg-green-600" class=" w-[10rem]">Buy Now !</BasicBtn>
    </div>
    <!-- img  -->
    <div class="">
      <img src="../assets/speaker.png" alt="speaker" >
    </div>
  </div>
</template>