<script setup>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue';
import LoginUser from './components/LoginUser.vue'
import RegisterUser from './components/RegisterUser.vue';
import Cart from './components/Cart.vue';
import Pay from './components/Pay.vue';



import LoginAdmin from './components/LoginAdmin.vue';
import Book_Details from './components/Book_Details.vue';

import Test from './components/Test.vue';

</script>

<template style="display:block;">
  <header>
    <HeaderVue />
  </header>

  <main>
    <!-- <Cart /> -->
    <!-- <Pay /> -->
    <!-- <LoginUser /> -->
    <!-- <RegisterUser /> -->



    <Book_Details />
    <!-- <Test /> -->
    <!-- <LoginAdmin /> -->
  </main>
  <footer>
    <FooterVue />
  </footer>
</template>

<style scoped></style>