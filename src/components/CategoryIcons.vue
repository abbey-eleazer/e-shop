<script setup>
import BasicHeading from './BasicHeading.vue';

import { computed, onMounted, ref } from 'vue';

import axiosClient from '@/axiosClient';

const categories = ref([]) 

 onMounted(
   async() => {
    const res = await axiosClient.get('/categories')
     categories.value = res.data
    console.log(categories)
  }  
  )

{{categories}}

</script>

<template>
  <div class="container mx-auto my-24  border-b">
    <BasicHeading headliner="categories" heading="Browse by Category" />
   
    <div class="flex items-center justify-between">
      <div v-for="(category, index) in categories" :key="index" class="w-[10.6rem] h-[9rem] border flex items-center justify-center rounded hover:bg-orange-400">
        <div class="flex flex-col items-center
         justify-center">
          <img :src="category.image" alt="product image" class="flex justify-center hover:text-white"/>
          <div>
            <h3>{{ category.name }}</h3>  
          </div>  
        </div>  
      </div>
    </div>
     
  </div>
</template>