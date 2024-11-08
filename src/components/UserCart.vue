<script setup>
import BasicBtn from './BasicBtn.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import CartItem from './CartItem.vue';

</script>


<template>
  <div class="container mx-auto mt-24 mb-24 ">
  <div class="flex gap-8 ">
    <div class="flex-1 bg-gray-100/70 rounded px-5 py-4">
      <h3 class="text-2xl tracking-wider pb-5 border-b">Your Cart (2)</h3>
      
      <!-- CART ITEM  -->
    <CartItem/>
    </div>

    <!-- CART SUMMARY  -->
    <div class="w-[25rem] h-52 px-4 py-4 bg-gray-100/70 rounded flex flex-col justify-between">
      <h3 class="text-2xl tracking-wider pb-4 border-b">Cart Summary</h3>
      <div class="flex justify-between border-b pb-2">
        <p>Subtotal</p>
        <p class="font-semibold text-lg">GHC 2,082.00</p>
      </div>
      <BasicBtn link="/order" class="">
        CHECKOUT (GHC 2,082.00)
      </BasicBtn>
    </div>
  </div>

    <BasicBtn link="/" class="mt-16 w-56">
      <ArrowLeft />
       Return to shop</BasicBtn>
  </div>
</template>


