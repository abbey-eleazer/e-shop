<script setup>
import { ref } from 'vue';
import BasicBtn from './BasicBtn.vue';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';

let numberOfItem = ref(0)
 const handleAddItem = () =>{
  numberOfItem.value += 1
 }

 const handleRemoveItem = () =>{
  if(numberOfItem.value > 0) {
    numberOfItem.value -= 1
  } else {
    return numberOfItem.value
  }
 }
</script>

<template>
    <div class="w-full py-6 border-b border-gray-200 items-center justify-between">
       <div class="flex items-center justify-between">
        <div class="flex items-center gap-5">
          <img src="../assets/monitor.png" alt="" class="w-16">
          <p class="text-lg">LCD Monitor</p>
        </div>
        <div>
          <p class="text-lg font-semibold">GHC 3000.00</p>
        </div>
       </div>
        <div class="flex items-center justify-between pt-8">
          <BasicBtn bg="bg-orange-500 " class=" hover:bg-black">
              <TrashCanOutline   />
            Remove
        </BasicBtn>
          <div class="flex items-center justify-between w-40 h-12 rounded-md border overflow-hidden">
            <button class="w-10 h-full border text-4xl hover:bg-red-500 hover:text-white" @click="handleRemoveItem">-</button>
            <p class="text-xl" >{{numberOfItem}}</p>
            <button @click="handleAddItem" class="w-10 h-full border text-3xl hover:bg-red-500 hover:text-white ">+</button>
          </div>
        </div>
      </div>

</template>