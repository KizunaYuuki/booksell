<script setup>

import AppHeader from "@/components/Header.vue";
import LoginFormUser from './components/LoginFormUser.vue';
import RegisterUser from './components/RegisterUser.vue';
import FooterVue from "./components/Footer.vue";
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
      <LoginFormUser />
      <RegisterUser/>
    </div>
    <footer>
      <FooterVue/>
    </footer>
  </div>
</template>
<style>
::-webkit-scrollbar {
   display: none;
}

</style>