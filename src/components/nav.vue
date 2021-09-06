<template>
  <div>
    <div class="close-menu" @click="closeMenu" ref="closeMenu"></div>
    <nav class="container-fluid p-0">
      <div class="wrapper " id="navbarSupportedContent">
        <span @click="openMenu"><i class="fas fa-bars"></i></span>
        <div class="row">

          <div class="col-lg-10">

            <ul class="nav-link" ref="openMenu">
              <li>

                  <img src="@/assets/image/bc60cf05.svg" class="logo-menu" alt="" loading="lazy">
                  <hr class="text-secondary mt-2 p-0">

              </li>
              <li @click="showDropDown">

                <div class="d-flex justify-content-between">
                  <a href="#"><span class="d-inline-block"><i class="fas fa-bars icon-menu"></i></span>دسته بندی ها</a>
                  <span class="d-inline-block"><i class="fas fa-sort-down"></i></span>
                </div>

                <div class="mega-box1" ref="showMenuBox">
                  <ul>
                    <li>کالای دیجیتال</li>
                    <li>مد و پوشاک</li>
                    <li>اسباب بازی، کودک و نوزاد</li>
                    <li>کالا های سوپر مارکتی</li>
                    <li>ورزش و سلامت</li>
                  </ul>
                </div>
              </li>
              <li>
                <a href=""><span class="d-inline-block"><i class="fas fa-shopping-basket"></i></span>سوپر مارکت</a>
              </li>
              <li>
                <a href="" class="pr-4"><span class="pl-2"><i class="fas fa-percentage"></i></span>تخفیف و پیشنهاد ها</a>
              </li>
              <li>
                <a href=""><span class="d-inline-block"><i class="far fa-check-circle"></i></span>دیجی کالای من</a>
                <div class="mega-box">

                  <div class="content">

                    <div class="roww">
                      <span>مشاهده همه تخفیف ها و پیشنهاد ها</span>
                      <h6>کالا های شگفت انگیز</h6>
                      <h6>شگفت انگیز سوپر مارکتی</h6>
                      <h6>فروش ویژه</h6>
                      <ul class="drop-box">
                        <li>کالای دیجیتال</li>
                        <li>مد و پوشاک</li>
                        <li>اسباب بازی، کودک و نوزاد</li>
                        <li>کالا های سوپر مارکتی</li>
                        <li>زیبایی و سلامت</li>
                        <li>خانه و آشپزخانه</li>
                        <li>کتاب، لوازم التحریر و هنر</li>
                        <li>ورزش و سفر</li>
                      </ul>
                    </div>
                    <div class="roww2">
                      <span>محصولات بومی و محلی</span>
                      <ul class="drop-box pr-0">
                        <li>هشره کش و سوسک کش تا 70% تخفیف</li>
                        <li>اسباب بازی کمار از 99 هزار تومن</li>
                      </ul>

                      <span class="border-list"></span>

                      <ul class="drop-box">
                        <li>پر فروش ترین کالا ها</li>
                        <li>با هر خرید تخفیف بگیرید</li>
                        <li>تخفیف پایان فصل</li>
                        <li>کارت هدیه، خرید از دیجی کالا</li>
                        <li>تازه های فروشنده جدید</li>
                      </ul>
                    </div>
                    <div class="row-image">
                      <img src="@/assets/image/6e3a0619c2be053183dd813b45bbfd503a392075_1622303791.jpg" alt="" loading="lazy">
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href=""><span class="d-inline-block"><i class="fas fa-plus"></i></span>دیجی پلاس</a>
              </li>
              <li>
                <a href=""><span class="d-inline-block"><i class="fab fa-dashcube"></i></span>دیجی کلاب</a>
              </li>
              <li>
                <a href=""><span class="d-inline-block"><i class="fab fa-paypal"></i></span>دیجی پی</a>
              </li>
              <li>
                <a href="" class="desktop-item">سوالی دارید</a>
              </li>
              <li>
                <a href="">فروشنده شوید</a>
              </li>
            </ul>

          </div>
          <div class="col-lg-2">
            <div class="select-city">
              <span v-if="selectCity !== true">شهر و استان خود را انتخاب کنید</span>
              <span v-if="selectCity !== true"><i class="fas fa-map-marker-alt"></i></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  props:['selectCity'],

  data() {
    return {

    }
  },

  methods : {
    openMenu() {
      const navLink = this.$refs.openMenu
      const closeMenu = this.$refs.closeMenu
      navLink.classList.toggle("showMenu")
      closeMenu.classList.add('close-menu2')
      // closeMenu.classList.add('close-menu')
      console.log(navLink)
    },

    closeMenu() {
      const closeMenu = this.$refs.closeMenu
      const navLink = this.$refs.openMenu
      navLink.classList.remove("showMenu")
      closeMenu.classList.remove('close-menu2')
      console.log(closeMenu)
    },

    showDropDown() {
      const showMenuBox = this.$refs.showMenuBox
      showMenuBox.classList.toggle('showDropDown')
    }
  }
}
</script>

<style>


nav {
  width: 100%;
  z-index: 999;
}

.wrapper .nav-link {
  display: inline-flex;
}

.nav-link {
  padding: 1rem .7rem 0 1rem;
}

.wrapper > span {
  display: none;
}

.logo-menu {
  display: none;
}

