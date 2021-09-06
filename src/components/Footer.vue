<template>
  <div>
    <footer class="container-fluid p-0">
      <div class="container">
        <div class="row">

          <!--title-footer-->
          <div class="title-footer mt-5 d-flex justify-content-between">
            <div class="logo-footer" :style="{ 'background-image': 'url(' + logoFooter + ')' }"></div>
            <a href="#bannerNavbar">بازگشت به بالا<span><i class="fas fa-chevron-up"></i></span></a>
          </div>

          <!--footer-phone-number-->
          <div class="footer-phone-number mt-3">
            <span>تلفن پشتیبانی: ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
            <span>|</span>
            <span>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</span>
          </div>

          <!--features-kala-->
          <div class="col-lg-2 mx-auto text-center hide-mobile-features-kala" v-for="(item,index) in iconFooter" :key="index">
            <div class="">
              <div class="features-kala text-center mt-5">
                <img :src="item.src" class="img-fluid" alt="ویژگی های کالا" loading="lazy">
                <h6>{{ item.title }}</h6>
              </div>
            </div>
          </div>

          <hr class="mt-4 text-secondary">

          <!--features-and-help-digikala-->
          <div class="col-lg-2 col-6">
            <h6>با دیجی کالا</h6>
            <ul class="features-and-help-digikala pt-1 p-0">
              <li>اتاق خبر دیجی کالا</li>
              <li>فروش در دیجی کالا</li>
              <li>فرصت های شغلی</li>
              <li>تماس با دیجی کالا</li>
              <li>درباره دیجی کالا</li>
            </ul>
          </div>

          <div class="col-lg-3 col-6">
            <div class="list-serivce">
              <h6>خدمات مشتریان</h6>
              <ul class="features-and-help-digikala pt-1">
                <li>نحوه ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه های پرداخت</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 hide-mobile-features-nth-child-3">
            <h6>راهنمای خرید از دیجی کالا</h6>
            <ul class="features-and-help-digikala pt-1 p-0">
              <li>اتاق خبر دیجی کالا</li>
              <li>فروش در دیجی کالا</li>
              <li>فرصت های شغلی</li>
              <li>تماس با دیجی کالا</li>
              <li>تماس با دیجی کالا</li>
            </ul>
          </div>

          <div class="col-lg-4">
              <div class="box-social-network">
                <h6>با ما همراه باشید</h6>
                <ul class="d-flex Social-Networks">
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                </ul>
              </div>
              <h6 class="mt-5 title-news">از جدید ترین خبر ها با خبر بشید</h6>
              <form action="#" class="form-news mt-4">
                <input type="email" class="form-control" placeholder="آدرس ایمیل خود را وارد کنید">
                <button type="submit" class="btn">ثبت</button>
              </form>
          </div>

          <!--application-donwload-->
          <section class="container mt-4 hide-application-download">
            <div class="row">
              <div class="application-download d-flex justify-content-between">
                <div class="title-logo-digikala d-flex">
                  <img src="@/assets/image/59d36e01.svg" alt="digikala" loading="lazy">
                  <h5>دانلود اپلیکیشن دیچی کالا</h5>
                </div>
                <div>
                  <a href="#"><img src="@/assets/image/6f0c9aeb.svg" class="img-fluid" alt="دریافت از دیچی کالا" loading="lazy"></a>
                  <a href=""><img src="@/assets/image/b43d144f.svg" class="img-fluid" alt="دریافت از بازار" loading="lazy"></a>
                  <a href=""><img src="@/assets/image/401848fb.png" class="img-fluid" alt="دریافت از مایکت" loading="lazy"></a>
                  <a href=""><i class="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>
          </section>

          <!--mobile-application-donwload-->
          <section class="container mt-4 show-application-download">
            <div class="row application-download">
                <div class="title-logo-digikala">
                  <h5>دانلود اپلیکیشن دیچی کالا</h5>
                  <span>اطلاعات بیشتر<span><i class="fas fa-chevron-left"></i></span></span>
                </div>
                <div class="col-6 p-0" v-for="(item, index) in mobileApplicationDownload" :key="index">
                  <div class="mt-3 box-img-download">
                    <a href="#">
                      <img :src="item.src" class="img-fluid" alt="دریافت از دیچی کالا" loading="lazy">
                    </a>
                  </div>
                </div>
            </div>
          </section>

          <!--about-digikala-->
          <article class="container p-0">
            <div class="row m-0 d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="about-digikala">
                  <h6>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h6>
                  <p>دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد</p>
                </div>
              </div>
              <div class="col-lg-4 col-4 p-0">
                <div class="symble-trust d-flex">
                  <a href="#"><img src="@/assets/image/6e2d6b38.png" alt="" loading="lazy"></a>
                  <a href="#"><img src="@/assets/image/236e437c.png" alt="" loading="lazy"></a>
                  <a href="#"><img src="@/assets/image/236e437c.png" alt="" loading="lazy"></a>
                </div>
              </div>
            </div>
          </article>
          <hr class="mt-5 text-secondary border-top-copy">

          <!--copyright-->
          <div class="copyright text-center">
            <p>استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد غیرتجاری و با ذکر منبع
              بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.</p>
          </div>
        </div>
      </div>

      <!--partners-->
      <section class="container-fluid container-partners" style="background: #f2f2f2">

          <div class="row">
            <ul class="d-flex partners p-0 m-0">
              <li v-for="(item, index) in partners" :key="index">
                <a href="#">
                  <img :src="item.src" class="img-partners" alt="" loading="lazy">
                </a>
              </li>
            </ul>
          </div>

      </section>
    </footer>


  </div>
