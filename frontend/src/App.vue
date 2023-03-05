<script setup>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue';
import LoginFormUser from './components/LoginFormUser.vue';
import RegisterUser from './components/RegisterUser.vue';
import Manage from './components/Manage.vue';
import ManageUser from './components/ManageUser.vue';
import Cart from './components/Cart.vue';
import Pay from './components/Pay.vue';
import RegisterAdmin from './components/RegisterAdmin.vue';


import AddressVue from './components/Address.vue';
// import SelectAddress from './components/SelectAddress.vue';
import Book_Details from './components/Book_Details.vue';

</script>

<template style="display:block;">
  <header>
    <HeaderVue />
  </header>

  <main>


    <!-- <SelectAddress /> -->
    <!-- <Book_Details /> -->



    <!-- <Cart /> -->
    <!-- <Pay /> -->
    <AddressVue />
    <LoginFormUser />
    <!-- <RegisterAdmin /> -->
    <RegisterUser />
    <!-- <Manage /> -->
    <!-- <ManageUser /> -->
  </main>
  <footer>
    <FooterVue />
  </footer>
</template>

<style scoped></style>