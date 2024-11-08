<script setup>
import NewCard from './NewCard.vue';


</script>


<template>
<div class="container mx-auto pb-32">
  <div class="flex gap-8 ">
    <NewCard heading="PlayStation 5" text="black and white version of PS5 coming out on sale." class="flex-1">
    <img src="../assets/ps5.png" alt="" class="pl-2 mt-6"/>
    </NewCard>
    <!-- second  -->
    <div class="flex-1 flex flex-col gap-8">
      <div class="flex">

        <NewCard heading="Women’s Collections" text="Featured woman collections that give you another vibe." class="w-full">
        </NewCard>
        <img src="../assets/woman.png" alt="" class=""/>
      </div>

      <!-- small cards  -->
      <div class="flex gap-5 ">
        <NewCard heading="Speakers" text="Amazon wireless speakers." class="w-1/2">
          <img src="../assets/speakers.png" alt="" class="pl-24"/>
        </NewCard>
    <NewCard heading="Perfume" text="GUCCI INTENSE OUD EDP." class="w-1/2">
      <img src="../assets/perfume.png" alt="" class="pl-24"/>
    </NewCard>
      </div>
    </div>
  </div>
</div>
</template>
