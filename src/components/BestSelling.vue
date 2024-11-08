<script setup>
import BasicBtn from './BasicBtn.vue';
import BasicHeading from './BasicHeading.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';

import { onMounted, ref } from 'vue';
import axios from 'axios';

const model = ref(null)
// const rating = ref(4)

let products = ref([])

onMounted(async () => {
  let res = await axios.get('https://dummyjson.com/products')
   products.value = res
    console.log(products)
  })


</script>


<template>
<div class="container mx-auto border-b pb-24">
  <div class="pt-32"></div>
  <div class="flex items-center justify-between">
    <BasicHeading headliner="this month" heading="Best selling products" />
    <BasicBtn label="View All" class=" mx-auto w-[10rem]"/>  
  </div>

  <v-sheet
    class="container mx-auto z-0"
  >
    <v-slide-group v-model="model" >
      <v-slide-group-item
        v-for="n in 8"
        :key="n"
      >
        <v-card
          :class="['ma-4']"
          color=""
          height="350"
          width="270"
          class="relative "
        >
          <div class="flex flex-col fill-height align-center justify-between">
           <div class="absolute top-3 right-3  rounded-full p-2 w-[2.5rem] h-[2.5rem] bg-white/60 hover:bg-red-500 hover:rounded-full  hover:text-white">
             <HeartOutline />
          </div>
            <div class=" w-full h-[15.6rem] flex items-center justify-center">
              <img src="../assets/games.png" alt=""/>
            </div>
            <div class="w-full px-4 pb-3">
              <div class="py-2">
                <h3 class="text-xl font-semibold capitalize "> good camera</h3>
                <p class="text-red-500 text-lg ">$120.00</p>
              </div>
              <div>
                <BasicBtn bg="bg-orange-500 hover:bg-black">Add to cart</BasicBtn>
               </div>
            </div>
            <v-scale-transition>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
 
  
</div>
</template>
