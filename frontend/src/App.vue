<script setup>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue';
import LoginUser from './components/LoginUser.vue'
import RegisterUser from './components/RegisterUser.vue';
import Cart from './components/Cart.vue';
import Pay from './components/Pay.vue';

import LoginAdmin from './components/LoginAdmin.vue';
import Book_Details from './components/Book_Details.vue';

</script>

<template class="html" style="display:block;">
  <html>
  <header>
    <HeaderVue />
  </header>

  <main>
    <!-- <Cart /> -->
    <!-- <Pay /> -->
    <!-- <LoginUser /> -->
    <!-- <RegisterUser /> -->

    <!-- <Book_Details /> -->


    <LoginAdmin />
  </main>
  <footer>
    <FooterVue />
  </footer>

  </html>
</template>

<style scoped>
.html {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(217deg, #fd5588, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #fffefa, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #ffb07e, rgba(0, 0, 255, 0) 70.71%);
}
</style>