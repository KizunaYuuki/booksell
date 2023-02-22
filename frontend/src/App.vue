<script setup>
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue';
import LoginFormUser from './components/LoginFormUser.vue';
import ManageUser from './components/ManageUser.vue';
</script>

<template>
  <header>
    <HeaderVue />
    
  </header>

  <main>
    <LoginFormUser />
    <!-- <ManageUser /> -->
  </main>
  <footer>
    <FooterVue />
  </footer>
</template>

<style scoped>

</style>
