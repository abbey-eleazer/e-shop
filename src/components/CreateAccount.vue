<script setup>
import BasicBtn from './BasicBtn.vue';

import {ref} from 'vue'

const showLogin = ref(false)

function showLoginHandler (){
  showLogin.value = true
}

</script>


<template>
  <div class="container mx-auto pt-24 pb-24">
      <div class="flex items-center justify-between">
        <div>
          <img src="../assets/account.png" alt="">
        </div>

        <!-- SIGNUP -->
        <div v-if="!showLogin" class="mx-auto">
          <div>
            <h3 class="text-4xl tracking-wider">Create an account</h3>
            <p class="tracking-wider pt-4">Enter your details below</p>
          </div>
          <form class="w-[25rem]">
            <div class="flex flex-col py-12">
            <input type="text" placeholder="Name" id="name" class="outline-none border-b  py-1 text-lg">
            <input type="text" placeholder="Email or Phone Number" id="email" class="outline-none border-b  py-1 text-lg mt-8">
            <input type="password" placeholder="Password" id="password" class="outline-none border-b mt-8 py-1 text-lg">
          </div>
            <BasicBtn>
              Create account
            </BasicBtn>
            <BasicBtn bg="bg-transparent" class="border mt-6">
              <div class="flex items-center gap-4">
                <img src="../assets/Icon-Google.png" alt=""/>
                <p class="text-black">Sign up with Google</p>
              </div>
            </BasicBtn>
          </form>
          <div class="flex items-center justify-center gap-4 mt-8 ">
            <p>Already have an account? </p>
            <router-link to="" class="border-b pb-[.1rem]" @click="showLoginHandler">
                Log in
            </router-link>
          </div>
      </div>


      <!-- LOG IN  -->
      <div v-if="showLogin" class="mx-auto">
          <div>
            <h3 class="text-4xl tracking-wider">Log in to VueCartel</h3>
            <p class="tracking-wider pt-4">Enter your details below</p>
          </div>
          <form class="w-[25rem]">
            <div class="flex flex-col py-12">
            <input type="text" placeholder="Email or Phone Number" id="email" class="outline-none border-b  py-1 text-lg mt-8">
            <input type="password" placeholder="Password" id="password" class="outline-none border-b mt-8 py-1 text-lg">
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
      </div>
    </div>

  </div>
</template>


