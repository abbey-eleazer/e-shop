<script setup>
import BasicBtn from './BasicBtn.vue';
import BasicHeading from './BasicHeading.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';

import { computed, onMounted, ref } from 'vue';

import axios from 'axios';

const flashSales = ref([]) 

 onMounted(
   async() => {
     await axios.get('https:////fakestoreapi.com/products?limit=10')
     .then((res) => flashSales.value = res.data)
    console.log(flashSales)
  }  
  )
</script>


<template>
<div class="container mx-auto border-b pb-24">
  <div class="pt-32"></div>
     <BasicHeading headliner="today" heading="flash sale" />

  <v-sheet
    class="container mx-auto z-0"
  >
    <v-slide-group v-model="model" >
      <v-slide-group-item
        v-for="product in flashSales"
        :key="product.id"
      >
        <v-card
          :class="['ma-4']"
          color=""
          height="350"
          width="250"
          class="relative"
        >
          <div class="flex flex-col fill-height align-center justify-between">
           <div class="absolute bg-red-500 py-1 px-3 rounded left-3 top-3 text-white">-20%</div>
           <div class="absolute top-3 right-3  rounded-full p-2 w-[2.5rem] h-[2.5rem] bg-white/60 hover:bg-red-500 hover:rounded-full  hover:text-white">
             <HeartOutline />
          </div>
            <div class=" w-full">
              <img :src="product.image" alt="" class="w-full h-[13rem]" />
            </div>
            <div class="w-full px-4 pb-3">
              <div class="py-2">
                <h3 class="text-lg truncate font-semibold capitalize "> {{product.title}}</h3>
                <p class="text-red-500 text-lg ">${{product.price}}.00</p>
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
 
    <BasicBtn label="View All Products" class="w-[14rem] mx-auto mt-24"/>  
  
</div>
</template>
