<script setup>
import Hanger from 'vue-material-design-icons/Hanger.vue';
import FoodAppleOutline from 'vue-material-design-icons/FoodAppleOutline.vue';
import HomeCityOutline from 'vue-material-design-icons/HomeCityOutline.vue';
import TelevisionClassic from 'vue-material-design-icons/TelevisionClassic.vue';
import Laptop from 'vue-material-design-icons/Laptop.vue';
import Cellphone from 'vue-material-design-icons/Cellphone.vue';
import Dumbbell from 'vue-material-design-icons/Dumbbell.vue';
import BabyFaceOutline from 'vue-material-design-icons/BabyFaceOutline.vue';
import GamepadVariantOutline from 'vue-material-design-icons/GamepadVariantOutline.vue';
import LotionOutline from 'vue-material-design-icons/LotionOutline.vue';

</script>
<template>
  <div class="w-[15vw] border-r">
      <ul class="text-lg flex flex-col gap-2 ">
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400" >
            <Hanger />
            Fashion
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <FoodAppleOutline/>
            Supermarket
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <HomeCityOutline/>
            Home & Office
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <TelevisionClassic/>
            Electronics
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <TelevisionClassic/>
            Appliances
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <Laptop/>
            Computing
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <Cellphone/>
            Phones & Tablets
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <Dumbbell/>
            Sports & Outdoor
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <BabyFaceOutline/>
            Baby Products
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <GamepadVariantOutline/>
            Gaming
          </li>
        </router-link>
        <router-link>
          <li class="flex gap-2 items-center hover:text-red-400">
            <LotionOutline/>
            Health & Beauty
          </li>
        </router-link>
       
      </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>