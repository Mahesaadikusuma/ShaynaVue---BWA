<template>
  <div>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
      <div class="container">
        <carousel class="logo-carousel" :autoplay="true" :items="5" :nav="false" :loop="true" :dots="false">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-1.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-2.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-3.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-4.png" alt="" />
            </div>
          </div>
          <div class="logo-item">
            <div class="tablecell-inner">
              <img src="img/logo-carousel/logo-5.png" alt="" />
            </div>
          </div>
        </carousel>
      </div>
    </div>
    <!-- Partner Logo Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "PatnerShayna",
  components: {
    carousel,
  },
};
</script>
