<template>
  <section class="container-fluid navbar-desktop mt-3 pt-3" style="background:#fff;">
    <div class="row">
      <div class="col-lg-6 pr-0">
        <div class="logo-and-serachbox">
          <img src="@/assets/image/bc60cf05.svg" alt="دیجی کالا" class="img-fluid" loading="lazy">
          <span><i class="fas fa-search"></i></span>
          <input type="search" class="" placeholder="جستجو در دیجی کالا...">
        </div>
      </div>

      <div class="col-lg-6">
        <div class="shop-and-login">
          <div class="login-rigester">
            <button class="btn"><i class="fas fa-user icon-user"></i>ورود به حساب کاربری</button>
          </div>
          <span></span>
          <div class="icon-shop">
            <i class="fas fa-shopping-cart icon"></i>
          </div>
        </div>
      </div>
    </div>

    <!--Nav-->
    <ComponentNav/>
  </section>
</template>

<script>
import ComponentNav from '@/components/ComponentNav'
export default {
  components : {
    ComponentNav
  }
}
</script>

<style>

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
  appearance:none;
}



.logo-and-serachbox {
  position: relative;
}

.logo-and-serachbox img {
  margin-right: 1.5rem;
}

.logo-and-serachbox input{
  border: 1px solid #fff;
  border-radius: 8px;
  width: 78%;
  height: 50px;
  background: #f0f0f1;
  margin-right: 1.4rem;
  outline: none;
  padding-right: 2.5rem;
}

.logo-and-serachbox input::placeholder {
  font-size: .8em;
  opacity: .3;
  padding-right: 2rem!important;
}

.logo-and-serachbox span {
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

.icon{
  font-size: 1.4rem;
  color: darkgrey;
}

/*responsive*/
@media (max-width: 970px) {
  .navbar-desktop {
    display: none;
  }
}
</style>