<script setup>
import { ref } from 'vue';
import BasicBtn from './BasicBtn.vue';

const model = ref(null)
const rating = ref(4)
</script>


<template>
<div class="container mx-auto border-b pb-24">
  <div class="h-24"></div>
  <div class="container mx-auto">
  <div class=" flex gap-4 items-center">
      <div class="w-4 h-8 bg-red-500 rounded"></div>  
      <p class="text-red-500 text-lg">Today's</p>
    </div>
    <div>
      <h2 class="font-bold text-3xl py-8">Flash Sales</h2>  
    </div>
  </div>
  <v-sheet
    class="container mx-auto z-0"
  >
    <v-slide-group
      v-model="model"
      class=""
       :show-arrow="false"
    >
      <v-slide-group-item
        v-for="n in 8"
        :key="n"
      >
        <v-card
          :class="['ma-4']"
          color=""
          height="350"
          width="270"
        >
          <div class="flex flex-col fill-height align-center justify-between">
            <div class="bg-gray-200 w-full h-[15.6rem] flex items-center justify-center">
              <img src="../assets/camera.png" alt="">
            </div>
            <div class="w-full pl-4 pb-3">
              <h3 class="text-xl font-medium"> good camera</h3>
              <p class="text-red-500">$120.00</p>
              <div>
                <v-card-actions class="pa-4">
                    <span class="text-grey-lighten-2 text-caption me-2">
                      ({{ rating }})
                    </span>

                    <v-rating
                      v-model="rating"
                      active-color="yellow-accent-4"
                      color="black"
                      size="18"
                      half-increments
                      hover
                    ></v-rating>
                  </v-card-actions>
                </div>
            </div>
            <v-scale-transition>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
 
    <BasicBtn label="View All Products" class="w-[13rem] mx-auto mt-24"/>  
  
</div>
</template>