</template>

<script>
export default {
  data() {
    return {
      logoFooter : require(`@/assets/image/logo-footer.svg`),
      iconFooter: [
        {src : require(`@/assets/image/icon-footer.svg`) , title : 'امکان تحویل اکسپرس'},
        {src : require(`@/assets/image/icon-footer2.svg`), title : 'امکان پرداخت در محل'},
        {src : require(`@/assets/image/icon-footer3.svg`), title : '7 روز هفته، 24 ساعته'},
        {src : require(`@/assets/image/icon-footer4.svg`), title : '7 روز ضمانت بازگشت کالا'},
        {src : require(`@/assets/image/icon-footer5.svg`), title : 'ضمانت اصل بودن کالا'},
      ],

      partners : [
        {src : require(`@/assets/image/ea7f1514.svg`)},
        {src : require(`@/assets/image/2a7efb04.svg`)},
        {src : require(`@/assets/image/76d0ad0e.svg`)},
        {src : require(`@/assets/image/4e4213a7.svg`)},
        {src : require(`@/assets/image/a0e67dd7.svg`)},
        {src : require(`@/assets/image/d460e183.svg`)},
        {src : require(`@/assets/image/7069844a.svg`)},
        {src : require(`@/assets/image/dff36048.svg`)},
        {src : require(`@/assets/image/a3985b44.svg`)},
        {src : require(`@/assets/image/eca9dab5.svg`)},
        {src : require(`@/assets/image/eca9dab5.svg`)},
        {src : require(`@/assets/image/b7bd862f.svg`)}
      ],

      mobileApplicationDownload : [
        {src : require(`@/assets/image/dd753f51.png`)},
        {src : require(`@/assets/image/f822b108 (1).svg`)},
        {src : require(`@/assets/image/692fd5db.svg`)},
        {src : require(`@/assets/image/c4abfc14.png`)},
      ]
    }
  }
}
</script>

<style scoped>

footer {
  background: #fff;
}

.title-footer a {
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid #a1a3a8;
  border-radius: 8px;
  height: 45px;
  color: #a1a3a8;
  padding: 10px 25px;
  text-decoration: none;
  font-weight: bold;
}

.title-footer a span {
  padding: .7rem .7rem 0 0;
  font-size: .8em;
}

.logo-footer {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 34px;
  width: 135px;
}

.list-serivce h6 {
  margin-right: 2.6rem;
}

.footer-phone-number span {
  color: #424750;
  font-size: .9em;
}

.footer-phone-number span:nth-child(2) {
  margin: 0 1.6rem;
  color: #dddddd;
}

.features-kala img {
  width: 54px;
  height: 54px;
}

.features-kala h6 {
  color: #424750;
  font-size: .8em;
  margin-top: .8rem;
}

.features-and-help-digikala li {
  font-size: .9em;
  color: #81858b;
  margin-top: 1.1rem;
}

.form-news {
  display: flex;
}

.form-news input {
  border-radius: 8px;
  background: #f0f0f1;
  border: none;
  color: #81858b;
  font-size: .95em;
  padding: 0 1rem;
  box-shadow: none;
}

.form-news button {
  width: 57px;
  height: 48px;
  border: none;
  color: #fff;
  margin-right: 8px;
  border-radius: 8px;
  text-align: center;
  background: #e0e0e2;
}

