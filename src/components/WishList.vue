<script setup>
import BasicBtn from './BasicBtn.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import WishListItem from './WishListItem.vue';

</script>


<template>
  <div class="container mx-auto mt-24 mb-24 ">
  <div class="flex gap-8 ">
    <div class="flex-1 bg-gray-100/70 rounded px-5 py-4">
      <h3 class="text-2xl tracking-wider pb-5 border-b">Your Wishlist (2)</h3>
      
      <!-- CART ITEM  -->
    <div class="flex items-center gap-8">
      <WishListItem/>
      <WishListItem/>
    </div>
    </div>

  </div>

    <BasicBtn link="/" class="mt-16 w-56">
      <ArrowLeft />
       Return to shop</BasicBtn>
  </div>
</template>


