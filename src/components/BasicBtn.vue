<template>
    <router-link :to="link" class="bg-red-500 flex items-center gap-2 h-[3rem] px-8 text-white rounded">
          <p class="text-lg">{{label}}</p>
         <slot></slot>
   </router-link>
</template>

<script setup>
defineProps({
  link: String,
  label: String
})
</script>

