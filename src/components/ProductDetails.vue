<script setup>
import BasicBtn from './BasicBtn.vue';
</script>

<template>
  <div class="container mx-auto mt-24 mb-24">
   
      <div class="w-full flex gap-32">
        <!-- Product Images  -->
        <div class="flex gap-12">
          <!-- Product thumbnails -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-center bg-gray-100 w-[10.6rem] h-[8.5rem] rounded">
              <img src="../assets/thumb1.png" alt="">
            </div>
            <div class="flex items-center justify-center bg-gray-100 w-[10.6rem] h-[8.5rem] rounded">
              <img src="../assets/thumb2.png" alt="">
            </div>
            <div class="flex items-center justify-center bg-gray-100 w-[10.6rem] h-[8.5rem] rounded">
              <img src="../assets/thumb3.png" alt="">
            </div>
            <div class="flex items-center justify-center bg-gray-100 w-[10.6rem] h-[8.5rem] rounded">
              <img src="../assets/thumb4.png" alt="">
            </div>
          </div>
          <!-- Product display  -->
          <div class="bg-gray-100 w-[35rem] h-[37rem] px-8 rounded flex items-center justify-center">
            <img src="../assets/white game pad.png" alt="">
          </div>
        </div>
        <!-- TEXT  -->
        <div class="w-[30rem] pb-8 mx-auto">
          <h3 class="text-3xl tracking-wide pb-5">Havic HV G-92 Gamepad</h3>
          <div>
            <p>⭐⭐⭐⭐ (150 Reviews) | <span class="text-xl text-emerald-400">In Stock</span></p>
          </div>
          <p class="text-2xl pt-4">$192.00</p>
          <p class="text-lg border-b-2 border-gray-400  py-8">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
          <div class="flex gap-8 items-center py-8">
          <div class="flex items-center justify-between w-40 h-12 rounded-md border overflow-hidden">
            <button class="w-10 h-full border text-4xl hover:bg-red-500 hover:text-white">-</button>
            <p class="text-xl">2</p>
            <button class="w-10 h-full border text-3xl hover:bg-red-500 hover:text-white ">+</button>
          </div>
          <BasicBtn link="/cart" class="w-[15rem]">
            Buy Now
          </BasicBtn>
          </div>

          <div class="flex flex-col items-center border-2 border-gray-400 rounded-lg">
            <div class="flex items-center gap-5 w-full h-24 pl-8 border-b-2 border-gray-400">
              <img src="../assets/icon-delivery.png" alt="">
              <div class="">
                <h4 class="capitalize text-xl">free delivery</h4>
                <p class="underline">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div class="flex items-center gap-5 w-full h-24 pl-8">
              <img src="../assets/icon-return.png" alt="">
              <div class="">
                <h4 class="capitalize text-xl">Return Delivery</h4>
                <p class="underline">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>
