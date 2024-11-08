<template>
  <div :class="`${bg} rounded `"> 
    <router-link :to="link" class=" flex items-center justify-center gap-2 h-[3rem] px-8 text-white font-semibold tracking-wide">
          <p class="text-lg">{{label}}</p>
         <slot></slot>
   </router-link>
  </div>
</template>

<script setup>
defineProps({
  link: String,
  label: String,
  bg:{
    type: String,
    default: 'bg-red-500 hover:bg-red-600'
  }
})
</script>