nav .wrapper {
  position: relative;
}

.nav-link li a {
  text-decoration: none;
  color: #666;
  display:inline-block;
  margin: 0 .6rem 0 .6rem;
  text-transform:uppercase;
  font-size: .85em;
}

.nav-link li a:after {
  display:block;
  content: '';
  border-bottom: solid 2px #e70e28;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.nav-link li a:hover:after {
  transform: scaleX(1);
}

.nav-link li a span {
  padding-left: .5rem;
}


.nav-link .drop-menu {
  background: #e2e6ea;
  position: absolute;
  width: 180px;
  line-height: 45px;
  top: 45px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
  padding-right: .8rem;
}

.nav-link li:hover .drop-menu , .nav-link li:hover .mega-box {
  opacity: 1;
  visibility: visible;
}

.drop-menu li {
  text-align: right;
}

.drop-menu li a {
  width: 100%;
  display: block;
}

.mega-box {
  position: absolute;
  width: 55%;
  background: #f5f5f5;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
  right: 109px;
  border-radius: 8px;
  z-index: 999;
  top: 60px;
}

.mega-box1 {
  position: absolute;
  width: 15%;
  background: #f5f5f5;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
  right: 17px;
  border-radius: 8px;
  z-index: 999;
  top: 60px;
}

.mega-box1 ul {
  padding-right: 0;
}

.mega-box1 ul li {
  padding: .7rem 0 .7rem 0;
  color: #2d2d2d !important;
  font-size: .8em;
}

.nav-link li > span span:first-child {
  padding-left: .5rem;
}

.nav-link li div > span {
  color: #666 !important;
  font-size: .9em;
}

.icon-close {
  display: none;
}

.nav-link li span:nth-child(2) {
  display: none!important;
}

.mega-box1 ul li a {
  font-size: .8em;
}

.nav-link li:hover .drop-menu , .nav-link li:hover .mega-box1 {
  opacity: 1;
  visibility: visible;
}

.mega-box .content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 25px 20px;
}

.drop-box {
  text-align: right;
  padding-right: 0;
}

.drop-box li {
  color: white;
}

.content .row {
  width: calc(25% - 30px);
  line-height: 45px;
}

.row-image {
  text-align: left;
}

.roww {
  width: 41%;
}

.roww2 {
  padding-right: 3rem;

}

.content .roww > span {
  font-size: .9em;
  color: #666;
}

.content .roww > h6 {
  font-weight: bold;
  color: #1d2124;
  text-align: right;
  font-size: 1em;
  margin-top: .8rem;
}

.content .roww ul {
  padding-right: .2rem;
}

.content .roww ul li {
  font-size: .9em;
  color: #717171;
  padding-top: .6rem;
}

.content .roww2 span {
  text-align: right;
  margin: 2rem 0 0 .7rem;
  font-size: .95em;
  display: block;
}

.content .roww2 ul li {
  font-size: .8em;
  color: #717171;
  padding-top: .6rem;
  text-align: right;
}

.border-list {
  border: .5px solid #ddd;
}

.roww2 .drop-box:last-child {
  margin-top: 1rem;
}

.roww2 .drop-box:last-child li {
  font-size: .9em;
  color: #1d2124;
  font-weight: 600;
}

.row-image img {
  width: 100%;
  height: 90%;
}

.close-menu {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: -1;
}

.close-menu2 {
  z-index: 10;
  background: #000;
  opacity: .17;
}

.select-city {
  margin: 1rem 1.6rem;
  cursor: pointer;
}

.select-city span:first-child {
  font-size: .8em;
  color: #616161;
}

.select-city span:last-child {
  font-size: .8em;
  color: #616161;
  padding-right: .3rem;
}


/*responsive*/
@media (max-width : 970px) {
  .mega-box .content {
    display: none;
  }

  .wrapper > span {
    display: block;
    font-size: 1.5rem;
    color: #5c5c5c;
  }

  .wrapper .nav-link {
    position: fixed;
    width: 100%;
    height: 100vh;
    max-width: 284px;
    background: #fff;
    top: 0;
    right: -100%;
    line-height: 50px;
    padding: 20px 11px;
    z-index: 999;
    display: block;
    transition: all .2s ease;
  }

  .logo-menu {
    display: block;
  }

  .showMenu {
    right: 0!important;
  }

  .nav-link li a {
    color: #575757 !important;
    font-size: .95em;
  }

  .nav-link li a span {
    padding-left: .8rem;
  }

  .nav-link li > span {
    color: #575757 !important;
    font-size: .95em;
    padding-right: .7rem;
  }

  .nav-link li span span {
    padding-left: .8rem;
  }

  .content .roww img {
    width: 100%;
  }

  .mega-box1 ul {
    padding-right: .9rem;
  }

  .mega-box1 ul li {
    padding: .2rem 0 .2rem 0;
  }
  .mega-box1 {
    position: inherit;
    width: 100%;
    opacity: 0!important;
    visibility: hidden!important;
    height: 0;
  }

  .showDropDown {
    visibility: visible!important;
    height: 283px;
    opacity: 1!important;
  }

  .icon-menu {
    display: none!important;
  }

  .nav-link li div > span {
    padding: 0;
  }

  .nav-link li div > span:nth-child(2) {
    display: block!important;
  }

  .nav-link li a:after {
    border: none;
  }

}
</style>