<template>
  <div>
    <section class="container mt-4 slider-mobile">
      <div class="row">

        <!--side-bar-->
        <div class="col-lg-3 col-12 mobiel-box-login" style="width: 23%">
          <div class="box-SideBar-login">
            <span><i class="far fa-check-circle"></i></span>
            <h6>شخصی سازی پیشنهاد ها!</h6>
            <p>برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا وارد حساب کاربری شوید.</p>
            <a href="#" class="login-digikala">ورود به حساب دیجی کالا</a>
            <br>
            <a href="#">ثبت نام رایگان در صورت نداشتن حساب کاربری</a>
          </div>
        </div>


        <div class="col-lg-9 col-12 mobiel-box-login" style="width: 77%">
          <div class="slider-prodcut_laptop">
            <h5 class="mt-2">گوشی موبایل</h5>
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
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          discont : '21%',
          price : '25.500.000',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
        {
          src : require(`@/assets/image/product-mobile.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌',
          orginalPrice : '4.199.000 تومان'
        },
      ],
      slider_bannder2:null,
      infromationProducts: [
        {
          src : require(`@/assets/image/product-laptop.jpg`),
          title : 'گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت',
          orginalPrice : '4.199.000 تومان'
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
  top: 83px;
  right: 34px;
  opacity: .4;
}

.slider-prodcut_laptop p::before {
  content: '';
  border: .5px solid #dfdfdf;
  width: 72%;
  height: 1px;
  position: absolute;
  top: 83px;
  right: 240px;
  opacity: .8;
}

.swiper-slide {
  width: 169px!important;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  color: #fff;
}

.image-slider {
  border-radius: 16px;
}

.card {
  width: 185px;
  margin: .8rem 0;
  border: none;
  transition: all .2s;
  padding: 1rem;
  border-radius: 9px;
}

.card:hover {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  transform: translateY(-2px);
}

.box-SideBar-login {
  border-radius: 8px;
  background: #fff;
  border: 1px solid #ededed;
  padding: 2.5rem 1.5rem 1.5rem;;
  text-align: center;
}

.box-SideBar-login span {
  font-size: 2.7em;
  color: #4caf50;
}

.box-SideBar-login h6 {
  margin-top: 1.2rem;
  font-size: 1.1em;
  color: #232933;
  font-weight: 400;
}

.box-SideBar-login p {
  color: #62666d;
  margin: 2.2rem auto;
  font-size: .9em;
  line-height: 25px;
}

.box-SideBar-login .login-digikala {
  padding: .8rem 1rem;
  font-size: .9em;
  font-weight: 700;
  background-color: #ef394e;
  color: #fff;
  border: 1px solid #ef394e;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
}

.box-SideBar-login a {
  font-size: .75em;
  text-decoration: none;
  color: #81858b;
  display: block;
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
  font-size: .8rem;
  color: #62666d;
  margin-top: 1em;
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
  padding: 9px 33px 11px 0;
  position: relative;
  height: 98%;
}

.information-price-product {
  text-align: left;
  padding: 10px 23px 10px 0;
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
  .slider-mobile {
    margin-top: 0!important;
  }

  .mobiel-box-login {
    width: 100%!important;
  }
  .slider-prodcut_laptop p:before , .slider-prodcut_laptop p:after , .swiper-button-next , .swiper-button-prev {
    display: none;
  }
  .swiper-slide {
    width: 202px!important;
  }

  .slider-prodcut_laptop {
    background: #f5f5f5;
  }

  .slider-prodcut_laptop {
    padding: 9px 0px 11px 0;
    box-shadow: none;
  }

  .information-price-product {
    padding: 0;
  }

  .card {
    padding: .6rem;
    width: 192px;
  }

  .image-slider {
    width: 151px;
  }

  .information-price-product h6 {
    font-size: .9em;
  }

  .slider-prodcut_laptop h5 {
    font-size: .9em;
    color: #b1b1b1;
    border-top: 1px solid #dddddd;
    padding-top: 1rem;
  }

  .slider-prodcut_laptop p {
    font-size: .75em;
    color: #b1b1b1
  }

}

</style>