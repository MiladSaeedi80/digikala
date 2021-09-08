<template>
  <div>
    <section class="container mt-4">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-prodcut_laptop">
            <h5 class="mt-2">برند های ویژه</h5>
            <p></p>
            <div class="swiper-container slider-banner2">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in informationProduct" :key="index">
                  <div class="card">
                    <img
                        :src="item"
                        class="img-fluid image-slider mx-auto"
                        alt="image-slider"
                        loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>
require(`@/assets/image/product-brands.jpg`),
<script>
import 'swiper/swiper-bundle.css';
import { Swiper, Pagination, Navigation} from "swiper";Swiper.use([Pagination, Navigation]);
export default {
  data() {
    return {
      informationProduct : [
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
        require(`@/assets/image/product-brands.jpg`),
      ],

      slider_bannder2:null,
    }
  },
  methods: {
    initSliderBanner() {
      this.slider_bannder2 = new Swiper(".slider-banner2", {
        slidesPerView: 1,
        pagination: {
          clickable: true,
          el: ".slider-banner2 .swiper-pagination"
        },

        breakpoints : {
          "640" : {
            "slidesPerView": 5,
            "spaceBetween": 20
          }
        },

        // Navigation arrows
        navigation: {
          nextEl: ".slider-banner2 .swiper-button-next",
          prevEl: ".slider-banner2 .swiper-button-prev"
        },
      });
    },
  },
  mounted(){
    this.initSliderBanner()
  }
}
</script>

<style scoped>

.slider-prodcut_laptop {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  padding: 9px 33px 11px 0;
  position: relative;
  height: 98%;
}

.slider-prodcut_laptop h5 {
  font-weight: 600;
  font-size: 1.2em;
}

.slider-prodcut_laptop p::after {
  content: '';
  border: .5px solid red;
  width: 147px;
  height: 1px;
  position: absolute;
  top: 48px;
  right: 33px;
  opacity: .4;
}

.slider-prodcut_laptop p::before {
  content: '';
  border: .5px solid #dfdfdf;
  width: 78%;
  height: 1px;
  position: absolute;
  top: 48px;
  right: 230px;
  opacity: .8;
}

.swiper-slide {
  width: 237px!important;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: #fff;
}

.image-slider {
  border-radius: 16px;
}

.card {
  width: 240px;
  margin: .8rem 0;
  border: none;
  transition: all .2s;
  padding: 1rem;
  border-radius: 9px;
}

.card img {
  width: 70%;
  height: 70%;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: black!important;
  font-size: 26px;
}

.swiper-button-next {
  position: absolute;
  top: 39%;
  width: 43px;
  box-shadow: 1.5px 0 4px 0 rgb(0 0 0 / 15%);
  height: 85px;
  border-radius: 5px;
  left: 0!important;
  z-index: 999;
  background: #fff;
}

.swiper-button-prev {
  position: absolute;
  top: 39%;
  width: 46px;
  box-shadow: 1.5px 0 4px 0 rgb(0 0 0 / 15%);
  height: 85px;
  border-radius: 5px;
  right: 0!important;
  background: #fff;
  z-index: 999;
}

/*responsive*/

@media (max-width : 420px) {
  .slider-prodcut_laptop {
    display: none;
  }
}

</style>