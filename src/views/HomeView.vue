<template>
  <div class="home">
    <HeaderShayna />
    <HeroShayna />
    <WomanShayna />
    <InstaShayna />
    <PatnerShayna />
    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderShayna from "@/components/HeaderShayna.vue";
// import carousel from "vue-owl-carousel";
import HeroShayna from "@/components/HeroShayna.vue";
import WomanShayna from "@/components/WomanShayna.vue";
import InstaShayna from "@/components/InstaShayna.vue";
import PatnerShayna from "@/components/PatnerShayna.vue";
import FooterShayna from "@/components/FooterShayna.vue";

export default {
  name: "HomeView",
  components: {
    HeaderShayna,
    HeroShayna,
    WomanShayna,
    InstaShayna,
    PatnerShayna,
    FooterShayna,
  },
};
</script>
