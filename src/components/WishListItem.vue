<script setup>
import BasicBtn from './BasicBtn.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
</script>

<template>
    <div class="w-[18rem] overflow-hidden border border-gray-200 rounded items-center justify-center flex mt-8 mb-8">
     
      <div class="relative flex flex-col fill-height align-center justify-between">
        <div class="absolute top-3 right-3  rounded-full p-2 w-[2.5rem] h-[2.5rem] bg-white/80 hover:bg-red-500 hover:rounded-full hover:text-white">
          <TrashCanOutline class="cursor-pointer" />
        </div>
            <div class="bg-gray-200 w-[18rem] h-[15.6rem] flex items-center justify-center">
              <img src="../assets/headphone.png" alt=""/>
            </div>
            <div class="w-full px-4 pb-3">
              <div class="py-2">
                <h3 class="text-xl font-semibold capitalize "> good camera</h3>
                <p class="text-red-500 text-lg ">$120.00</p>
              </div>
              <div>
                <BasicBtn bg="bg-orange-500 hover:bg-black">Buy Now</BasicBtn>
              </div>
            </div>
          </div>
          
    </div>
</template>