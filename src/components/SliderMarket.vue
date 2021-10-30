<template>
  <div>
    <div class="container-fluid slider-market mt-4 hide-mobile-slider-market">
      <section class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="image-market">
              <img :src="require('@/assets/image/image-super-market.png')" class="w-100 img-fluid" alt="super-market" loading="lazy">
              <div class="mt-4">
                <a href="#">مشاهده همه<span><i class="fas fa-chevron-left"></i></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="swiper-container slider-banner3">
              <!-- Additional required wrapper -->

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in informaionSliderMarket" :key="index">
                  <div class="card">
                    <img
                        :src="item.src"
                        class="img-fluid image-slider mx-auto"
                        alt="image-slider"
                        loading="lazy"
                    />
                    <div class="information-product">
                      <h6>{{ item.title }}</h6>
                      <span>{{ item.gift }}</span>
                    </div>
                    <div class="information-price-product">
                      <span>{{ item.discont }}</span>
                      <sub>{{ item.price }}</sub>
                      <h6 class="mt-3">{{ item.orginalPrice }}</h6>
                    </div>
                  </div>
                </div>
              </div>

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container-fluid slider-market d-none show-mobile-slider-market">
      <section class="container">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="swiper-container slider-banner2">
              <!-- Additional required wrapper -->

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center slide-image-market">
                  <div class="image-market">
                    <img :src="require('@/assets/image/image-super-market.png')" class="w-100 img-fluid" alt="super-market" loading="lazy">
                    <div class="mt-5">
                      <a href="#">مشاهده همه<span><i class="fas fa-chevron-left"></i></span></a>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide text-center" v-for="(item, index) in informaionSliderMarket" :key="index">
                  <div class="card">
                    <img
                        :src="item.src"
                        class="img-fluid image-slider mx-auto"
                        alt="image-slider"
                        loading="lazy"
                    />
                    <div class="information-product">
                      <h6>{{ item.title }}</h6>
                      <span>{{ item.gift }}</span>
                    </div>
                    <div class="information-price-product">
                      <span>{{ item.discont }}</span>
                      <sub>{{ item.price }}</sub>
                      <h6 class="mt-3">{{ item.orginalPrice }}</h6>
                    </div>
                  </div>
                </div>
              </div>

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, Pagination, Navigation} from "swiper";Swiper.use([Pagination, Navigation]);
export default {


  props : {
    informaionSliderMarket: {
      type : [Array , undefined],
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      // informaionSliderMarket : [
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/image-market1.jpg`),
      //     title : 'مایع دستشویی کرمی داو مدل Deeply Nourishing حجم 500 میلی لیتر',
      //     gift : '۱,۳۰۰ تومان هدیه نقدی',
      //     discont : '۱۴٪',
      //     price : '۴۶,۵۰۰',
      //     orginalPrice : '۳۹,۹۰۰ تومان'
      //   },
      // ],
      slider_bannder2:null,
    }
  },
  methods: {
    initSliderBanner() {
      this.slider_bannder3 = new Swiper(".slider-banner3", {
        slidesPerView: 1,
        pagination: {
          clickable: true,
          el: ".slider-banner3 .swiper-pagination"
        },

        breakpoints : {
          "640" : {
            "slidesPerView": 4,
            "spaceBetween": 20
          }
        },

        // Navigation arrows
        navigation: {
          nextEl: ".slider-banner3 .swiper-button-next",
          prevEl: ".slider-banner3 .swiper-button-prev"
        },
      });
    },
  },
  watch: {
    informaionSliderMarket() {
      this.$nextTick(()=>{
        this.initSliderBanner()
      })
    }
  }
}
</script>

<style scoped>

.swiper-slide {
  width: 251px!important;
}

.slider-market {
  background: #6bb927;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: #fff;
}

.image-slider {
  border-radius: 16px;
}

.card {
  width: 263px;
  margin-top: 2.8em;
  margin-bottom: 2.8em;
  border-radius: 13px!important;
}

.card img {
  margin-top: 2em;
  width: 180px;
  height: 180px;
}

.information-product {
  text-align: right;
  padding: 23px;
}

.information-product h6 , span {
  font-size: .857rem;
  line-height: 25px;
  color: #535353;
}

.information-product span {
  display: flex;
  align-items: center;
  margin-top: 1.5em;
}

.information-product span::before {
  content: "";
  background: url("../../src/assets/image/7c53fd0f.svg") no-repeat 50%/cover;
  margin-left: .6em;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.information-price-product {
  text-align: left;
  padding: 10px 23px 10px 23px;
}

.information-price-product span {
  background: #ef394e;
  border-radius: 20px;
  font-weight: 700;
  color: white;
  font-size: .8em;
}

.information-price-product h6 {
  font-weight: bold;
  font-size: .95em;
}

.information-price-product sub {
  opacity: .4;
  font-size: .9em;
  padding-left: .7em;
  font-weight: bold;
  text-decoration: line-through;
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

.image-market div a {
  padding: 8px 17px;
}

.image-market div a span {
  padding-right: .7rem;
  color: #fff;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: black!important;
  font-size: 26px;
}

@media (max-width : 420px) {
  .slider-market {
    margin-top: .5rem!important;
  }

  .hide-mobile-slider-market {
    display: none;
  }

  .show-mobile-slider-market {
    display: block!important;
  }

  .swiper-button-next , .swiper-button-prev {
    display: none;
  }

  .information-price-product {
    padding: 9px 2px 10px 24px;
  }

  .card {
    width: 208px;
  }

  .swiper-slide {
    width: 218px!important;
  }

  .slide-image-market {
    width: 152px!important;
  }

  .image-market img {
    margin: 8rem 0 0 0;
    width: 100% !important;
  }

  .image-market h6 {
    font-size: .8rem;
    line-height: 19px;
  }

  .image-market div a {
    border: none;
    padding: 10px 0;
    margin-right: 0;
    margin-left: 3rem;
  }

  .information-product h6 {
    font-size: .8em;
  }

  .image-market {
    padding: 0;
  }
}

</style>