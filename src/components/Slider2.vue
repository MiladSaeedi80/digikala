<template>
  <div>
    <div class="container-fluid slider-product p-0 hide-mobile-slider2">
      <section class="container p-0">
        <div class="row">
          <div class="col-lg-2 col-5 p-0">
            <div class="image-incredible">
              <img :src="require('@/assets/image/63494995.png')" class="img-fluid" alt="image-slider" loading="lazy">
              <div>
                <a href="#">مشاهده همه<span><i class="fas fa-chevron-left"></i></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-7">
            <div class="swiper-container slider-banner2">
              <!-- Additional required wrapper -->

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in informationProductSlider2" :key="index">
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



    <div class="container-fluid slider-product p-0 mt-2 d-none show-mobile-slider2">
      <section class="container p-0">
        <div class="row m-0">
          <div class="col-lg-12 col-12">
            <div class="swiper-container d-flex slider-banner2">
              <!-- Additional required wrapper -->

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center slide-incredible">
                    <div class="image-incredible">
                      <img :src="require('@/assets/image/63494995.png')" class="img-fluid" alt="image-slider" loading="lazy">
                      <div>
                        <a href="#" class="font-awesome-icons">مشاهده همه</a>
                      </div>
                  </div>
                </div>
              </div>

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in informationProductSlider2" :key="index">
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
import { Swiper, Pagination, Navigation} from "swiper";
Swiper.use([Pagination, Navigation]);
export default {
  props: {
    informationProductSlider2: {
      type: [Array , undefined],
      default : function () {
        return []
      }
    }
  },
  data() {
    return {

      // informationProduct : [
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      //   {
      //     src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
      //     title : '-macro-bahareh-سایز-170-130-سانتی-متر',
      //     gift : '۷,۴۰۰ تومان هدیه نقدی',
      //     discont : '26%',
      //     price : '1.66.300',
      //     orginalPrice : '859,000 تومان'
      //   },
      // ],
      slider_bannder2:null,
      infromationProducts: [
        {
          src : require(`@/assets/image/4ed2a95869b2ed3150fd9b9f294d37cf9b4a1294_1615795221.jpg`),
          title : '-macro-bahareh-سایز-170-130-سانتی-متر',
          gift : '۷,۴۰۰ تومان هدیه نقدی',
          discount : '26%',
          price : '1.66.300,',
          orginalPrice : '859,000 تومان'
        }
      ]

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
            "slidesPerView": 4,
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

.swiper-slide {
  width: 258px!important;
}

.slider-product {
  background: #ef394e;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: #fff;
}

.image-slider {
  border-radius: 16px;
  width: 180px;
}

.card {
  width: 263px;
  margin-top: 2.8em;
  margin-bottom: 2.8em;
  border-radius: 13px!important;
}

.card img {
  margin-top: 2em;
}

.information-product {
  text-align: right;
  padding: 23px;
}

.information-product h6 , span {
  font-size: .9rem;
  color: #62666d;
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

.image-incredible div a {
  padding: 8px 17px;
}

.image-incredible div a span {
  padding-right: .7rem;
  color: #fff;
}

@media (max-width : 420px) {
  .show-mobile-slider2 {
    display: block!important;
  }

  .hide-mobile-slider2 {
    display: none;
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

  .information-product {
    padding: 12px;
  }

  .slide-incredible {
    width: 177px!important;
  }

  .image-incredible img {
    margin: 4rem 0;
    width: 86%;
  }

  .information-product h6 {
    font-size: .8rem;
    line-height: 19px;
  }

  .image-incredible div a {
    border: none;
    padding: 10px 0;
    margin-right: 0;
    margin-left: 4rem;
  }

  .image-incredible div {
    margin-top: 0;
  }
}

</style>