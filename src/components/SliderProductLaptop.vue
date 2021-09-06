<template>
  <div>
    <section class="container mt-4">
      <div class="row">
        <div class="col-lg-9" style="width: 80%">
          <div class="slider-prodcut_laptop">
            <h5>لپ تاپ و الترابوک</h5>
            <p>بر اساس بازدید های شما</p>
            <div class="swiper-container slider-banner2">
              <!-- Additional required wrapper -->

              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide text-center" v-for="(item, index) in informationProduct" :key="index">
                  <div class="card">
                    <img
                        :src="item.src"
                        class="img-fluid image-slider mx-auto"
                        alt="image-slider"
                        loading="lazy"
                    />
                    <div class="information-product">
                      <h6>{{ item.title }}</h6>
                    </div>
                    <div class="information-price-product">
                      <span v-if="item.discont">{{ item.discont }}</span>
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


        <!--side-bar-->
        <div class="col-lg-3" style="width: 20%">
          <div class="side-bar-slider">
            <h6 class="text-center">پیشنهاد های لحظه ای برای شما</h6>
            <hr>
            <img src="@/assets/image/image-sidebar-slider.jpg" class="img-fluid" alt="محصولات" loading="lazy">
            <h6 class="text-right title-product">هدفون بیبوشی مدل H5</h6>
            <div class="information-price-product">
              <span>50%</span>
              <sub>299.000</sub>
              <h6 class="mt-3">149.000 تومان</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, Pagination, Navigation} from "swiper";Swiper.use([Pagination, Navigation]);
export default {
  data() {
    return {
      informationProduct : [
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          discont : '26%',
          price : '1.66.300',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - E',
          orginalPrice : '26.722.000 تومان'
        },
      ],
      slider_bannder2:null,
      infromationProducts: [
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : '-macro-bahareh-سایز-170-130-سانتی-متر',
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

.slider-prodcut_laptop h5 {
  font-weight: 600;
  font-size: 1.2em;
}

.slider-prodcut_laptop p {
  font-size: .8em;
  font-weight: 500;
}

.slider-prodcut_laptop p::after {
  content: '';
  border: .5px solid red;
  width: 184px;
  height: 1px;
  position: absolute;
  top: 90px;
  right: 34px;
  opacity: .4;
}

.slider-prodcut_laptop p::before {
  content: '';
  border: .5px solid #dfdfdf;
  width: 72%;
  height: 1px;
  position: absolute;
  top: 90px;
  right: 240px;
  opacity: .8;
}

.swiper-slide {
  width: 180px!important;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: #fff;
}

.image-slider {
  border-radius: 16px;
}

.card {
  width: 190px;
  margin: 2rem 0;
  border: none;
  transition: all .2s;
  padding: 1rem;
  border-radius: 9px;
}

.card:hover {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  transform: translateY(-2px);
}

.information-product {
  text-align: right;
  padding: 0;
}

.information-product h6 {
  line-height: 1.8em;
  font-size: .8em;
}

.information-product h6 , span {
  color: #62666d;
}

.information-product span {
  display: flex;
  align-items: center;
  margin-top: 1.5em;
}

.information-product span::before {
  content: "";
  background: url("/image/7c53fd0f.svg") no-repeat 50%/cover;
  margin-left: .6em;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.information-price-product {
  text-align: left;
  padding: 0;
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



.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: black!important;
  font-size: 26px;
}

.information-price-product span {
  background: #ef394e;
  border-radius: 20px;
  padding: .5em;
  font-weight: 700;
  color: white;
}

.slider-prodcut_laptop {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border-radius: 8px;
  padding: 9px 33px 0 0;
  position: relative;
  height: 96%;
}

.title-product {
  margin-right: 1rem;
}

.side-bar-slider {
  height: 96.5%;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.03);
  border: 1px solid rgba(0,191,214,.3);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.information-price-product {
  text-align: left;
  padding: 10px 23px 10px 0;
}

.slider-prodcut_laptop p::before {
  content: '';
  border: .5px solid #dfdfdf;
  width: 72%;
  height: 1px;
  position: absolute;
  top: 90px;
  right: 240px;
  opacity: .8;
}

.slider-prodcut_laptop p::after {
  content: '';
  border: .5px solid red;
  width: 184px;
  height: 1px;
  position: absolute;
  top: 90px;
  right: 34px;
  opacity: .4;
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

@media(max-width : 420px) {
  .slider-prodcut_laptop , .side-bar-slider {
    display: none;
  }
}

</style>