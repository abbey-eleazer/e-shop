<script setup>
import BasicBtn from './BasicBtn.vue';
import BasicHeading from './BasicHeading.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';

import { computed, onMounted, ref } from 'vue';

import axiosClient from '@/axiosClient';

const products = ref([]) 

 onMounted(
   async() => {
    const res = await axiosClient.get('/products?limit=10')
     products.value = res.data
    console.log(products)
  }  
  )


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
    
        v-for="product in products"
        :key="product.id"
        
      >
        <v-card
          :class="['ma-4']"
          color=""
          height="350"
          width="250"
          class="relative "
        >
          <div class="flex flex-col fill-height align-center justify-between">
           <div class="absolute top-3 right-3  rounded-full p-2 w-[2.5rem] h-[2.5rem] bg-white/60 hover:bg-red-500 hover:rounded-full  hover:text-white" >
             <HeartOutline />
          </div>
            <div class="w-full ">
              <img :src="product.images[1]" class="w-full h-[13rem]" />
            </div>
            <div class="w-full px-4 pb-3">
              <div class="py-1">
                <h3 class="text-lg font-semibold capitalize leading-5"> {{product.title}}</h3>
                <p class="text-orange-500 text-lg ">${{product.price}}.00</p>
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
