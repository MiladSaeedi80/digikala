<template dir="rtl">
  <div id="app">

    <MobileNavBar/>

    <!--banner-header-->
    <img :src="require('@/assets/image/poster-top.jpg')" class="w-100 h-100 img-fluid" id="bannerNavbar" loading="lazy" alt="">

    <!--navbar-->
    <NavBar/>

    <!--slider-header-->
    <div class="header-style">
      <header class="container-fluid">
        <img :src="require('@/assets/image/15a530c97f79f663ec163a31d10c4cc627fd30a3_1630232679.gif')" class="w-100 mt-2 img-fluid banner-header" loading="lazy">
        <div class="row">
          <div class="col-lg-8 mt-3">
            <div class="swiper-container slider-banner">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in posts.sliderHeader" :key="index">
                  <img
                      :src="item"
                      class="img-fluid image-slider"
                      alt="image-slider"
                      loading="lazy"
                  />
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>

               <!--If we need navigation buttons -->
              <div class="header-swiper-button-prev"><i class="fas fa-chevron-right"></i></div>
              <div class="header-swiper-button-next"><i class="fas fa-chevron-left"></i></div>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <img :src="require('@/assets/image/8700d9f42376253e86ed95a5a67bbebd8c53ed43_1630496382.jpg')" class="w-100 h-auto img-fluid banner-slider" loading="lazy">
            <img :src="require('@/assets/image/81346d7b08cd40bf5a5498d23bb3367f49329ead_1630141605.gif')" class="w-100 h-auto img-fluid banner-slider" loading="lazy">
          </div>
        </div>
      </header>
    </div>

    <!--slider-product-owe-->
    <Slider2 :informationProductSlider2="posts.informationProductSlider2"/>

    <!--features-kala-->
    <section class="container-fluid">
      <div class="row p-2 show-mobile-features-kala">
        <div class="col-4 mx-auto text-center p-0" v-for="(item, index) in iconFooter" :key="index">
          <div class="features-kala text-center mt-2">
            <img :src="item.src" class="img-fluid" alt="ویژگی های کالا" loading="lazy">
            <h6>{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </section>

    <!--mobile-poster-product-discont-->
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="poster-product-discont">
            <hr>
            <img src="@/assets/image/image-slider4.jpg" class="img-fluid" alt="محصول تخفیف" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!--product-poster-->
    <section class="container">
      <div class="row">
        <div class="col-lg-3 col-6 hide-poster-product" v-for="(value, index) in posters" :key="index">
          <div>
            <img :src="value" class="img-fluid poster-product" alt="poster-product" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!--slider-product-two-->
    <SliderMarket/>

    <!--service-banner-->
    <section class="container">
      <div class="row">
        <div class="col-lg-6" v-for="(item, index) in serviceBanner" :key="index">
          <div class="banner-service mt-4">
            <img :src="item" class="img-fluid w-100 h-auto" alt="بنر" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!--Slider-Product-Laptop-->
    <SliderProductLaptop/>

    <!--different-Kala-->
    <section class="container different-kala">
      <div class="title-different-kala text-center mx-auto">
        <h5>بیش از ۴،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف</h5>
        <div class="row">
          <div class="col-lg-1" v-for="(item, index) in iconDifferentKala" :key="index">
              <span><i :class="item.icon"></i></span>
              <h6>{{ item.title }}</h6>
              <p>{{ item.number }}</p>
          </div>
        </div>
      </div>
    </section>

    <!--slider-product-mobile-->
    <SliderProductMobile/>

    <!--slider-bag-->
    <SliderBag/>

    <!--mobile-product-poster-->
    <section class="container-fluid">
      <div class="row p-2 line d-none">
        <hr class="mb-2">
        <div class="col-6 p-0" v-for="(item, index) in mobilePosterProduct" :key="index">
          <div class=" mt-2 poster-product-discont">
            <img :src="item" class="img-fluid" alt="پوستر محصولات">
          </div>
        </div>
      </div>
    </section>

    <!--service-banner2-->
    <section class="container mt-3 pt-1">
      <div class="row">
        <div class="col-lg-6" v-for="(value, index) in serviceBanner2" :key="index">
          <img :src="value" class="img-fluid poster-product" alt="poster-product" loading="lazy">
        </div>
      </div>
    </section>

    <!--slider-product-book-->
    <SliderProductBook :informationProductBook="posts.informationProductBook"/>

    <!--features-kala-->
    <section class="container-fluid ">
      <div class="row p-2 show-mobile-features-kala line ">
        <hr>
        <div class="col-6 mx-auto text-center p-0 mt-2" v-for="(item, index) in iconFooter2" :key="index">
          <div class="features-kala text-center mt-2">
            <img :src="item.src" class="img-fluid" alt="ویژگی های کالا" loading="lazy">
            <h6>{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </section>

    <!--mobile-poster-product-discont2-->
    <section class="container-fluid">
      <div class="row mt-3">
        <div class="col-12 p-0">
          <div class="poster-product-discont">
            <img src="@/assets/image/service-banner9.jpg" class="img-fluid" alt="محصول تخفیف" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!--service-banner-->
    <section class="container mt-2">
      <div class="row">
        <div class="col-lg-12">
          <img src="@/assets/image/service-banner11.jpg" class="img-fluid poster-product" alt="بنر" loading="lazy">
        </div>
      </div>
    </section>

    <!--slider-special-brands-->
    <SliderSpecialBrands/>
    <!--slider-selected-product-->
    <SliderSelectedProducts/>

    <!--footer-->
    <ComponentFooter/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import MobileNavBar from '@/components/MobileNavBar'
import Slider2 from '@/components/Slider2'
import SliderMarket from '@/components/SliderMarket'
import SliderProductLaptop from '@/components/SliderProductLaptop'
import SliderProductMobile from '@/components/SliderProductMobile'
import SliderBag from '@/components/SliderBag'
import SliderProductBook from '@/components/SliderProductBook'
import SliderSpecialBrands from '@/components/SliderSpecialBrands'
import SliderSelectedProducts from '@/components/SliderSelectedProducts'
import ComponentFooter from '@/components/ComponentFooter'

import 'swiper/swiper-bundle.css';
import { Swiper, Pagination, Navigation, Autoplay } from "swiper";
Swiper.use([Pagination, Navigation, Autoplay]);

export default {
  data() {
    return {
      slider_bannder:null,


      posters : [
        require(`@/assets/image/poster1.jpg`),
        require(`@/assets/image/poster2.jpg`),
        require(`@/assets/image/poster3.jpg`),
        require(`@/assets/image/poster4.jpg`),
      ],

      serviceBanner : [
        require(`@/assets/image/service-banner.jpg`),
        require(`@/assets/image/service-banner2.jpg`),
      ],

      iconDifferentKala : [
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
        {icon : 'fas fa-desktop' ,  title : 'کالای دیجیتال' , number : '860000 کالا'},
      ],

      servicePoster : [
        require(`@/assets/image/service-banner5.jpg`),
        require(`@/assets/image/service-banner6.jpg`),
        require(`@/assets/image/service-banner7.jpg`),
        require(`@/assets/image/service-banner8.jpg`),
      ],

      serviceBanner2 : [
        require(`@/assets/image/service-banner9.jpg`),
        require(`@/assets/image/service-banner10.jpg`),
      ],

      iconFooter: [
        {src : require(`@/assets/image/icon-footer.svg`) , title : 'امکان تحویل اکسپرس'},
        {src : require(`@/assets/image/icon-footer2.svg`), title : 'امکان پرداخت در محل'},
        {src : require(`@/assets/image/icon-footer4.svg`), title : '7 روز ضمانت بازگشت کالا'},
      ],

      iconFooter2: [
        {src : require(`@/assets/image/icon-footer3.svg`) , title : 'پشتیبانی 24 ساعته'},
        {src : require(`@/assets/image/icon-footer4.svg`), title : 'ضمانت اصل بودن کالا'},
      ],

      mobilePosterProduct : [
        require(`@/assets/image/service-banner5.jpg`),
        require(`@/assets/image/service-banner6.jpg`),
        require(`@/assets/image/service-banner7.jpg`),
        require(`@/assets/image/service-banner8.jpg`)
      ]
    }
  },

  components : {
    NavBar,
    Slider2,
    SliderMarket,
    SliderProductLaptop,
    SliderProductMobile,
    SliderBag,
    SliderProductBook,
    SliderSpecialBrands,
    SliderSelectedProducts,
    ComponentFooter,
    MobileNavBar
    },

  methods: {
    initSliderBanner() {
      this.slider_bannder = new Swiper(".slider-banner", {
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        // If we need pagination
        pagination: {
          clickable: true,
          el: ".slider-banner .swiper-pagination"
        },

        breakpoints : {
          "640" : {
            "slidesPerView": 1,
            "spaceBetween": 20
          }
        },

        // Navigation arrows
        navigation: {
          nextEl: ".slider-banner .header-swiper-button-next",
          prevEl: ".slider-banner .header-swiper-button-prev"
        }
      });
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },

  computed : {
    posts() {
      return this.$store.getters.posts
    }
  }
}
</script>

<style>





* {
  text-decoration: none;
  list-style: none;
  outline: none;
}

button:focus {
  box-shadow: none!important;
}

body {
  direction: rtl;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #f5f5f5 !important;
}

.header-style {
  padding: 0 3rem 1rem 3rem;
}

.banner-header {
  border-radius: 16px;
}

.banner-slider, .image-slider {
  border-radius: 16px;
  position: relative;
}

.header-swiper-button-prev {
  position: absolute;
  top: 50%;
  right: 28px;
  color: white;
  font-size: 1.7rem;
  z-index: 999;
}

.swiper-pagination-bullet-active {
  background: #10bde8;

}

.swiper-pagination-bullet {
  background: #10bde8;
  width: 12px;
  height: 12px
}

.header-swiper-button-next {
  position: absolute;
  top: 50%;
  left: 28px;
  color: white;
  font-size: 1.7rem;
  z-index: 999;
}

.banner-slider:nth-child(2) {
  margin-top: 12px;
}

.image-incredible img {
  margin: 6rem 2rem 0 2rem;
  width: 80%;
}

.image-incredible div {
  margin-top: 2rem;
}

.image-incredible div a {
  border-radius: 10px;
  padding: 10px 23px;
  font-size: 1rem;
  line-height: 1.571;
  font-weight: 500;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
}

.image-market img {
  margin-top: 6rem;
}

.image-market div a {
  border-radius: 10px;
  padding: 8px 23px;
  font-size: 1rem;
  line-height: 1.571;
  font-weight: 500;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin-right: 2rem;
  text-decoration: none;
}

.container-slider div:nth-child(2) img {
  width: 70%;
}

.hide-poster-product div {
  margin-top: 2rem;
}

.poster-product {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  cursor: pointer;
  border-radius: 16px;
}

.banner-service img{
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
}


/*slider-product-laptop*/
.side-bar-slider > h6 {
  margin-top: 1rem;
  font-size: .9em;
  font-weight: bold;
}

.side-bar-slider hr{
  color: red;
  width: 90%;
  text-align: center;
  margin: 1rem auto;
}

.side-bar-slider img {
  width: 90%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
}

.side-bar-slider div {
  margin: 1.3rem;
}

.information-price-product span {
  background: #ef394e;
  border-radius: 20px;
  padding: .5em;
  font-weight: 700;
  color: white;
}

.information-price-product sub {
  opacity: .7;
  font-size: 1rem;
  padding-left: .7em;
  font-weight: bold;
  text-decoration: line-through;
}

.poster-product-discont {
  display: none;
}

/*features-kala*/
.features-kala img {
  width: 49px;
  height: 49px;
}

.features-kala h6 {
  color: #424750;
  font-size: .65em;
  margin-top: .8rem;
}



/*different-Kala*/
.title-different-kala {
  overflow: hidden;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  padding: 1.2rem;
}

.title-different-kala h5 {
  color: #656565;
  font-size: 1.3em;
  opacity: .72;
  text-align: center;
}

.title-different-kala span {
  padding-top: 1rem;
  display: block;
  font-size: 2em;
  color: #00bfd6;
}

.title-different-kala h6 {
  font-size: .85em;
  color: #2a2a2a;
  margin-top: .8rem;
}

.title-different-kala p {
  color: #00bfd6;
  margin-top: 1.9rem;
  font-size: .82em;
}

.title-different-kala div div {
  margin-right: 1.2rem;
}

.show-mobile-features-kala {
  display: none!important;
}

/*responsive*/
@media (max-width : 420px) {
  .header-style {
    padding: 0;
  }

  #bannerNavbar {
    display: none!important;
  }

  .banner-header {
    height: 37px;
  }

  .image-slider {
    width: 100%;
    height: 150px!important;
  }

  .hide-poster-product div {
    margin-top: 0!important;
  }

  .show-mobile-features-kala {
    display: flex!important;
  }

  .hide-poster-product:nth-child(4) , .hide-poster-product:nth-child(3) , .banner-service , .different-kala , .banner-slider , .header-swiper-button-prev , .header-swiper-button-next , .poster-product{
    display: none;
  }

  .hide-poster-product:nth-child(1) , .hide-poster-product:nth-child(2) {
    padding: .2rem .3rem .2rem .3rem;
  }

  .poster-product-discont {
    display: block;

  }

  .poster-product-discont {
    width: 97%;
    margin: 0 auto;
    color: #b1b1b1;
  }

  .poster-product-discont img {
    border-radius: 15px;
    height: 141px;
    margin: 0 auto;
    width: 100%;
  }

  .line hr {
    width: 98%;
    margin: 0 auto;
    color: #ababab;
  }
}

</style>
