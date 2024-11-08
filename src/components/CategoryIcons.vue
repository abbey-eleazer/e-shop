<script setup>
import BasicHeading from './BasicHeading.vue';

const categories = [
  {
    "name":" Phones",
    "image" : "../src/assets/Category-CellPhone.png",
  },
  {
    "name":"Computers",
    "image" : "../src/assets/Category-Computer.png",

  },
  {
    "name":"SmartWatch",
    "image" : "../src/assets/Category-SmartWatch.png"
  },
  {
    "name":" Camera",
    "image" : "../src/assets/Category-Camera.png"
  },
  {
    "name":" Gaming",
    "image" : "../src/assets/Category-GamePad.png"
  },
  {
    "name":" HeadPhones",
    "image" : "../src/assets/Category-Headphone.png"
  }
]

</script>

<template>
  <div class="container mx-auto my-24  border-b py-32">
    <BasicHeading headliner="categories" heading="Browse by Category" />
   
    <div class="flex items-center justify-between">
      <div v-for="(category, index) in categories" :key="index" class="w-[10.6rem] h-[9rem] border flex items-center justify-center rounded hover:bg-orange-400">
        <div class="flex flex-col items-center
         justify-center">
          <img :src="category.image" alt="product image" class="flex justify-center hover:text-white"/>
          {{category.icon}}  
          <div>
            <h3>{{ category.name }}</h3>  
          </div>  
        </div>  
      </div>
    </div>
     
  </div>
</template>