.Social-Networks {
  padding: 0;
  margin-top: 1.5rem;
}

.Social-Networks li a {
  font-size: 1.6em;
  color: #a1a3a8;
  margin-left: 2.7rem;
}

.application-download {
  background-color: #3c4b6d;
  padding: 1rem 1.2rem;
  border-radius: 8px;
}

.application-download div a:last-child {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  background-color: #fff;
  padding: .55rem .9rem .55rem .9rem;
  color: #030a16;
}

.application-download div {
  text-align: left;
}
.application-download div a img {
  width: 150px;
}

.application-download div a {
  margin-left: 1rem;
}

.title-logo-digikala img {
  width: 50px;
}

.show-application-download {
  display: none;
}

.title-logo-digikala h5 {
  margin: .75rem 1rem 0 0;
  color: #fff;
}

.about-digikala h6 {
  margin-top: 2rem;
  color: #424750;
  font-weight: bold;
  font-size: 1em;
}

.about-digikala p {
  margin-top: 1rem;
  color: #81858b;
  font-size: .857rem;
  line-height: 26px;
}

.symble-trust {
  margin-top: 3.5rem;
}

.symble-trust a {
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 1rem 1.3rem;
  margin-left: .9rem;
}


.copyright p {
  color: #81858b;
  font-weight: bold;
  font-size: .9em;
  margin-top: .5rem;
}

.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.partners li{
  padding: 2.5rem .7rem;
  border-left: 1px solid #e0e0e2;
  flex-basis: 60px;
}

.partners li:first-child{
  padding: 2.5rem 0 0 1.3rem;
}

.partners li:last-child{
  border: none;
}

/*responsive*/

@media (max-width : 420px) {
  .hide-mobile-features-kala , .hide-mobile-features-nth-child-3 , .hide-application-download {
    display: none;
  }

  .logo-footer {
    background-size: contain;
    height: 30px;
    width: 100px;
  }

  .title-footer a {
    height: 33px;
    padding: 7px 21px;
    font-size: .75em;
  }

  .footer-phone-number span:nth-child(2) {
    display: none;
  }

  .footer-phone-number span {
    font-size: .75em;
    display: block;
    margin-top: .5rem;
  }

  .features-and-help-digikala , .list-serivce h6 {
    padding: 0;
    margin-right: 0;
  }

  .show-application-download {
    display: block;
  }

  .application-download {
    background: #fff;

  }

  .application-download div a img {
    width: 148px!important;
    margin-right: .7rem;
  }

  .application-download {
    padding: 1rem .1rem;
  }

  .title-logo-digikala {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .application-download div a {
    padding-left: .3rem!important;
  }

  .title-logo-digikala img {
    display: none;
  }

  .title-logo-digikala h5 {
    color: #1d1d1d;
    font-size: .9em;
    margin: 0;
  }

  .title-logo-digikala span {
    font-size: .8em;
    color: #00bfd6;
  }

  .title-logo-digikala span span {
    padding-right: .5rem;
  }

  .application-download div a:last-child {
    padding: .55rem 0;
  }

  .box-social-network {
    display: flex;
    align-items: center;
  }

  .Social-Networks {
    margin-right: 1.5rem;
  }

  .Social-Networks li a {
    margin: 0 1.7rem 0 0;
    font-size: 1.5em;
  }

  .title-news {
    display: none;
  }

  .form-news {
    margin-top: .5rem!important;
  }

  .about-digikala h6 {
    border-top: 1px solid #dddddd;
    font-size: .85em;
    margin-top: 0;
    padding-top: .8rem;
  }

  .about-digikala p {
    font-size: .7em;
  }

  .symble-trust {
    display: flex;
    margin: .8rem auto;
    flex-direction: row;
    justify-content: center;
    padding-right: 12%;
  }

  .symble-trust a {
    padding: .5rem .5rem;
    margin-left: .9rem;
  }

  .symble-trust a img {
    width: 83px;
  }

  .copyright p {
    font-size: .7em;
    line-height: 21px;
  }

  .border-top-copy {
    margin: .8rem auto!important;
    width: 90%;
  }

  .partners {
    display: flex;
    flex-wrap: wrap;
  }

  .partners li {
    flex: 0 0 33.3333%;
    padding: 2rem .7rem;
  }

  .partners li:first-child {
    padding-right: .5rem;
  }

  .partners li[data-v-40ab164b]:last-child {
    border-left: 1px solid #dddddd;
  }

  .img-partners {
    width: 100%;
    max-height: 20px;
  }

}

</style>