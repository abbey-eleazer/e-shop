<script setup>
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import CartOutline from 'vue-material-design-icons/CartOutline.vue';
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue';

import BasicBtn from './BasicBtn.vue';

import { ref } from 'vue'

const showAcc = ref(false)

function isLogin (){
  showAcc.value = true
}
</script>

<template>
  <header class="relative flex justify-center h-[5.5rem] pl-4 z-50 ">
    <div class=" fixed  border-b w-full bg-white ">
      <div class="bg-black text-white flex justify-center py-1 z-50">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow</p>
      </div>
    <div class="z-50 container mx-auto flex items-center justify-between py-4  border-b">
      <router-link to="/">
        <h1 class="text-4xl font-bold">VueCartel</h1>
      </router-link>

      <div class="flex items-center gap-3 ">
      <div class="flex items-center bg-gray-100 w-[25rem] rounded h-12 px-4 overflow-hidden ">
        <input type="text" placeholder="what are you looking for?" class="w-full outline-none bg-transparent ">
      </div>
      <BasicBtn to="/search" label="Search">
        <Magnify  fill-color="#fff" class=""/>
      </BasicBtn>
    </div>
     
      <div class="flex items-center gap-4">
        <router-link to="/wishlist" class="hover:bg-red-500 hover:rounded-full p-1 hover:text-white">
          <HeartOutline />
        </router-link>
        <router-link to="/cart" class="hover:bg-red-500 hover:rounded-full p-1 hover:text-white">
          <CartOutline />
        </router-link>

        <router-link v-if="showAcc" to="" class="hover:bg-red-500 hover:rounded-full p-1 hover:text-white">
          <AccountOutline />
        </router-link>

        <div v-if="!showAcc" @click="isLogin">
          <BasicBtn bg="bg-black" link="/signup"  >
            <p class="text-white -ml-3 ">Sign Up</p>
          </BasicBtn>
        </div>
    </div>
  </div>
  </div>
  </header>
</template>
