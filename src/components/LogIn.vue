<template>
 <!-- LOG IN  -->
 <div class="container mx-auto pt-24 pb-24">
  <div class="flex items-center justify-between">
    <div>
      <img src="../assets/account.png" alt="">
    </div>

    <div class="mx-auto">
      <div>
        <h3 class="text-4xl tracking-wider text-center"> Welcome Back! <br>Log in to VueCartel</h3>
        <p class="tracking-wider pt-4 text-center">Enter your details below</p>
      </div>
      <form @submit.prevent="onSubmit" class="w-[25rem]">
        <div class="flex flex-col py-12">
        <input type="email" placeholder="Email or Phone Number" id="email" class="outline-none border-b  py-1 text-lg mt-8" v-model="form.email">
        <input type="password" placeholder="Password" id="password" class="outline-none border-b mt-8 py-1 text-lg"  v-model="form.password">
      </div>
      
      <div class="flex items-center justify-between mt-3">
          <BasicBtn link="/">
            Log In
          </BasicBtn>
          <router-link to="" class="text-red-500 pb-[.1rem]" >
              Forgot Password?
          </router-link>
        </div>
      </form>
      <div class="flex items-center justify-center gap-4 mt-8 ">
        <p>Don't have an account? </p>
        <router-link to="/signup" class="border-b pb-[.1rem]">
            Sign up
        </router-link>
      </div>
    </div>
  </div>
 </div>
</template>

<script setup>
import BasicBtn from './BasicBtn.vue';


</script>