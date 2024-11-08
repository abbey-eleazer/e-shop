<script setup>
defineProps({
  image: URL,
  heading: String,
  text: String,
})
</script>


<template>
  <div class="relative bg-black pt-2">
    <slot></slot>
    <div class="absolute bottom-8 left-8 z-10">
      <h3 class="font-bold text-2xl tracking-wider py-2">{{ heading }}</h3>
      <p class="text-lg w-[18rem]">{{ text }}</p>
      <button class="text-lg underline py-2">
        Shop Now &rarr;
      </button>
    </div>
  </div>
</template>