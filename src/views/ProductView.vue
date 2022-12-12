<template>
  <div class="product">
    <HeaderShayna />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="photo_default" alt="" />
                </div>
                <div class="product-thumbs">
                  <carousel class="product-thumbs-track ps-slider" :dots="false" :nav="false">
                    <div class="pt" @click="changeImage(thumbs[0])" :class="thumbs[0] == photo_default ? 'active' : ' '">
                      <img src="img/mickey1.jpg" alt="" />
                    </div>

                    <div class="pt" @click="changeImage(thumbs[1])" :class="thumbs[1] == photo_default ? 'active' : ' '">
                      <img src="img/mickey2.jpg" alt="" />
                    </div>

                    <div class="pt" @click="changeImage(thumbs[2])" :class="thumbs[2] == photo_default ? 'active' : ' '">
                      <img src="img/mickey3.jpg" alt="" />
                    </div>

                    <div class="pt" @click="changeImage(thumbs[3])" :class="thumbs[3] == photo_default ? 'active' : ' '">
                      <img src="img/mickey4.jpg" alt="" />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum.
                      Commodi expedita animi nulla aspernatur. Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo
                      natus magni veniam quia sit nihil dolores. Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod.
                      Itaque inventore obcaecati, unde quam impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart"><a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <RelatedShayna />
    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderShayna from "@/components/HeaderShayna.vue";
// import carousel from "vue-owl-carousel";
import FooterShayna from "@/components/FooterShayna.vue";
import carousel from "vue-owl-carousel";
import RelatedShayna from "@/components/RelatedShayna.vue";

export default {
  name: "ProductView",
  components: {
    HeaderShayna,
    FooterShayna,
    carousel,
    RelatedShayna,
  },
  data() {
    return {
      photo_default: "img/mickey1.jpg",
      thumbs: ["img/mickey1.jpg", "img/mickey2.jpg", "img/mickey3.jpg", "img/mickey4.jpg"],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.photo_default = urlImage;
    },
  },
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 14px;
}
</style>
