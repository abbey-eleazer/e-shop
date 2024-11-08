<script setup>
import CategoryList from '@/components/CategoryList.vue'

import heroSlides from '../header.js'

</script>


<template>
 <header class="container mx-auto mt-16 z-0">
  <div class="flex justify-between">
    <CategoryList />
  <div>
  <v-carousel
    height="400"
    :show-arrows="false"
    cycle
    hide-delimiter-background
   class="z-0"
  >
  
    <v-carousel-item
      v-for="(slide, i) in heroSlides"
      :key="i"
    >
      <v-sheet class="bg-black w-[60vw] rounded px-14 py-8"
        height="100%"
      >
        <div class="flex fill-height items-center justify-between align-center">
          <div class="flex flex-1 flex-col justify-center">
          <p class="text-lg">{{ slide.name }}</p>
          <h1 class="text-6xl pt-4 text-wrap font-semibold">
            {{ slide.title }} 
          </h1>
          <router-link to="" class="underline text-xl pt-4">Shop now &rarr;</router-link>
        </div>

          <!-- IMAGE  -->
          <div class="flex-1 flex py-8 items-center justify-center">
           <img class="w-[25rem]" :src="slide.image" alt="slides image"/>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</div>
</div>

  </header>
</template>

