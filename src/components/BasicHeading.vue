<script setup>
defineProps({
  headliner: String,
  heading: String
})
</script>


<template>

   <div class="container mx-auto">
  <div class=" flex gap-4 items-center">
      <div class="w-4 h-8 bg-red-500 rounded"></div>  
      <p class="text-red-500 text-lg capitalize font-semibold">{{headliner}}</p>
    </div>
    <div>
      <h2 class="font-bold text-3xl py-8 capitalize tracking-wider">{{heading}}</h2> 
      <div></div> 
    </div>
  </div>


</template>