<script setup>
import BestSelling from '@/components/BestSelling.vue';
import CategoryIcons from '@/components/CategoryIcons.vue';
import CountDownPromo from '@/components/CountDownPromo.vue';
import ExploreProducts from '@/components/ExploreProducts.vue';
import FlashSale from '@/components/FlashSale.vue';
import HeroSection from '@/components/HeroSection.vue'
import NewArrival from '@/components/NewArrival.vue';
import OurService from '@/components/OurService.vue';
</script>

<template>
  <header>
    <HeroSection />
    <FlashSale />
    <CategoryIcons />
    <BestSelling />
    <CountDownPromo />
    <ExploreProducts />
    <NewArrival />
    <OurService />
  </header>
</template>
