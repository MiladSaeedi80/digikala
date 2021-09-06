<template>
  <div>
    <section class="container-fluid pt-3 navbar-mobile" style="background:#fff;">

      <div class="row">
        <div class="d-flex justify-content-between mobile-logo-nav">
          <div class="col-lg-2">
            <Nav :selectCity="true" class="navbar"/>
          </div>
          <div class="col-lg-4">
            <img src="@/assets/image/bc60cf05.svg" alt="دیجی کالا" class="img-fluid" style="margin-left: 3.1rem;" loading="lazy">
          </div>

          <div class="col-lg-4">
            <span><i class="fas fa-question-circle" style="font-size: 1.4em"></i></span>
          </div>
        </div>

        <hr class="text-center mx-auto text-secondary" style="width: 95%;">

        <div class="d-flex justify-content-between">
          <div class="col-lg-4">
            <div class="mobile-logo-and-serachbox">
              <span><i class="fas fa-search"></i></span>
              <input type="search" placeholder="جستجو در دیجی کالا...">
            </div>
          </div>

          <div class="col-lg-4">
            <div class="login-mobile">
              <button class="btn d-flex"><span class="pl-3"><i class="fas fa-sign-in-alt"></i></span>ورود</button>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="icon-shop">
              <i class="fas fa-shopping-cart icon"></i>
            </div>
          </div>
        </div>


        <div class="mobile-select-city d-flex justify-content-between mt-4">
          <div class="d-flex align-item-center">
            <h6><i class="fas fa-map-marker-alt"></i></h6>
            <span>شهر و استان خود را انتخاب کنید</span>
          </div>
          <small><i class="fas fa-angle-left"></i></small>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/nav'
export default {
  props : ['textCity'],
  components : {
    Nav
  }
}
</script>

<style scoped>

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
  appearance:none;
}

.navbar-mobile {
  display: none;
}

.mobile-logo-nav .navbar {
  margin: 0;
  padding: 0;
}

.logo-and-serachbox {
  position: relative;
}

.mobile-logo-and-serachbox img {
  margin-right: 1.5rem;
}

.mobile-logo-and-serachbox input{
  width: 100%;
  height: 42px;
  padding-right: 35px;
  border: 1px solid #fff;
  border-radius: 8px;
  background: #f0f0f1;
  outline: none;
}

.mobile-logo-and-serachbox input[type="search"]::placeholder {
  font-size: .8em;
  opacity: .3;
}

.mobile-logo-and-serachbox span {
  position: absolute;
  right: 170px;
  top: 13px;
  font-size: 1.2rem;
  opacity: .4;
}

.shop-and-login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 20px;
}

.shop-and-login span {
  border: .5px solid #dddd;
  height: 35px;
  margin-left: 13px;
  transform: rotate(180deg);
}

::placeholder {
  opacity: .5;
  padding-right: .9rem;
}

.login-rigester button {
  margin-left: 1.5rem;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: .7rem 1rem .7rem 1rem;
  font-size: .9em;
  display: flex;
  outline: none!important;
}

.login-rigester button:focus {
  outline: 0;
  box-shadow: none;
}

.icon-user {
  font-size: 1.4rem;
  color: darkgrey;
  padding-left: .3rem;
}

.icon-shop {
  margin-top: .4rem;
  border-right: 1px solid #ddd;
  padding-right: .8rem;
}

.icon{
  font-size: 1.4em;
  color: darkgrey;
}

.mobile-select-city {
  margin-top: 1rem;
}

.login-mobile button {
  align-items: center;
  padding: 0;
  margin: 0 1rem 0 1rem
}

.login-mobile button span {
  font-size: 1.3em;
  transform: rotate(180deg);
  padding-right: .4rem;
}

.mobile-select-city span {
  font-size: .8em;
  padding-right: 1rem;
  margin-top: .2rem;
  margin-bottom: 0;
}

.mobile-select-city h6 {
  font-size: 1.4em;
  color: #ecd81d!important;
}

.mobile-select-city small {
  font-size: 1.4em;
  color: #acacac;
}


/*responsive*/
@media (max-width : 970px) {
  .navbar-mobile {
    display: block;
  }

  .mobile-logo-and-serachbox span {
    position: absolute;
    right: 21px;
    top: 93px;
    font-size: 1rem;
    opacity: .4;
  }

  .mobile-logo-and-serachbox input {
    padding-right: 1rem;
  }
}
</style>